'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

interface OrderItemRow {
  id: number;
  product_title: string;
  quantity: number;
  unit_price: number;
  weight_label: string | null;
  flavor_name: string | null;
}

interface OrderRow {
  id: number;
  customer_name: string;
  rut: string | null;
  delivery_type: string;
  delivery_address: string | null;
  notes: string | null;
  total: number;
  status: string;
  created_at: string;
  order_items: OrderItemRow[];
}

type StatusFilter = 'pendiente' | 'confirmado' | 'rechazado';

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

const STATUS_LABELS: Record<string, string> = {
  pendiente: 'Pendiente',
  confirmado: 'Confirmado',
  rechazado: 'Rechazado',
};

export default function OrdersManager() {
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('pendiente');
  const [processingId, setProcessingId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  const fetchOrders = async (status: StatusFilter) => {
    setLoading(true);
    setActionError(null);

    const { data, error } = await supabase
      .from('orders')
      .select(`
        id,
        customer_name,
        rut,
        delivery_type,
        delivery_address,
        notes,
        total,
        status,
        created_at,
        order_items ( id, product_title, quantity, unit_price, weight_label, flavor_name )
      `)
      .eq('status', status)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setOrders(data as unknown as OrderRow[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders(statusFilter);
  }, [statusFilter]);

  const handleConfirm = async (id: number) => {
    setProcessingId(id);
    setActionError(null);
    const { error } = await supabase.rpc('confirm_order', { p_order_id: id });
    setProcessingId(null);

    if (error) {
      setActionError(`No se pudo confirmar el pedido #${id}: ${error.message}`);
      return;
    }
    fetchOrders(statusFilter);
  };

  const handleReject = async (id: number) => {
    if (!confirm(`¿Rechazar el pedido #${id}? El stock reservado se devolverá automáticamente.`)) return;

    setProcessingId(id);
    setActionError(null);
    const { error } = await supabase.rpc('reject_order', { p_order_id: id });
    setProcessingId(null);

    if (error) {
      setActionError(`No se pudo rechazar el pedido #${id}: ${error.message}`);
      return;
    }
    fetchOrders(statusFilter);
  };

  const toggleExpanded = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className={styles.sectionHeader}>
        <h2>Pedidos</h2>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
        {(['pendiente', 'confirmado', 'rechazado'] as StatusFilter[]).map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={styles.categoryBtn}
            style={{
              background: statusFilter === s ? '#1c1917' : '#fff',
              color: statusFilter === s ? '#fff' : '#57534e',
              border: '1px solid #e2e8f0',
              borderRadius: '9999px',
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            {STATUS_LABELS[s]}
          </button>
        ))}
      </div>

      {actionError && <p className={styles.errorText}>{actionError}</p>}

      {loading ? (
        <p className={styles.emptyState}>Cargando...</p>
      ) : orders.length === 0 ? (
        <p className={styles.emptyState}>No hay pedidos {STATUS_LABELS[statusFilter].toLowerCase()}s.</p>
      ) : (
        <div className={styles.dataTable}>
          {orders.map((order) => {
            const isExpanded = expandedId === order.id;
            return (
              <div key={order.id}>
                <div
                  className={styles.dataRow}
                  style={{ gridTemplateColumns: '90px 1fr auto auto', cursor: 'pointer' }}
                  onClick={() => toggleExpanded(order.id)}
                >
                  <div style={{ fontWeight: 800, color: '#1c1917' }}>#{order.id}</div>
                  <div>
                    <div className={styles.rowTitle}>{order.customer_name}</div>
                    <div className={styles.rowMeta}>
                      {order.delivery_type === 'delivery' ? 'Despacho' : 'Retiro en tienda'} ·{' '}
                      {new Date(order.created_at).toLocaleString('es-CL', {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap' }}>
                    {formatCLP(order.total)}
                  </div>
                  {statusFilter === 'pendiente' ? (
                    <div className={styles.rowActions} onClick={(e) => e.stopPropagation()}>
                      <button
                        className={styles.primaryBtn}
                        style={{ width: 'auto', padding: '0.5rem 1rem', fontSize: '0.8rem' }}
                        disabled={processingId === order.id}
                        onClick={() => handleConfirm(order.id)}
                      >
                        Confirmar
                      </button>
                      <button
                        className={`${styles.iconActionBtn} ${styles.deleteActionBtn}`}
                        disabled={processingId === order.id}
                        onClick={() => handleReject(order.id)}
                        title="Rechazar"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <span
                      className={`${styles.badgePill} ${
                        order.status === 'confirmado' ? styles.badgeActive : styles.badgeInactive
                      }`}
                    >
                      {STATUS_LABELS[order.status]}
                    </span>
                  )}
                </div>

                {isExpanded && (
                  <div style={{ background: '#fafaf9', padding: '1rem 1.25rem', borderBottom: '1px solid #f1f5f9' }}>
                    {order.rut && (
                      <p style={{ fontSize: '0.82rem', color: '#57534e', marginBottom: '0.5rem' }}>
                        <strong>RUT:</strong> {order.rut}
                      </p>
                    )}
                    {order.delivery_type === 'delivery' && order.delivery_address && (
                      <p style={{ fontSize: '0.82rem', color: '#57534e', marginBottom: '0.5rem' }}>
                        <strong>Dirección:</strong> {order.delivery_address}
                      </p>
                    )}
                    {order.notes && (
                      <p style={{ fontSize: '0.82rem', color: '#57534e', marginBottom: '0.75rem' }}>
                        <strong>Notas:</strong> {order.notes}
                      </p>
                    )}

                    <div style={{ borderTop: '1px dashed #e7e5e4', paddingTop: '0.75rem' }}>
                      {order.order_items.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '0.85rem',
                            padding: '0.3rem 0',
                          }}
                        >
                          <span>
                            {item.quantity}× {item.product_title}
                            {(item.weight_label || item.flavor_name) && (
                              <span style={{ color: '#a8a29e' }}>
                                {' '}
                                ({[item.weight_label, item.flavor_name].filter(Boolean).join(' - ')})
                              </span>
                            )}
                          </span>
                          <span style={{ fontWeight: 600 }}>{formatCLP(item.unit_price * item.quantity)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}