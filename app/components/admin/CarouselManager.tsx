'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import ImageUploadField from './ImageUploadField';
import styles from './Admin.module.css';

interface Slide {
  id: number;
  title: string;
  subtitle: string | null;
  img_url: string | null;
  btn_text: string | null;
  sort_order: number;
  active: boolean;
}

const emptyForm = {
  title: '',
  subtitle: '',
  img_url: '',
  btn_text: 'Ver Catálogo',
  sort_order: '0',
  active: true,
};

export default function CarouselManager() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const fetchSlides = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('carousel_slides')
      .select('*')
      .order('sort_order', { ascending: true });

    if (!error && data) setSlides(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  const openCreateModal = () => {
    setEditingId(null);
    setForm(emptyForm);
    setFormError(null);
    setShowModal(true);
  };

  const openEditModal = (s: Slide) => {
    setEditingId(s.id);
    
    // Si img_url viene como JSON/array desde la DB, extrae el primer string limpio
    let cleanedImgUrl = s.img_url ?? '';
    if (typeof cleanedImgUrl === 'string' && cleanedImgUrl.startsWith('[')) {
      try {
        const parsed = JSON.parse(cleanedImgUrl);
        if (Array.isArray(parsed) && parsed.length > 0) {
          cleanedImgUrl = parsed[0];
        }
      } catch (e) {
        // En caso de que no sea un JSON válido, conserva el string
      }
    }

    setForm({
      title: s.title,
      subtitle: s.subtitle ?? '',
      img_url: cleanedImgUrl,
      btn_text: s.btn_text ?? 'Ver Catálogo',
      sort_order: String(s.sort_order),
      active: s.active,
    });
    setFormError(null);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setFormError('El título es obligatorio.');
      return;
    }
    if (!form.img_url) {
      setFormError('Sube una imagen para el slide.');
      return;
    }

    const sortOrderNum = parseInt(form.sort_order || '0', 10) || 0;

    const conflict = slides.some((s) => s.sort_order === sortOrderNum && s.id !== editingId);
    if (conflict) {
      setFormError(`Ya existe un slide en la posición ${sortOrderNum}. Elige otra posición.`);
      return;
    }

    setSaving(true);
    setFormError(null);

    const payload = {
      title: form.title.trim(),
      subtitle: form.subtitle.trim() || null,
      img_url: form.img_url, // Guarda una única string URL
      btn_text: form.btn_text.trim() || 'Ver Catálogo',
      sort_order: sortOrderNum,
      active: form.active,
    };

    const { error } = editingId
      ? await supabase.from('carousel_slides').update(payload).eq('id', editingId)
      : await supabase.from('carousel_slides').insert(payload);

    setSaving(false);

    if (error) {
      setFormError('No se pudo guardar el slide. Intenta de nuevo.');
      return;
    }

    setShowModal(false);
    fetchSlides();
  };

  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar este slide del carrusel?')) return;
    await supabase.from('carousel_slides').delete().eq('id', id);
    fetchSlides();
  };

  const toggleActive = async (s: Slide) => {
    await supabase.from('carousel_slides').update({ active: !s.active }).eq('id', s.id);
    fetchSlides();
  };

  return (
    <div>
      <div className={styles.sectionHeader}>
        <h2>Carrusel ({slides.length})</h2>
        <button className={styles.addBtn} onClick={openCreateModal}>
          + Nuevo slide
        </button>
      </div>

      {loading ? (
        <p className={styles.emptyState}>Cargando...</p>
      ) : slides.length === 0 ? (
        <p className={styles.emptyState}>Aún no hay slides. Crea el primero.</p>
      ) : (
        <div className={styles.dataTable}>
          {slides.map((s) => (
            <div
              key={s.id}
              className={styles.dataRow}
              style={{ gridTemplateColumns: '44px 1fr auto auto' }}
            >
              {s.img_url ? (
                <img
                  src={Array.isArray(s.img_url) ? s.img_url[0] : s.img_url}
                  alt={s.title}
                  className={styles.rowThumb}
                />
              ) : (
                <div className={styles.rowThumb} />
              )}
              <div>
                <div className={styles.rowTitle}>{s.title}</div>
                <div className={styles.rowMeta}>Orden: {s.sort_order}</div>
              </div>
              <button
                className={`${styles.badgePill} ${s.active ? styles.badgeActive : styles.badgeInactive}`}
                onClick={() => toggleActive(s)}
                style={{ border: 'none', cursor: 'pointer' }}
              >
                {s.active ? 'Activo' : 'Inactivo'}
              </button>
              <div className={styles.rowActions}>
                <button className={styles.iconActionBtn} onClick={() => openEditModal(s)} title="Editar">
                  ✎
                </button>
                <button
                  className={`${styles.iconActionBtn} ${styles.deleteActionBtn}`}
                  onClick={() => handleDelete(s.id)}
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
            <h3>{editingId ? 'Editar slide' : 'Nuevo slide'}</h3>

            <form onSubmit={handleSave}>
              <div className={styles.field}>
                <label>Título</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                />
              </div>

              <div className={styles.field}>
                <label>Subtítulo</label>
                <textarea
                  rows={2}
                  value={form.subtitle}
                  onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                />
              </div>

              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label>Texto del botón</label>
                  <input
                    value={form.btn_text}
                    onChange={(e) => setForm({ ...form, btn_text: e.target.value })}
                  />
                </div>
                <div className={styles.field}>
                  <label>Orden (0 = primero)</label>
                  <input
                    type="number"
                    value={form.sort_order}
                    onChange={(e) => setForm({ ...form, sort_order: e.target.value })}
                  />
                  {slides.length > 0 && (
                    <p style={{ fontSize: '0.75rem', color: '#a8a29e', marginTop: '0.35rem' }}>
                      Posiciones en uso:{' '}
                      {slides
                        .filter((s) => s.id !== editingId)
                        .map((s) => s.sort_order)
                        .sort((a, b) => a - b)
                        .join(', ') || 'ninguna'}
                    </p>
                  )}
                </div>
              </div>

              {/* Adaptamos el valor a Array para ImageUploadField y extraemos el último string al guardar */}
              <ImageUploadField
                bucket="carousel-images"
                value={form.img_url ? [form.img_url] : []}
                onChange={(urls) => setForm({ ...form, img_url: urls[urls.length - 1] || '' })}
                label="Imagen del slide"
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
                <span className={styles.switchLabel}>Visible en el carrusel</span>
              </label>

              {formError && <p className={styles.errorText}>{formError}</p>}

              <div className={styles.modalActions}>
                <button type="button" className={styles.secondaryBtn} onClick={closeModal}>
                  Cancelar
                </button>
                <button type="submit" className={styles.primaryBtn} disabled={saving}>
                  {saving ? 'Guardando...' : 'Guardar slide'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}