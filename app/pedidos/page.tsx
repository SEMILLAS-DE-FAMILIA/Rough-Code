'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore, CartItem } from '../../src/lib/useCartStore';
import { supabase } from '../../src/lib/supabaseClient';
import { isValidRut, autoFormatRut } from '../../src/lib/rut';
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
  paymentMethod: 'transferencia' | 'efectivo',
  address: string,
  notes: string
): string {
  const lines: string[] = [];

  // Emojis codificados en Unicode seguro para evitar caracteres extraños ()
  const leaf = '\u{1F33F}';
  const herb = '\u{1F33B}';
  const user = '\u{1F464}';
  const truck = '\u{1F69A}';
  const store = '\u{1F3EA}';
  const bank = '\u{1F3E6}';
  const cash = '\u{1F4B5}';
  const box = '\u{1F4E6}';
  const money = '\u{1F4B0}';
  const memo = '\u{1F4DD}';

  lines.push(`${leaf} *¡Hola! Gracias por tu compra en Semillas de Familia.* ${herb}`);
  lines.push('Hemos registrado tu pedido con el siguiente detalle:');
  lines.push('──────────────────────────────');
  lines.push('');
  lines.push(`${user} *DATOS DEL CLIENTE*`);
  lines.push(`• *Nombre:* ${name}`);
  lines.push(`• *RUT:* ${rut}`);
  lines.push(`• *Entrega:* ${deliveryType === 'delivery' ? `${truck} Despacho a domicilio` : `${store} Retiro en tienda`}`);
  lines.push(`• *Forma de Pago:* ${paymentMethod === 'transferencia' ? `${bank} Transferencia bancaria` : `${cash} Efectivo`}`);

  if (deliveryType === 'delivery' && address) {
    lines.push(`• *Dirección:* ${address}`);
  }

  lines.push('');
  lines.push(`${box} *DETALLE DE PRODUCTOS*`);
  items.forEach((item) => {
    const details = [item.selected_weight, item.selected_flavor].filter(Boolean).join(' - ');
    const metaText = details ? ` (${details})` : '';

    lines.push(`• *${item.quantity}x* ${item.product_title}${metaText} ── *${formatCLP(item.unit_price * item.quantity)}*`);
  });

  lines.push('');
  lines.push('──────────────────────────────');
  lines.push(`${money} *TOTAL A PAGAR: ${formatCLP(total)}*`);
  lines.push('──────────────────────────────');

  if (notes.trim()) {
    lines.push('');
    lines.push(`${memo} *Notas:* _${notes.trim()}_`);
  }

  lines.push('');
  lines.push('Por favor, confirma este mensaje para comenzar a preparar tu pedido. ¡Muchas gracias!');

  return lines.join('\n');
}

export default function PedidosPage() {
  const isHydrated = useIsHydrated();

  const storeCart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const cart = isHydrated ? storeCart : [];
  const total = cart.reduce((acc, item) => acc + item.unit_price * item.quantity, 0);

  const [name, setName] = useState('');
  const [rut, setRut] = useState('');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'retiro'>('retiro');
  const [paymentMethod, setPaymentMethod] = useState<'transferencia' | 'efectivo'>('transferencia');
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
      setError('Ingresa un RUT válido.');
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

    const itemsPayload = cart.map((item) => ({
      product_id: item.product_id,
      product_title: item.product_title,
      quantity: item.quantity,
      unit_price: item.unit_price,
      variant_id: item.variant_id,
      flavor_id: item.flavor_id,
      weight_label: item.selected_weight,
      flavor_name: item.selected_flavor,
    }));

    const { data: newOrderId, error: orderError } = await supabase.rpc('create_order', {
      p_customer_name: name.trim(),
      p_rut: rut,
      p_delivery_type: deliveryType,
      p_delivery_address: deliveryType === 'delivery' ? address.trim() : null,
      p_notes: `[Pago: ${paymentMethod}] ${notes.trim()}`.trim(),
      p_total: total,
      p_items: itemsPayload,
    });

    setSubmitting(false);

    if (orderError || !newOrderId) {
      setError(
        orderError?.message?.includes('Sin stock suficiente')
          ? 'Uno de los productos ya no tiene stock suficiente. Vuelve al catálogo y ajusta tu carrito.'
          : `No se pudo registrar el pedido: ${orderError?.message || 'error desconocido'}`
      );
      return;
    }

    const message = buildWhatsAppMessage(cart, total, name.trim(), rut, deliveryType, paymentMethod, address, notes);
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
          <div className={styles.summaryCard}>
            <h3>Tu pedido</h3>
            {cart.map((item) => (
              <div key={item.id} className={styles.summaryRow}>
                {item.img_url && <img src={item.img_url} alt={item.product_title} className={styles.summaryThumb} />}
                <div style={{ flex: 1 }}>
                  <p className={styles.summaryTitle}>{item.product_title}</p>
                  <p className={styles.summaryMeta}>{item.quantity} × {formatCLP(item.unit_price)}</p>
                </div>
                <span className={styles.summaryLineTotal}>{formatCLP(item.unit_price * item.quantity)}</span>
              </div>
            ))}
            <div className={styles.summaryTotalRow}>
              <span>Total</span>
              <span className={styles.summaryTotalValue}>{formatCLP(total)}</span>
            </div>
          </div>

          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label>Nombre completo</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className={styles.field}>
                <label>RUT</label>
                <input 
                  value={rut} 
                  onChange={(e) => setRut(autoFormatRut(e.target.value))} 
                  placeholder="12.345.678-9" 
                  maxLength={12}
                  required 
                />
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
                <label>Forma de Pago</label>
                <div className={styles.toggleRow}>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('transferencia')}
                    className={`${styles.toggleBtn} ${paymentMethod === 'transferencia' ? styles.toggleBtnActive : ''}`}
                  >
                    Transferencia
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('efectivo')}
                    className={`${styles.toggleBtn} ${paymentMethod === 'efectivo' ? styles.toggleBtnActive : ''}`}
                  >
                    Efectivo
                  </button>
                </div>
              </div>

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