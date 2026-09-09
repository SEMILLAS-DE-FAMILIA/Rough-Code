'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../../src/lib/supabaseClient';
import ImageUploadField from './ImageUploadField';
import styles from './Admin.module.css';

interface AdminVariant {
  id?: number;
  weight: string;
  price: string;
  discount_percent: string;
  distributor_price: string; // vacío si este peso no tiene precio distribuidor propio
}

interface AdminFlavor {
  id?: number;
  flavor_name: string;
}

interface AdminProduct {
  id: number;
  title: string;
  category_id: number | null;
  category_name?: string;
  description: string | null;
  img_url: string | null;
  images: string[] | null;
  badge: string | null;
  active: boolean;
  is_new: boolean;
  is_distributor: boolean;
  variants?: AdminVariant[];
  flavors?: AdminFlavor[];
  stockMap?: Record<string, number>;
}

interface FormState {
  title: string;
  category_id: string;
  description: string;
  images: string[];
  badge: string;
  active: boolean;
  is_new: boolean;
  is_distributor: boolean;
  variants: AdminVariant[];
  flavors: AdminFlavor[];
  stockMatrix: Record<string, string>;
}

const emptyForm: FormState = {
  title: '',
  category_id: '',
  description: '',
  images: [],
  badge: '',
  active: true,
  is_new: false,
  is_distributor: false,
  variants: [],
  flavors: [],
  stockMatrix: {},
};

