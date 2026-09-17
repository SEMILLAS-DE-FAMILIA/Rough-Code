'use client';

import React, { useState } from 'react';
import Papa from 'papaparse';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

interface CsvRow {
  product_key: string;
  title: string;
  categoria: string;
  description?: string;
  badge?: string;
  active?: string;
  is_new?: string;
  is_distributor?: string;
  weight: string;
  price: string;
  discount_percent?: string;
  precio_distribuidor?: string;
  flavor_name: string;
  stock: string;
}

interface ImportResult {
  product_key: string;
  title: string;
  status: 'created' | 'updated' | 'error';
  message?: string;
}

const parseBool = (v: string | undefined) => v?.trim().toUpperCase() === 'TRUE';

async function importGroup(key: string, groupRows: CsvRow[], categoryMap: Map<string, number>): Promise<ImportResult> {
  try {
    const first = groupRows[0];
    const categoryId = categoryMap.get((first.categoria || '').trim().toLowerCase());
    if (!categoryId) {
      throw new Error(`Categoría "${first.categoria || '(vacía)'}" no existe. Créala primero en "Categorías".`);
    }

    const weightOrder: string[] = [];
    const variantsByWeight = new Map<string, { weight: string; price: string; discount_percent: string; distributor_price: string }>();
    groupRows.forEach((r) => {
      const w = r.weight.trim();
      if (!variantsByWeight.has(w)) {
        weightOrder.push(w);
        variantsByWeight.set(w, {
          weight: w,
          price: r.price,
          discount_percent: r.discount_percent || '0',
          distributor_price: r.precio_distribuidor || '',
        });
      }
    });
    const variants = weightOrder.map((w) => variantsByWeight.get(w)!);

    const flavorOrder: string[] = [];
    groupRows.forEach((r) => {
      const f = r.flavor_name.trim();
      if (!flavorOrder.includes(f)) flavorOrder.push(f);
    });
    const flavors = flavorOrder.map((f) => ({ flavor_name: f }));

    const stockMatrix: Record<string, string> = {};
    weightOrder.forEach((_, vIdx) => {
      flavorOrder.forEach((_, fIdx) => {
        stockMatrix[`${vIdx}-${fIdx}`] = '0';
      });
    });
    groupRows.forEach((r) => {
      const vIdx = weightOrder.indexOf(r.weight.trim());
      const fIdx = flavorOrder.indexOf(r.flavor_name.trim());
      if (vIdx >= 0 && fIdx >= 0) stockMatrix[`${vIdx}-${fIdx}`] = r.stock || '0';
    });

    // Detectar si el producto ya existe (por título exacto) para actualizar en vez de duplicar
    const { data: existing } = await supabase
      .from('products')
      .select('id')
      .ilike('title', first.title.trim())
      .maybeSingle();

    const productPayload = {
      title: first.title.trim(),
      category_id: categoryId,
      description: first.description?.trim() || null,
      img_url: null,
      images: [],
      badge: first.badge?.trim() || null,
      active: first.active !== undefined ? parseBool(first.active) : true,
      is_new: parseBool(first.is_new),
      is_distributor: parseBool(first.is_distributor),
    };

    const { error: rpcError } = await supabase.rpc('save_product_transactional', {
      p_product_id: existing?.id ?? null,
      p_product_data: productPayload,
      p_variants: variants,
      p_flavors: flavors,
      p_stock_matrix: stockMatrix,
    });

    if (rpcError) throw new Error(rpcError.message);
    return { product_key: key, title: first.title, status: existing?.id ? 'updated' : 'created' };
  } catch (err) {
    console.error(`Error importando "${key}":`, err);
    return {
      product_key: key,
      title: groupRows[0]?.title || '',
      status: 'error',
      message: err instanceof Error ? err.message : 'Error desconocido',
    };
  }
}

