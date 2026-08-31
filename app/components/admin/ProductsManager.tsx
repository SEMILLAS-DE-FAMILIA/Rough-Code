'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import ImageUploadField from './ImageUploadField';
import styles from './Admin.module.css';

interface AdminProduct {
  id: number;
  title: string;
  category: string;
  price: number;
  discount_percent: number;
  final_price: number;
  description: string | null;
  img_url: string | null;
  badge: string | null;
  stock: number;
  active: boolean;
  is_new: boolean;
}

const emptyForm = {
  title: '',
  category: '',
  price: '',
  discount_percent: '0',
  description: '',
  img_url: '',
  badge: '',
  stock: '0',
  active: true,
  is_new: false,
};

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

export default function ProductsManager() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) setProducts(data);
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
    setForm(emptyForm);
    setFormError(null);
    setShowModal(true);
  };

  const openEditModal = (p: AdminProduct) => {
    setEditingId(p.id);
    setForm({
      title: p.title,
      category: p.category,
      price: String(p.price),
      discount_percent: String(p.discount_percent),
      description: p.description ?? '',
      img_url: p.img_url ?? '',
      badge: p.badge ?? '',
      stock: String(p.stock),
      active: p.active,
      is_new: p.is_new,
    });
    setFormError(null);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    const priceNum = parseFloat(form.price);
    const discountNum = parseFloat(form.discount_percent || '0');
    const stockNum = parseInt(form.stock || '0', 10);

    if (!form.title.trim() || !form.category.trim() || isNaN(priceNum) || priceNum < 0) {
      setFormError('Completa título, categoría y un precio válido.');
      return;
    }
    if (discountNum < 0 || discountNum > 100) {
      setFormError('El descuento debe estar entre 0 y 100.');
      return;
    }

    setSaving(true);
    setFormError(null);

    const payload = {
      title: form.title.trim(),
      category: form.category.trim(),
      price: priceNum,
      discount_percent: discountNum,
      description: form.description.trim() || null,
      img_url: form.img_url || null,
      badge: form.badge.trim() || null,
      stock: isNaN(stockNum) ? 0 : stockNum,
      active: form.active,
      is_new: form.is_new,
    };

    const { error } = editingId
      ? await supabase.from('products').update(payload).eq('id', editingId)
      : await supabase.from('products').insert(payload);

    setSaving(false);

    if (error) {
      setFormError('No se pudo guardar el producto. Intenta de nuevo.');
      return;
    }

    setShowModal(false);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este producto? Esta acción no se puede deshacer.')) return;
    await supabase.from('products').delete().eq('id', id);
    fetchProducts();
  };

  const toggleActive = async (p: AdminProduct) => {
    await supabase.from('products').update({ active: !p.active }).eq('id', p.id);
    fetchProducts();
  };

  const previewFinalPrice = () => {
    const priceNum = parseFloat(form.price);
    const discountNum = parseFloat(form.discount_percent || '0');
    if (isNaN(priceNum)) return null;
    const final = Math.round(priceNum * (1 - (isNaN(discountNum) ? 0 : discountNum) / 100));
    return final;
  };

  const finalPreview = previewFinalPrice();

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
        <p className={styles.emptyState}>Aún no hay productos. Crea el primero.</p>
      ) : (
        <div className={styles.dataTable}>
          {products.map((p) => (
            <div
              key={p.id}
              className={styles.dataRow}
              style={{ gridTemplateColumns: '44px 1fr auto auto' }}
            >
              {p.img_url ? (
                <img src={p.img_url} alt={p.title} className={styles.rowThumb} />
              ) : (
                <div className={styles.rowThumb} />
              )}
              <div>
                <div className={styles.rowTitle}>{p.title}</div>
                <div className={styles.rowMeta}>
                  {p.category} · {formatCLP(p.final_price)}
                  {p.discount_percent > 0 && ` (−${p.discount_percent}% de ${formatCLP(p.price)})`}
                  {' · Stock: '}
                  {p.stock}
                  {p.is_new && ' · 🌟 Novedad'}
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
                <button className={styles.iconActionBtn} onClick={() => openEditModal(p)} title="Editar">
                  ✎
                </button>
                <button
                  className={`${styles.iconActionBtn} ${styles.deleteActionBtn}`}
                  onClick={() => handleDelete(p.id)}
                  title="Eliminar"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <h3>{editingId ? 'Editar producto' : 'Nuevo producto'}</h3>

            <form onSubmit={handleSave}>
              <div className={styles.field}>
                <label>Nombre del producto</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label>Categoría</label>
                  {categories.length === 0 ? (
                    <p style={{ fontSize: '0.8rem', color: '#a8a29e' }}>
                      No hay categorías creadas. Ve a la pestaña "Categorías" y crea al menos una.
                    </p>
                  ) : (
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      required
                    >
                      <option value="" disabled>
                        Selecciona una categoría
                      </option>
                      {categories.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className={styles.field}>
                  <label>Etiqueta (opcional)</label>
                  <input
                    value={form.badge}
                    onChange={(e) => setForm({ ...form, badge: e.target.value })}
                    placeholder="Orgánico, Top Ventas..."
                  />
                </div>
              </div>

              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label>Precio (CLP)</label>
                  <input
                    type="number"
                    min="0"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label>Descuento (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={form.discount_percent}
                    onChange={(e) => setForm({ ...form, discount_percent: e.target.value })}
                  />
                </div>
              </div>

              {finalPreview !== null && (
                <div className={styles.finalPricePreview}>
                  Precio final al cliente: {formatCLP(finalPreview)}
                </div>
              )}

              <div className={styles.field}>
                <label>Stock disponible</label>
                <input
                  type="number"
                  min="0"
                  value={form.stock}
                  onChange={(e) => setForm({ ...form, stock: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label>Descripción (se muestra al presionar el "+" en la tienda)</label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>

              <ImageUploadField
                bucket="product-images"
                value={form.img_url || null}
                onChange={(url) => setForm({ ...form, img_url: url })}
                label="Imagen del producto"
              />

              <label className={styles.switchRow} style={{ marginTop: '1.1rem' }}>
                <input
                  type="checkbox"
                  className={styles.switchInput}
                  checked={form.active}
                  onChange={(e) => setForm({ ...form, active: e.target.checked })}
                />
                <span className={styles.switchTrack}>
                  <span className={styles.switchThumb} />
                </span>
                <span className={styles.switchLabel}>Visible en la tienda</span>
              </label>

              <label className={styles.switchRow}>
                <input
                  type="checkbox"
                  className={styles.switchInput}
                  checked={form.is_new}
                  onChange={(e) => setForm({ ...form, is_new: e.target.checked })}
                />
                <span className={styles.switchTrack}>
                  <span className={styles.switchThumb} />
                </span>
                <span className={styles.switchLabel}>
                  Marcar como novedad (aparecerá en la sección Novedades de la tienda)
                </span>
              </label>

              {formError && <p className={styles.errorText}>{formError}</p>}

              <div className={styles.modalActions}>
                <button type="button" className={styles.secondaryBtn} onClick={closeModal}>
                  Cancelar
                </button>
                <button type="submit" className={styles.primaryBtn} disabled={saving}>
                  {saving ? 'Guardando...' : 'Guardar producto'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}