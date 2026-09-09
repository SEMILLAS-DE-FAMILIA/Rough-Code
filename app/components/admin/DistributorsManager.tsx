'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

interface Application {
  id: number;
  rut: string;
  company_name: string;
  phone: string;
  email: string;
  created_at: string;
}

interface Distributor {
  id: number;
  rut: string;
  company_name: string;
  phone: string;
  email: string;
  active: boolean;
  created_at: string;
}

export default function DistributorsManager() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [distributors, setDistributors] = useState<Distributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<number | null>(null);
  const [resetTargetId, setResetTargetId] = useState<number | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [resetError, setResetError] = useState<string | null>(null);
  const [resetSaving, setResetSaving] = useState(false);

  const fetchAll = async () => {
    setLoading(true);
    const [{ data: apps }, { data: dists }] = await Promise.all([
      supabase.from('distributor_applications').select('*').order('created_at', { ascending: false }),
      supabase.from('distributors').select('*').order('created_at', { ascending: false }),
    ]);
    setApplications(apps || []);
    setDistributors(dists || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleApprove = async (id: number) => {
    setProcessingId(id);
    const { error } = await supabase.rpc('approve_distributor_application', { p_application_id: id });
    setProcessingId(null);
    if (error) {
      alert(`No se pudo aprobar: ${error.message}`);
      return;
    }
    fetchAll();
  };

  const handleReject = async (id: number) => {
    if (!confirm('¿Rechazar y eliminar esta solicitud? No se puede deshacer.')) return;
    setProcessingId(id);
    const { error } = await supabase.rpc('reject_distributor_application', { p_application_id: id });
    setProcessingId(null);
    if (error) {
      alert(`No se pudo rechazar: ${error.message}`);
      return;
    }
    fetchAll();
  };

  const toggleDistributorActive = async (d: Distributor) => {
    await supabase.from('distributors').update({ active: !d.active }).eq('id', d.id);
    fetchAll();
  };

  const openResetModal = (id: number) => {
    setResetTargetId(id);
    setNewPassword('');
    setResetError(null);
  };

  const handleResetPassword = async () => {
    if (!resetTargetId) return;
    if (newPassword.trim().length < 6) {
      setResetError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    setResetSaving(true);
    const { error } = await supabase.rpc('admin_reset_distributor_password', {
      p_distributor_id: resetTargetId,
      p_new_password: newPassword.trim(),
    });
    setResetSaving(false);
    if (error) {
      setResetError(`No se pudo restablecer: ${error.message}`);
      return;
    }
    setResetTargetId(null);
  };

  if (loading) return <p className={styles.emptyState}>Cargando...</p>;

  return (
    <div>
      <div className={styles.sectionHeader}>
        <h2>Distribuidores</h2>
      </div>

      {/* Solicitudes pendientes */}
      <div className={styles.dashboardPanel}>
        <h3>Solicitudes pendientes ({applications.length})</h3>
        {applications.length === 0 ? (
          <p className={styles.emptyState}>No hay solicitudes pendientes.</p>
        ) : (
          <div className={styles.dataTable} style={{ marginTop: '0.5rem' }}>
            {applications.map((app) => (
              <div key={app.id} className={styles.dataRow} style={{ gridTemplateColumns: '1fr auto', alignItems: 'start' }}>
                <div>
                  <div className={styles.rowTitle}>{app.company_name}</div>
                  <div className={styles.rowMeta}>
                    RUT: {app.rut} · Tel: {app.phone} · {app.email}
                  </div>
                  <div className={styles.rowMeta}>
                    Solicitado: {new Date(app.created_at).toLocaleDateString('es-CL')}
                  </div>
                </div>
                <div className={styles.rowActions}>
                  <button
                    className={styles.primaryBtn}
                    style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                    disabled={processingId === app.id}
                    onClick={() => handleApprove(app.id)}
                  >
                    Aceptar
                  </button>
                  <button
                    className={`${styles.iconActionBtn} ${styles.deleteActionBtn}`}
                    disabled={processingId === app.id}
                    onClick={() => handleReject(app.id)}
                    title="Rechazar"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Distribuidores activos */}
      <div className={styles.dashboardPanel}>
        <h3>Distribuidores aprobados ({distributors.length})</h3>
        {distributors.length === 0 ? (
          <p className={styles.emptyState}>Aún no hay distribuidores aprobados.</p>
        ) : (
          <div className={styles.dataTable} style={{ marginTop: '0.5rem' }}>
            {distributors.map((d) => (
              <div key={d.id} className={styles.dataRow} style={{ gridTemplateColumns: '1fr auto auto', alignItems: 'center' }}>
                <div>
                  <div className={styles.rowTitle}>{d.company_name}</div>
                  <div className={styles.rowMeta}>
                    RUT: {d.rut} · Tel: {d.phone} · {d.email}
                  </div>
                </div>
                <button
                  className={`${styles.badgePill} ${d.active ? styles.badgeActive : styles.badgeInactive}`}
                  onClick={() => toggleDistributorActive(d)}
                  style={{ border: 'none', cursor: 'pointer' }}
                >
                  {d.active ? 'Activo' : 'Bloqueado'}
                </button>
                <button className={styles.iconActionBtn} onClick={() => openResetModal(d.id)} title="Restablecer contraseña">
                  🔑
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {resetTargetId && (
        <div className={styles.modalOverlay} onClick={() => setResetTargetId(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '380px' }}>
            <h3>Restablecer contraseña</h3>
            <div className={styles.field}>
              <label>Nueva contraseña</label>
              <input
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
              />
            </div>
            {resetError && <p className={styles.errorText}>{resetError}</p>}
            <div className={styles.modalActions}>
              <button type="button" className={styles.secondaryBtn} onClick={() => setResetTargetId(null)}>Cancelar</button>
              <button type="button" className={styles.primaryBtn} disabled={resetSaving} onClick={handleResetPassword}>
                {resetSaving ? 'Guardando...' : 'Guardar nueva contraseña'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}