'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

interface Category {
  id: number;
  name: string;
}

export default function CategoriesManager() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [newName, setNewName] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingName, setEditingName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('categories').select('*').order('name', { ascending: true });
    if (!error && data) setCategories(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newName.trim();
    if (!trimmed) return;

    // Evitamos duplicados aunque cambie mayúsculas/espacios
    const alreadyExists = categories.some((c) => c.name.toLowerCase() === trimmed.toLowerCase());
    if (alreadyExists) {
      setError('Esa categoría ya existe.');
      return;
    }

    setSaving(true);
    setError(null);

    const { error: insertError } = await supabase.from('categories').insert({ name: trimmed });

    setSaving(false);

    if (insertError) {
      setError(`No se pudo crear la categoría: ${insertError.message} (código: ${insertError.code})`);
      return;
    }

    setNewName('');
    fetchCategories();
  };

  const startEdit = (c: Category) => {
    setEditingId(c.id);
    setEditingName(c.name);
    setError(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingName('');
  };

  const handleRename = async (id: number) => {
    const trimmed = editingName.trim();
    if (!trimmed) return;

    const conflict = categories.some(
      (c) => c.id !== id && c.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (conflict) {
      setError('Ya existe otra categoría con ese nombre.');
      return;
    }

    setSaving(true);
    setError(null);

    const { error: updateError } = await supabase.from('categories').update({ name: trimmed }).eq('id', id);

    setSaving(false);

    if (updateError) {
      setError('No se pudo renombrar la categoría.');
      return;
    }

    // Nota: esto NO actualiza el texto ya guardado en productos existentes,
    // solo cambia el nombre disponible para elegir de aquí en adelante.
    cancelEdit();
    fetchCategories();
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar esta categoría? Los productos que ya la tienen asignada no se modifican, solo dejará de estar disponible para elegir en nuevos productos.')) return;
    await supabase.from('categories').delete().eq('id', id);
    fetchCategories();
  };

  return (
    <div>
      <div className={styles.sectionHeader}>
        <h2>Categorías ({categories.length})</h2>
      </div>

      <div className={styles.dashboardPanel} style={{ maxWidth: 480, marginBottom: '1.5rem' }}>
        <form onSubmit={handleAdd} style={{ display: 'flex', gap: '0.6rem' }}>
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Ej: Fertilizantes"
            style={{
              flex: 1,
              padding: '0.65rem 0.85rem',
              borderRadius: '0.65rem',
              border: '1px solid #e2e8f0',
              fontSize: '0.9rem',
            }}
          />
          <button type="submit" className={styles.addBtn} disabled={saving}>
            + Agregar
          </button>
        </form>
        {error && <p className={styles.errorText}>{error}</p>}
      </div>

      {loading ? (
        <p className={styles.emptyState}>Cargando...</p>
      ) : categories.length === 0 ? (
        <p className={styles.emptyState}>Aún no hay categorías. Crea la primera arriba.</p>
      ) : (
        <div className={styles.dataTable}>
          {categories.map((c) => (
            <div key={c.id} className={styles.dataRow} style={{ gridTemplateColumns: '1fr auto' }}>
              {editingId === c.id ? (
                <input
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  style={{
                    padding: '0.5rem 0.7rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.88rem',
                  }}
                  autoFocus
                />
              ) : (
                <span className={styles.rowTitle}>{c.name}</span>
              )}

              <div className={styles.rowActions}>
                {editingId === c.id ? (
                  <>
                    <button className={styles.iconActionBtn} onClick={() => handleRename(c.id)} title="Guardar">
                      ✓
                    </button>
                    <button className={styles.iconActionBtn} onClick={cancelEdit} title="Cancelar">
                      ✕
                    </button>
                  </>
                ) : (
                  <>
                    <button className={styles.iconActionBtn} onClick={() => startEdit(c)} title="Renombrar">
                      ✎
                    </button>
                    <button
                      className={`${styles.iconActionBtn} ${styles.deleteActionBtn}`}
                      onClick={() => handleDelete(c.id)}
                      title="Eliminar"
                    >
                      ✕
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}