export default function BulkImportManager() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('');
  const [importing, setImporting] = useState(false);
  const [results, setResults] = useState<ImportResult[]>([]);
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  const handleImport = () => {
    if (!file) return;
    setResults([]);
    setStatus('Leyendo archivo...');

    Papa.parse<CsvRow>(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim(),
      complete: async (parsed) => {
        console.log('CSV parseado:', parsed);

        if (parsed.errors.length > 0) {
          console.error('Errores de PapaParse:', parsed.errors);
          setStatus(`⚠️ El CSV tiene errores de formato: ${parsed.errors[0].message} (fila ${parsed.errors[0].row})`);
          return;
        }

        const rows = parsed.data.filter((r) => r.product_key?.trim());

        if (rows.length === 0) {
          setStatus(
            `⚠️ No se encontró ninguna fila válida con "product_key". Columnas detectadas: ${Object.keys(parsed.data[0] || {}).join(', ') || '(ninguna — revisa el delimitador del archivo)'}`
          );
          return;
        }

        try {
          setStatus('Consultando categorías...');
          const { data: categories, error: catError } = await supabase.from('categories').select('id, name');
          if (catError) throw new Error(`Error al leer categorías: ${catError.message}`);

          const categoryMap = new Map((categories || []).map((c) => [c.name.trim().toLowerCase(), c.id]));

          const groups = new Map<string, CsvRow[]>();
          rows.forEach((row) => {
            const key = row.product_key.trim();
            if (!groups.has(key)) groups.set(key, []);
            groups.get(key)!.push(row);
          });

          setStatus('');
          setImporting(true);
          setProgress({ done: 0, total: groups.size });
          const newResults: ImportResult[] = [];

          for (const [key, groupRows] of groups) {
            const result = await importGroup(key, groupRows, categoryMap);
            newResults.push(result);
            setProgress((p) => ({ ...p, done: p.done + 1 }));
          }

          setResults(newResults);
        } catch (err) {
          console.error('Error fatal en la importación:', err);
          setStatus(`❌ Error: ${err instanceof Error ? err.message : 'desconocido'} (revisa la consola para más detalle)`);
        } finally {
          setImporting(false);
        }
      },
      error: (err) => {
        console.error('Error de PapaParse:', err);
        setStatus(`❌ No se pudo leer el archivo: ${err.message}`);
      },
    });
  };

  const successCount = results.filter((r) => r.status !== 'error').length;
  const errorCount = results.filter((r) => r.status === 'error').length;

  return (
    <div>
      <div className={styles.sectionHeader}>
        <h2>Carga Masiva de Productos</h2>
      </div>

      <div className={styles.dashboardPanel} style={{ maxWidth: 640 }}>
        <p style={{ fontSize: '0.85rem', color: '#78716c', marginBottom: '1rem' }}>
          Sube el CSV con el formato de plantilla. Si un producto con el mismo título ya existe, se
          actualiza en vez de duplicarse.
        </p>

        <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files?.[0] || null)} style={{ marginBottom: '1rem' }} />

        <button className={styles.primaryBtn} onClick={handleImport} disabled={!file || importing}>
          {importing ? `Importando ${progress.done}/${progress.total}...` : 'Importar productos'}
        </button>

        {status && (
          <p style={{ marginTop: '1rem', fontSize: '0.85rem', fontWeight: 600, color: status.startsWith('❌') || status.startsWith('⚠️') ? '#dc2626' : '#57534e' }}>
            {status}
          </p>
        )}

        {results.length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.75rem' }}>
              {successCount} productos procesados{errorCount > 0 && `, ${errorCount} con errores`}
            </p>
            <div className={styles.dataTable}>
              {results.map((r, i) => (
                <div key={i} className={styles.dataRow} style={{ gridTemplateColumns: '1fr auto' }}>
                  <div>
                    <div className={styles.rowTitle}>{r.title || r.product_key}</div>
                    {r.message && <div className={styles.rowMeta} style={{ color: '#dc2626' }}>{r.message}</div>}
                  </div>
                  <span
                    className={styles.badgePill}
                    style={
                      r.status === 'error'
                        ? { background: '#fee2e2', color: '#dc2626' }
                        : r.status === 'updated'
                        ? { background: '#dbeafe', color: '#1d4ed8' }
                        : { background: '#dcfce7', color: '#15803d' }
                    }
                  >
                    {r.status === 'error' ? 'Error' : r.status === 'updated' ? 'Actualizado' : 'Creado'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}