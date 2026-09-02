'use client';

import React, { useRef, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

interface ImageUploadFieldProps {
  bucket: 'product-images' | 'carousel-images';
  value: string | null;
  onChange: (url: string) => void;
  label?: string;
  altText?: string;
}

// Función auxiliar para comprimir la imagen a WebP antes de subirla
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
  value,
  onChange,
  label,
  altText,
}: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('El archivo debe ser una imagen.');
      return;
    }

    setError(null);
    setUploading(true);

    try {
      // 1. Compresión en el navegador
      const compressedBlob = await compressImage(file, 1200, 0.82);
      const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.webp`;

      // 2. Subida a Supabase Storage con caché prolongado
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(fileName, compressedBlob, {
          cacheControl: '31536000',
          contentType: 'image/webp',
          upsert: false,
        });

      if (uploadError) throw uploadError;

      // 3. Obtención de URL pública
      const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
      onChange(data.publicUrl);
    } catch (err) {
      setError('No se pudo procesar o subir la imagen. Intenta de nuevo.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.field}>
      {label && <label>{label}</label>}
      <div className={styles.uploadBox} onClick={() => inputRef.current?.click()}>
        {value ? (
          <img
            src={value}
            alt={altText ? `Vista previa de ${altText}` : 'Vista previa de la imagen'}
            className={styles.uploadPreview}
          />
        ) : (
          <span className={styles.uploadHint}>
            {uploading ? 'Comprimiendo y subiendo...' : 'Haz clic para subir una imagen'}
          </span>
        )}
        {value && !uploading && (
          <span className={styles.uploadHint}>Haz clic para cambiar la imagen</span>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}