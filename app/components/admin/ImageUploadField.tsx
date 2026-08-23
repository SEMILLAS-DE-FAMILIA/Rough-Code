'use client';

import React, { useRef, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

interface ImageUploadFieldProps {
  bucket: 'product-images' | 'carousel-images';
  value: string | null;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUploadField({ bucket, value, onChange, label }: ImageUploadFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validación básica: tipo y tamaño (máx 5MB)
    if (!file.type.startsWith('image/')) {
      setError('El archivo debe ser una imagen.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('La imagen no debe superar 5MB.');
      return;
    }

    setError(null);
    setUploading(true);

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

    const { error: uploadError } = await supabase.storage.from(bucket).upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });

    setUploading(false);

    if (uploadError) {
      setError('No se pudo subir la imagen. Intenta de nuevo.');
      return;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);
    onChange(data.publicUrl);
  };

  return (
    <div className={styles.field}>
      {label && <label>{label}</label>}
      <div className={styles.uploadBox} onClick={() => inputRef.current?.click()}>
        {value ? (
          <img src={value} alt="Vista previa" className={styles.uploadPreview} />
        ) : (
          <span className={styles.uploadHint}>
            {uploading ? 'Subiendo...' : 'Haz clic para subir una imagen'}
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