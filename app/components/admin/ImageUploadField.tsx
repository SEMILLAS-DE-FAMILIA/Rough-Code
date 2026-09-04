'use client';

import React, { useRef, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

interface ImageUploadFieldProps {
  bucket: 'product-images' | 'carousel-images';
  value: string[]; // <--- Ahora recibe una lista de URLs
  onChange: (urls: string[]) => void; // <--- Retorna la nueva lista de URLs
  label?: string;
  altText?: string;
}

const compressImage = (file: File, maxWidth = 1200, quality = 0.82): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let { width, height } = img;

      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) return reject('No se pudo procesar el contexto del canvas.');

      ctx.drawImage(img, 0, 0, width, height);
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject('Error al comprimir la imagen.');
        },
        'image/webp',
        quality
      );
    };
    img.onerror = (err) => reject(err);
  });
};

export default function ImageUploadField({
  bucket,
  value = [],
  onChange,
  label,
  altText,
}: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Validar tipo de imagen para todos los archivos
    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.startsWith('image/')) {
        setError('Todos los archivos deben ser imágenes.');
        return;
      }
    }

    setError(null);
    setUploading(true);

    try {
      const uploadedUrls: string[] = [];

      for (const file of Array.from(files)) {
        const compressedBlob = await compressImage(file, 1200, 0.82);
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.webp`;

        const { error: uploadError } = await supabase.storage
          .from(bucket)
          .upload(fileName, compressedBlob, {
            cacheControl: '31536000',
            contentType: 'image/webp',
            upsert: false,
          });

        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
        uploadedUrls.push(data.publicUrl);
      }

      // Concatenar imágenes previas con las nuevas
      onChange([...value, ...uploadedUrls]);
    } catch (err) {
      setError('No se pudo procesar o subir una o más imágenes.');
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    const filtered = value.filter((_, idx) => idx !== indexToRemove);
    onChange(filtered);
  };

  return (
    <div className={styles.field}>
      {label && <label>{label}</label>}

      {/* Rejilla con vistas previas de todas las imágenes */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
        {value.map((url, idx) => (
          <div
            key={url + idx}
            style={{
              position: 'relative',
              width: '70px',
              height: '70px',
              borderRadius: '6px',
              overflow: 'hidden',
              border: idx === 0 ? '2px solid #16a34a' : '1px solid #e2e8f0', // La primera se marca como principal
            }}
          >
            <img
              src={url}
              alt={altText ? `${altText} ${idx + 1}` : 'Vista previa'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(idx)}
              style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                background: 'rgba(239, 68, 68, 0.85)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '11px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Eliminar imagen"
            >
              ✕
            </button>
            {idx === 0 && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: '#16a34a',
                  color: 'white',
                  fontSize: '8px',
                  textAlign: 'center',
                  padding: '1px 0',
                }}
              >
                Principal
              </span>
            )}
          </div>
        ))}
      </div>

      <div className={styles.uploadBox} onClick={() => inputRef.current?.click()}>
        <span className={styles.uploadHint}>
          {uploading ? 'Comprimiendo y subiendo...' : '+ Agregar más imágenes'}
        </span>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple // <--- Permite seleccionar múltiples archivos
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}