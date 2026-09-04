'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartStore, CartItem } from '../../src/lib/useCartStore';
import { supabase } from '../../src/lib/supabaseClient';
import { isValidRut, formatRut } from '../../src/lib/rut';
import styles from './pedidos.module.css';

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

function useIsHydrated() {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => setIsHydrated(true), []);
  return isHydrated;
}

function buildWhatsAppMessage(
  items: CartItem[],
  total: number,
  name: string,
  rut: string,
  deliveryType: 'delivery' | 'retiro',
  address: string,
  notes: string
): string {
  const lines: string[] = [];
  lines.push('🛒 *Nuevo Pedido - Semillas de Familia*');
  lines.push('');
  lines.push(`*Cliente:* ${name}`);
  lines.push(`*RUT:* ${rut}`);
  lines.push(`*Entrega:* ${deliveryType === 'delivery' ? 'Despacho a domicilio' : 'Retiro en tienda'}`);
  if (deliveryType === 'delivery' && address) {
    lines.push(`*Dirección:* ${address}`);
  }
  lines.push('');
  lines.push('*Productos:*');
  items.forEach((item) => {
    lines.push(`- ${item.quantity}x ${item.title} — ${formatCLP(item.final_price * item.quantity)}`);
  });
  lines.push('');
  lines.push(`*Total: ${formatCLP(total)}*`);
  if (notes.trim()) {
    lines.push('');
    lines.push(`*Notas:* ${notes.trim()}`);
  }
  return lines.join('\n');
}

export default function PedidosPage() {
  const isHydrated = useIsHydrated();

  // Suscripción al store de Zustand
  const storeCart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const cart = isHydrated ? storeCart : [];
  const total = cart.reduce((acc, item) => acc + item.final_price * item.quantity, 0);

  const [name, setName] = useState('');
  const [rut, setRut] = useState('');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'retiro'>('retiro');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderSent, setOrderSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError('Ingresa tu nombre.');
      return;
    }
    if (!isValidRut(rut)) {
      setError('El RUT ingresado no es válido.');
      return;
    }
    if (deliveryType === 'delivery' && !address.trim()) {
      setError('Ingresa la dirección de despacho.');
      return;
    }

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (!whatsappNumber) {
      setError('El número de WhatsApp de la tienda no está configurado todavía. Contacta al administrador.');
      return;
    }

    setSubmitting(true);
    const formattedRut = formatRut(rut);

    const itemsPayload = cart.map((item) => ({
      product_id: item.id,
      product_title: item.title,
      quantity: item.quantity,
      unit_price: item.final_price,
    }));

    const { error: orderError } = await supabase.rpc('create_order', {
      p_customer_name: name.trim(),
      p_rut: formattedRut,
      p_delivery_type: deliveryType,
      p_delivery_address: deliveryType === 'delivery' ? address.trim() : null,
      p_notes: notes.trim() || null,
      p_total: total,
      p_items: itemsPayload,
    });

    setSubmitting(false);

    if (orderError) {
      setError(`No se pudo registrar el pedido: ${orderError.message} (código: ${orderError.code ?? 's/n'})`);
      return;
    }

    const message = buildWhatsAppMessage(cart, total, name.trim(), formattedRut, deliveryType, address, notes);
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');

    clearCart();
    setOrderSent(true);
  };

  if (!isHydrated) {
    return <div className={styles.stateWrapper}>Cargando...</div>;
  }

  if (orderSent) {
    return (
      <div className={styles.stateWrapper}>
        <div className={styles.confirmCard}>
          <span style={{ fontSize: '2.5rem' }}>✅</span>
          <h2>¡Pedido enviado!</h2>
          <p>Se abrió WhatsApp con tu pedido. Confírmalo ahí para que la tienda lo reciba.</p>
          <Link href="/" className={styles.primaryBtn}>
            Volver a la tienda
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={styles.stateWrapper}>
        <div className={styles.confirmCard}>
          <span style={{ fontSize: '2.5rem' }}>🌱</span>
          <h2>Tu carrito está vacío</h2>
          <p>Agrega productos desde el catálogo antes de continuar.</p>
          <Link href="/" className={styles.primaryBtn}>
            Ir al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContainer}>
        <Link href="/" className={styles.backLink}>
          ← Volver al catálogo
        </Link>
        <h1 className={styles.pageTitle}>Finalizar Pedido</h1>

        <div className={styles.layoutGrid}>
          {/* Resumen del carrito */}
          <div className={styles.summaryCard}>
            <h3>Tu pedido</h3>
            {cart.map((item) => (
              <div key={item.id} className={styles.summaryRow}>
                {item.img_url && <img src={item.img_url} alt={item.title} className={styles.summaryThumb} />}
                <div style={{ flex: 1 }}>
                  <p className={styles.summaryTitle}>{item.title}</p>
                  <p className={styles.summaryMeta}>{item.quantity} × {formatCLP(item.final_price)}</p>
                </div>
                <span className={styles.summaryLineTotal}>{formatCLP(item.final_price * item.quantity)}</span>
              </div>
            ))}
            <div className={styles.summaryTotalRow}>
              <span>Total</span>
              <span className={styles.summaryTotalValue}>{formatCLP(total)}</span>
            </div>
          </div>

          {/* Formulario */}
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label>Nombre completo</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className={styles.field}>
                <label>RUT</label>
                <input value={rut} onChange={(e) => setRut(e.target.value)} placeholder="12345678-9" required />
              </div>

              <div className={styles.field}>
                <label>Entrega</label>
                <div className={styles.toggleRow}>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('retiro')}
                    className={`${styles.toggleBtn} ${deliveryType === 'retiro' ? styles.toggleBtnActive : ''}`}
                  >
                    Retiro en tienda
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('delivery')}
                    className={`${styles.toggleBtn} ${deliveryType === 'delivery' ? styles.toggleBtnActive : ''}`}
                  >
                    Despacho
                  </button>
                </div>
              </div>

              {deliveryType === 'delivery' && (
                <div className={styles.field}>
                  <label>Dirección de despacho</label>
                  <input value={address} onChange={(e) => setAddress(e.target.value)} required />
                </div>
              )}

              <div className={styles.field}>
                <label>Notas del pedido (opcional)</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ej: entregar después de las 18:00"
                />
              </div>

              {error && <p className={styles.errorText}>{error}</p>}

              <button type="submit" className={styles.primaryBtn} disabled={submitting} style={{ width: '100%' }}>
                {submitting ? (
                  <span className={styles.btnLoadingContent}>
                    <span className={styles.spinner} />
                    Enviando...
                  </span>
                ) : (
                  'Enviar Pedido por WhatsApp'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}