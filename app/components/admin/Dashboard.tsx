'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

interface OrderItemRow {
  quantity: number;
  unit_price: number;
  product_title: string;
  orders: { created_at: string } | { created_at: string }[] | null;
}

interface TopProduct {
  title: string;
  quantity: number;
  revenue: number;
}

interface DayStat {
  label: string;
  total: number;
}

interface MonthStat {
  label: string;
  total: number;
}

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

const MONTH_NAMES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [activeProductsCount, setActiveProductsCount] = useState(0);
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  const [monthRevenue, setMonthRevenue] = useState(0);
  const [monthOrdersCount, setMonthOrdersCount] = useState(0);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [bestDays, setBestDays] = useState<DayStat[]>([]);
  const [bestMonths, setBestMonths] = useState<MonthStat[]>([]);

  useEffect(() => {
    async function loadDashboard() {
      setLoading(true);

      const [{ count: activeCount }, { count: totalCount }] = await Promise.all([
        supabase.from('products').select('*', { count: 'exact', head: true }).eq('active', true),
        supabase.from('products').select('*', { count: 'exact', head: true }),
      ]);

      setActiveProductsCount(activeCount ?? 0);
      setTotalProductsCount(totalCount ?? 0);

      // Traemos los items de pedidos junto a la fecha del pedido asociado.
      // Para una tienda pequeña esto es suficiente sin necesitar funciones SQL aparte.
      const { data: items } = await supabase
        .from('order_items')
        .select('quantity, unit_price, product_title, orders(created_at)');

      const rows = (items ?? []) as unknown as OrderItemRow[];

      const now = new Date();
      const currentMonthKey = `${now.getFullYear()}-${now.getMonth()}`;

      const productTotals: Record<string, TopProduct> = {};
      const dayTotals: Record<string, number> = {};
      const monthTotals: Record<string, { label: string; total: number }> = {};

      let curMonthRevenue = 0;
      const curMonthOrderIds = new Set<string>();

      rows.forEach((row) => {
        const orderInfo = Array.isArray(row.orders) ? row.orders[0] : row.orders;
        if (!orderInfo?.created_at) return;

        const date = new Date(orderInfo.created_at);
        const lineTotal = row.quantity * row.unit_price;

        // Top productos (histórico completo)
        if (!productTotals[row.product_title]) {
          productTotals[row.product_title] = { title: row.product_title, quantity: 0, revenue: 0 };
        }
        productTotals[row.product_title].quantity += row.quantity;
        productTotals[row.product_title].revenue += lineTotal;

        // Ingreso por mes (histórico, para saber el mejor mes)
        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
        const monthLabel = `${MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
        if (!monthTotals[monthKey]) monthTotals[monthKey] = { label: monthLabel, total: 0 };
        monthTotals[monthKey].total += lineTotal;

        // Días con más ventas, solo del mes actual
        if (monthKey === currentMonthKey) {
          const dayKey = date.toLocaleDateString('es-CL', { day: '2-digit', month: 'short' });
          dayTotals[dayKey] = (dayTotals[dayKey] ?? 0) + lineTotal;
          curMonthRevenue += lineTotal;
        }
      });

      // Para contar pedidos del mes (no items), traemos orders directamente
      const { data: monthOrders } = await supabase
        .from('orders')
        .select('id, created_at')
        .gte('created_at', new Date(now.getFullYear(), now.getMonth(), 1).toISOString());

      setMonthOrdersCount(monthOrders?.length ?? 0);
      setMonthRevenue(curMonthRevenue);

      const sortedProducts = Object.values(productTotals)
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 5);
      setTopProducts(sortedProducts);

      const sortedDays = Object.entries(dayTotals)
        .map(([label, total]) => ({ label, total }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 5);
      setBestDays(sortedDays);

      const sortedMonths = Object.values(monthTotals)
        .sort((a, b) => b.total - a.total)
        .slice(0, 5);
      setBestMonths(sortedMonths);

      setLoading(false);
    }

    loadDashboard();
  }, []);

  if (loading) return <p className={styles.emptyState}>Cargando estadísticas...</p>;

  return (
    <div>
      <div className={styles.sectionHeader}>
        <h2>Dashboard</h2>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Productos activos</div>
          <div className={styles.statValue}>{activeProductsCount}</div>
          <div className={styles.statSub}>de {totalProductsCount} en total</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Ingresos este mes</div>
          <div className={styles.statValue}>{formatCLP(monthRevenue)}</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statLabel}>Pedidos este mes</div>
          <div className={styles.statValue}>{monthOrdersCount}</div>
        </div>
      </div>

      <div className={styles.dashboardPanel}>
        <h3>Productos más vendidos (histórico)</h3>
        {topProducts.length === 0 ? (
          <p className={styles.emptyState}>Aún no hay pedidos registrados.</p>
        ) : (
          topProducts.map((p, i) => (
            <div key={p.title} className={styles.rankRow}>
              <div className={styles.rankLeft}>
                <span className={styles.rankNumber}>{i + 1}</span>
                <span>{p.title}</span>
              </div>
              <span className={styles.rankValue}>{p.quantity} unid. · {formatCLP(p.revenue)}</span>
            </div>
          ))
        )}
      </div>

      <div className={styles.dashboardPanel}>
        <h3>Días con más ventas este mes</h3>
        {bestDays.length === 0 ? (
          <p className={styles.emptyState}>Sin ventas este mes todavía.</p>
        ) : (
          bestDays.map((d, i) => (
            <div key={d.label} className={styles.rankRow}>
              <div className={styles.rankLeft}>
                <span className={styles.rankNumber}>{i + 1}</span>
                <span>{d.label}</span>
              </div>
              <span className={styles.rankValue}>{formatCLP(d.total)}</span>
            </div>
          ))
        )}
      </div>

      <div className={styles.dashboardPanel}>
        <h3>Mejores meses (por ingreso)</h3>
        {bestMonths.length === 0 ? (
          <p className={styles.emptyState}>Aún no hay historial suficiente.</p>
        ) : (
          bestMonths.map((m, i) => (
            <div key={m.label} className={styles.rankRow}>
              <div className={styles.rankLeft}>
                <span className={styles.rankNumber}>{i + 1}</span>
                <span>{m.label}</span>
              </div>
              <span className={styles.rankValue}>{formatCLP(m.total)}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}