export default function ProductsManager() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select(`
        *,
        categories ( name ),
        product_variants (
          id,
          weight,
          price,
          discount_percent,
          variant_flavor_stock ( flavor_id, stock ),
          variant_distributor_price ( price )
        ),
        product_flavors ( id, flavor_name )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error al cargar productos:', error.message || error);
      setLoading(false);
      return;
    }

    if (data) {
      const mappedProducts: AdminProduct[] = data.map((p: any) => {
        const stockMap: Record<string, number> = {};
        (p.product_variants || []).forEach((v: any) => {
          (v.variant_flavor_stock || []).forEach((vfs: any) => {
            stockMap[`${v.id}-${vfs.flavor_id}`] = vfs.stock;
          });
        });

        return {
          ...p,
          category_name: p.categories?.name || 'Sin categoría',
          variants: (p.product_variants || []).map((v: any) => ({
            id: v.id,
            weight: v.weight,
            price: String(v.price),
            discount_percent: String(v.discount_percent ?? 0),
            distributor_price: v.variant_distributor_price?.price != null ? String(v.variant_distributor_price.price) : '',
          })),
          flavors: (p.product_flavors || []).map((f: any) => ({
            id: f.id,
            flavor_name: f.flavor_name,
          })),
          stockMap,
        };
      });
      setProducts(mappedProducts);
    }
    setLoading(false);
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select('id, name').order('name', { ascending: true });
    if (!error && data) setCategories(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const openCreateModal = () => {
    setEditingId(null);
    setForm({
      ...emptyForm,
      variants: [{ weight: '500g', price: '5000', discount_percent: '0', distributor_price: '' }],
      flavors: [{ flavor_name: 'Natural' }],
      stockMatrix: { '0-0': '10' },
    });
    setFormError(null);
    setShowModal(true);
  };

  const openEditModal = (p: AdminProduct) => {
    setEditingId(p.id);

    const initialImages = p.images && p.images.length > 0 ? p.images : p.img_url ? [p.img_url] : [];
    const variants =
      p.variants && p.variants.length > 0
        ? p.variants
        : [{ weight: '500g', price: '0', discount_percent: '0', distributor_price: '' }];
    const flavors = p.flavors && p.flavors.length > 0 ? p.flavors : [{ flavor_name: 'Natural' }];

    const stockMatrix: Record<string, string> = {};
    variants.forEach((v, vIdx) => {
      flavors.forEach((f, fIdx) => {
        const key = v.id != null && f.id != null ? `${v.id}-${f.id}` : undefined;
        const stock = key ? p.stockMap?.[key] : undefined;
        stockMatrix[`${vIdx}-${fIdx}`] = stock != null ? String(stock) : '0';
      });
    });

    setForm({
      title: p.title,
      category_id: p.category_id ? String(p.category_id) : '',
      description: p.description ?? '',
      images: initialImages,
      badge: p.badge ?? '',
      active: p.active,
      is_new: p.is_new,
      is_distributor: p.is_distributor,
      variants,
      flavors,
      stockMatrix,
    });
    setFormError(null);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  // ---------- Pesos ----------
  const updateVariant = (idx: number, patch: Partial<AdminVariant>) => {
    const updated = [...form.variants];
    updated[idx] = { ...updated[idx], ...patch };
    setForm({ ...form, variants: updated });
  };

  const addVariant = () => {
    const newIdx = form.variants.length;
    const newStockMatrix = { ...form.stockMatrix };
    form.flavors.forEach((_, fIdx) => {
      newStockMatrix[`${newIdx}-${fIdx}`] = '0';
    });
    setForm({
      ...form,
      variants: [...form.variants, { weight: '', price: '', discount_percent: '0', distributor_price: '' }],
      stockMatrix: newStockMatrix,
    });
  };

  const removeVariant = (idx: number) => {
    const newVariants = form.variants.filter((_, i) => i !== idx);
    const newStockMatrix: Record<string, string> = {};
    Object.entries(form.stockMatrix).forEach(([key, val]) => {
      const [vIdxStr, fIdxStr] = key.split('-');
      const vIdx = parseInt(vIdxStr, 10);
      if (vIdx === idx) return;
      const newVIdx = vIdx > idx ? vIdx - 1 : vIdx;
      newStockMatrix[`${newVIdx}-${fIdxStr}`] = val;
    });
    setForm({ ...form, variants: newVariants, stockMatrix: newStockMatrix });
  };

  // ---------- Sabores ----------
  const updateFlavor = (idx: number, patch: Partial<AdminFlavor>) => {
    const updated = [...form.flavors];
    updated[idx] = { ...updated[idx], ...patch };
    setForm({ ...form, flavors: updated });
  };

  const addFlavor = () => {
    const newIdx = form.flavors.length;
    const newStockMatrix = { ...form.stockMatrix };
    form.variants.forEach((_, vIdx) => {
      newStockMatrix[`${vIdx}-${newIdx}`] = '0';
    });
    setForm({
      ...form,
      flavors: [...form.flavors, { flavor_name: '' }],
      stockMatrix: newStockMatrix,
    });
  };

  const removeFlavor = (idx: number) => {
    const newFlavors = form.flavors.filter((_, i) => i !== idx);
    const newStockMatrix: Record<string, string> = {};
    Object.entries(form.stockMatrix).forEach(([key, val]) => {
      const [vIdxStr, fIdxStr] = key.split('-');
      const fIdx = parseInt(fIdxStr, 10);
      if (fIdx === idx) return;
      const newFIdx = fIdx > idx ? fIdx - 1 : fIdx;
      newStockMatrix[`${vIdxStr}-${newFIdx}`] = val;
    });
    setForm({ ...form, flavors: newFlavors, stockMatrix: newStockMatrix });
  };

  // ---------- Stock por combinación ----------
  const updateStock = (vIdx: number, fIdx: number, value: string) => {
    setForm({ ...form, stockMatrix: { ...form.stockMatrix, [`${vIdx}-${fIdx}`]: value } });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    const categoryIdNum = form.category_id ? parseInt(form.category_id, 10) : null;

    if (!form.title.trim() || !categoryIdNum) {
      setFormError('Completa el título y selecciona una categoría.');
      return;
    }
    if (form.variants.length === 0 || form.variants.some((v) => !v.weight.trim() || v.price === '')) {
      setFormError('Agrega al menos un peso con precio.');
      return;
    }
    if (form.flavors.length === 0 || form.flavors.some((f) => !f.flavor_name.trim())) {
      setFormError('Agrega al menos un sabor con nombre.');
      return;
    }
    if (form.is_distributor && form.variants.some((v) => !v.distributor_price.trim())) {
      setFormError('Como marcaste "disponible para distribuidor", cada peso necesita su precio distribuidor.');
      return;
    }

    setSaving(true);
    setFormError(null);

    const mainImageUrl = form.images.length > 0 ? form.images[0] : null;

    const productPayload = {
      title: form.title.trim(),
      category_id: categoryIdNum,
      description: form.description.trim() || null,
      img_url: mainImageUrl,
      images: form.images,
      badge: form.badge.trim() || null,
      active: form.active,
      is_new: form.is_new,
      is_distributor: form.is_distributor,
    };

    let targetProductId = editingId;

    if (editingId) {
      const { error: updateError } = await supabase.from('products').update(productPayload).eq('id', editingId);
      if (updateError) {
        setSaving(false);
        setFormError(`Error al actualizar: ${updateError.message}`);
        return;
      }
      // Al borrar variantes se limpia en cascada su stock y su precio distribuidor
      await supabase.from('product_variants').delete().eq('product_id', targetProductId);
      await supabase.from('product_flavors').delete().eq('product_id', targetProductId);
    } else {
      const { data: insertedData, error: insertError } = await supabase
        .from('products')
        .insert(productPayload)
        .select('id')
        .single();

      if (insertError || !insertedData) {
        setSaving(false);
        setFormError(`Error al crear: ${insertError?.message}`);
        return;
      }
      targetProductId = insertedData.id;
    }

    // Insertar pesos, y si aplica, su precio distribuidor
    const variantIds: number[] = [];
    for (const v of form.variants) {
      const { data: insertedVariant, error: variantError } = await supabase
        .from('product_variants')
        .insert({
          product_id: targetProductId,
          weight: v.weight.trim(),
          price: parseFloat(v.price) || 0,
          discount_percent: parseFloat(v.discount_percent || '0'),
        })
        .select('id')
        .single();

      if (variantError || !insertedVariant) {
        setSaving(false);
        setFormError(`Error al guardar el peso "${v.weight}": ${variantError?.message}`);
        return;
      }
      variantIds.push(insertedVariant.id);

      if (form.is_distributor && v.distributor_price.trim()) {
        const { error: distPriceError } = await supabase.from('variant_distributor_price').insert({
          variant_id: insertedVariant.id,
          price: parseFloat(v.distributor_price) || 0,
        });
        if (distPriceError) {
          setSaving(false);
          setFormError(`Error al guardar precio distribuidor de "${v.weight}": ${distPriceError.message}`);
          return;
        }
      }
    }

    // Insertar sabores
    const flavorIds: number[] = [];
    for (const f of form.flavors) {
      const { data: insertedFlavor, error: flavorError } = await supabase
        .from('product_flavors')
        .insert({
          product_id: targetProductId,
          flavor_name: f.flavor_name.trim(),
        })
        .select('id')
        .single();

      if (flavorError || !insertedFlavor) {
        setSaving(false);
        setFormError(`Error al guardar el sabor "${f.flavor_name}": ${flavorError?.message}`);
        return;
      }
      flavorIds.push(insertedFlavor.id);
    }

    // Insertar la matriz de stock (peso × sabor)
    const stockPayload = form.variants.flatMap((_, vIdx) =>
      form.flavors.map((_, fIdx) => ({
        variant_id: variantIds[vIdx],
        flavor_id: flavorIds[fIdx],
        stock: parseInt(form.stockMatrix[`${vIdx}-${fIdx}`] || '0', 10),
      }))
    );

    const { error: stockError } = await supabase.from('variant_flavor_stock').insert(stockPayload);
    if (stockError) {
      setSaving(false);
      setFormError(`Error al guardar el stock: ${stockError.message}`);
      return;
    }

    setSaving(false);
    setShowModal(false);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este producto?')) return;
    await supabase.from('products').delete().eq('id', id);
    fetchProducts();
  };

  const toggleActive = async (p: AdminProduct) => {
    await supabase.from('products').update({ active: !p.active }).eq('id', p.id);
    fetchProducts();
  };

  const totalStockFor = (p: AdminProduct) =>
    p.stockMap ? Object.values(p.stockMap).reduce((sum, s) => sum + s, 0) : 0;

  return (
    <div>
      <div className={styles.sectionHeader}>
        <h2>Productos ({products.length})</h2>
        <button className={styles.addBtn} onClick={openCreateModal}>
          + Nuevo producto
        </button>
      </div>

      {loading ? (
        <p className={styles.emptyState}>Cargando...</p>
      ) : products.length === 0 ? (
        <p className={styles.emptyState}>Aún no hay productos.</p>
      ) : (
        <div className={styles.dataTable}>
          {products.map((p) => (
            <div key={p.id} className={styles.dataRow} style={{ gridTemplateColumns: '44px 1fr auto auto' }}>
              {p.img_url ? (
                <div className={styles.rowThumb} style={{ position: 'relative', overflow: 'hidden' }}>
                  <Image src={p.img_url} alt={p.title} width={44} height={44} style={{ objectFit: 'cover' }} />
                </div>
              ) : (
                <div className={styles.rowThumb} />
              )}
              <div>
                <div className={styles.rowTitle}>{p.title}</div>
                <div className={styles.rowMeta}>
                  {p.category_name} · {p.variants?.length || 0} pesos · {p.flavors?.length || 0} sabores · Stock total: {totalStockFor(p)}
                  {p.is_distributor && ' · 🏷️ Distribuidor'}
                </div>
              </div>
              <button
                className={`${styles.badgePill} ${p.active ? styles.badgeActive : styles.badgeInactive}`}
                onClick={() => toggleActive(p)}
                style={{ border: 'none', cursor: 'pointer' }}
              >
                {p.active ? 'Activo' : 'Inactivo'}
              </button>
              <div className={styles.rowActions}>
                <button className={styles.iconActionBtn} onClick={() => openEditModal(p)}>✎</button>
                <button className={`${styles.iconActionBtn} ${styles.deleteActionBtn}`} onClick={() => handleDelete(p.id)}>✕</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px', maxHeight: '90vh', overflowY: 'auto' }}>
            <h3>{editingId ? 'Editar producto' : 'Nuevo producto'}</h3>

            <form onSubmit={handleSave}>
              <div className={styles.field}>
                <label>Nombre del producto</label>
                <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>

              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label>Categoría</label>
                  <select value={form.category_id} onChange={(e) => setForm({ ...form, category_id: e.target.value })} required>
                    <option value="" disabled>Selecciona una categoría</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label>Etiqueta</label>
                  <input value={form.badge} onChange={(e) => setForm({ ...form, badge: e.target.value })} placeholder="Top Ventas..." />
                </div>
              </div>

              <label className={styles.switchRow} style={{ marginTop: '0.5rem' }}>
                <input
                  type="checkbox"
                  className={styles.switchInput}
                  checked={form.is_distributor}
                  onChange={(e) => setForm({ ...form, is_distributor: e.target.checked })}
                />
                <span className={styles.switchTrack}><span className={styles.switchThumb} /></span>
                <span className={styles.switchLabel}>Disponible para distribuidores (requiere precio distribuidor por peso)</span>
              </label>

              {/* PESOS */}
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '1rem' }}>
                <label style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.6rem', display: 'block' }}>
                  Pesos
                </label>

                {form.variants.map((v, vIdx) => (
                  <div
                    key={vIdx}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: form.is_distributor ? '1fr 1fr 1fr 1fr auto' : '1fr 1fr 1fr auto',
                      gap: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    <input
                      type="text"
                      value={v.weight}
                      onChange={(e) => updateVariant(vIdx, { weight: e.target.value })}
                      placeholder="Ej. 500g"
                      required
                    />
                    <input
                      type="number"
                      value={v.price}
                      onChange={(e) => updateVariant(vIdx, { price: e.target.value })}
                      placeholder="Precio público ($)"
                      required
                    />
                    <input
                      type="number"
                      value={v.discount_percent}
                      onChange={(e) => updateVariant(vIdx, { discount_percent: e.target.value })}
                      placeholder="% Descuento"
                    />
                    {form.is_distributor && (
                      <input
                        type="number"
                        value={v.distributor_price}
                        onChange={(e) => updateVariant(vIdx, { distributor_price: e.target.value })}
                        placeholder="Precio distribuidor ($)"
                        style={{ borderColor: '#f59e0b' }}
                        required
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => removeVariant(vIdx)}
                      style={{ background: '#fee2e2', color: '#dc2626', border: 'none', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer' }}
                    >
                      ✕
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addVariant}
                  style={{ background: '#0f172a', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer' }}
                >
                  + Agregar peso
                </button>
              </div>

              {/* SABORES */}
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '1rem' }}>
                <label style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.6rem', display: 'block' }}>
                  Sabores
                </label>

                {form.flavors.map((f, fIdx) => (
                  <div key={fIdx} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px', marginBottom: '8px' }}>
                    <input
                      type="text"
                      value={f.flavor_name}
                      onChange={(e) => updateFlavor(fIdx, { flavor_name: e.target.value })}
                      placeholder="Nombre del sabor"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => removeFlavor(fIdx)}
                      style={{ background: '#fee2e2', color: '#dc2626', border: 'none', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer' }}
                    >
                      ✕
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addFlavor}
                  style={{ background: '#0f172a', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer' }}
                >
                  + Agregar sabor
                </button>
              </div>

              {/* MATRIZ DE STOCK */}
              {form.variants.length > 0 && form.flavors.length > 0 && (
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '1rem' }}>
                  <label style={{ fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.6rem', display: 'block' }}>
                    Stock por combinación (peso × sabor)
                  </label>

                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'left', padding: '6px', borderBottom: '1px solid #e2e8f0' }}>Sabor \ Peso</th>
                          {form.variants.map((v, vIdx) => (
                            <th key={vIdx} style={{ textAlign: 'center', padding: '6px', borderBottom: '1px solid #e2e8f0', minWidth: '90px' }}>
                              {v.weight || `Peso ${vIdx + 1}`}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {form.flavors.map((f, fIdx) => (
                          <tr key={fIdx}>
                            <td style={{ padding: '6px', fontWeight: 600 }}>{f.flavor_name || `Sabor ${fIdx + 1}`}</td>
                            {form.variants.map((_, vIdx) => (
                              <td key={vIdx} style={{ padding: '4px', textAlign: 'center' }}>
                                <input
                                  type="number"
                                  min="0"
                                  value={form.stockMatrix[`${vIdx}-${fIdx}`] ?? '0'}
                                  onChange={(e) => updateStock(vIdx, fIdx, e.target.value)}
                                  style={{ width: '70px', padding: '4px 6px', borderRadius: '6px', border: '1px solid #e2e8f0', textAlign: 'center' }}
                                />
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              <div className={styles.field} style={{ marginTop: '1rem' }}>
                <label>Descripción</label>
                <textarea rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </div>

              <ImageUploadField bucket="product-images" value={form.images} onChange={(urls) => setForm({ ...form, images: urls })} label="Imágenes" altText={form.title} />

              <label className={styles.switchRow} style={{ marginTop: '1rem' }}>
                <input type="checkbox" className={styles.switchInput} checked={form.active} onChange={(e) => setForm({ ...form, active: e.target.checked })} />
                <span className={styles.switchTrack}><span className={styles.switchThumb} /></span>
                <span className={styles.switchLabel}>Visible en la tienda</span>
              </label>

              <label className={styles.switchRow}>
                <input type="checkbox" className={styles.switchInput} checked={form.is_new} onChange={(e) => setForm({ ...form, is_new: e.target.checked })} />
                <span className={styles.switchTrack}><span className={styles.switchThumb} /></span>
                <span className={styles.switchLabel}>Marcar como novedad</span>
              </label>

              {formError && <p className={styles.errorText}>{formError}</p>}

              <div className={styles.modalActions}>
                <button type="button" className={styles.secondaryBtn} onClick={closeModal}>Cancelar</button>
                <button type="submit" className={styles.primaryBtn} disabled={saving}>{saving ? 'Guardando...' : 'Guardar'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}