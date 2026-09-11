'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { ShoppingBag, DollarSign, TrendingUp, AlertCircle, ArrowUpRight } from 'lucide-react';
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

interface LowStockItem {
  title: string;
  weight: string;
  flavor_name: string;
  stock: number;
}

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

const DONUT_COLORS = ['#16a34a', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'];

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [activeProductsCount, setActiveProductsCount] = useState(0);
  const [totalProductsCount, setTotalProductsCount] = useState(0);
  const [outOfStockCount, setOutOfStockCount] = useState(0);
  const [monthRevenue, setMonthRevenue] = useState(0);
  const [monthOrdersCount, setMonthOrdersCount] = useState(0);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [dailySales, setDailySales] = useState<DayStat[]>([]);
  const [lowStockItems, setLowStockItems] = useState<LowStockItem[]>([]);

  useEffect(() => {
    async function loadDashboard() {
      setLoading(true);

      const [{ count: activeCount }, { count: totalCount }, { count: noStockCount }] = await Promise.all([
        supabase.from('products').select('*', { count: 'exact', head: true }).eq('active', true),
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('variant_flavor_stock').select('*', { count: 'exact', head: true }).lte('stock', 0),
      ]);

      setActiveProductsCount(activeCount ?? 0);
      setTotalProductsCount(totalCount ?? 0);
      setOutOfStockCount(noStockCount ?? 0);

      const { data: items } = await supabase
        .from('order_items')
        .select('quantity, unit_price, product_title, orders(created_at)');

      const rows = (items ?? []) as unknown as OrderItemRow[];
      const now = new Date();
      const currentMonthKey = `${now.getFullYear()}-${now.getMonth()}`;

      const productTotals: Record<string, TopProduct> = {};
      const dayTotals: Record<string, { label: string; total: number; timestamp: number }> = {};
      let curMonthRevenue = 0;

      rows.forEach((row) => {
        const orderInfo = Array.isArray(row.orders) ? row.orders[0] : row.orders;
        if (!orderInfo?.created_at) return;

        const date = new Date(orderInfo.created_at);
        const lineTotal = row.quantity * row.unit_price;

        if (!productTotals[row.product_title]) {
          productTotals[row.product_title] = { title: row.product_title, quantity: 0, revenue: 0 };
        }
        productTotals[row.product_title].quantity += row.quantity;
        productTotals[row.product_title].revenue += lineTotal;

        const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
        if (monthKey === currentMonthKey) {
          const dayKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
          const dayLabel = date.toLocaleDateString('es-CL', { day: '2-digit', month: 'short' });
          const dayStart = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

          if (!dayTotals[dayKey]) {
            dayTotals[dayKey] = { label: dayLabel, total: 0, timestamp: dayStart };
          }
          dayTotals[dayKey].total += lineTotal;
          curMonthRevenue += lineTotal;
        }
      });

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

      const formattedDays = Object.values(dayTotals)
        .sort((a, b) => a.timestamp - b.timestamp)
        .map(({ label, total }) => ({ label, total }));

      setDailySales(formattedDays);

      const { data: stockRows } = await supabase
        .from('variant_flavor_stock')
        .select(`
          stock,
          product_flavors ( flavor_name ),
          product_variants ( weight, products ( title, active ) )
        `)
        .lte('stock', 5)
        .order('stock', { ascending: true });

      const lowStock = (stockRows || [])
        .filter((row: any) => row.product_variants?.products?.active)
        .map((row: any) => ({
          title: row.product_variants?.products?.title || 'Producto',
          weight: row.product_variants?.weight || '',
          flavor_name: row.product_flavors?.flavor_name || '',
          stock: row.stock,
        }));
      setLowStockItems(lowStock);

      setLoading(false);
    }

    loadDashboard();
  }, []);

  if (loading) return <p className={styles.emptyState}>Cargando estadísticas...</p>;

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sectionHeader}>
        <h2>Dashboard</h2>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.kpiCard}>
          <div className={styles.kpiHeader}>
            <span className={styles.kpiTitle}>Productos Activos</span>
            <div className={styles.kpiIconBox}><ShoppingBag size={18} /></div>
          </div>
          <div className={styles.kpiValue}>{activeProductsCount}</div>
          <div className={styles.kpiBadgeSuccess}>
            <ArrowUpRight size={14} /> de {totalProductsCount} totales
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiHeader}>
            <span className={styles.kpiTitle}>Ingresos del Mes</span>
            <div className={styles.kpiIconBox}><DollarSign size={18} /></div>
          </div>
          <div className={styles.kpiValue}>{formatCLP(monthRevenue)}</div>
          <div className={styles.kpiBadgeSuccess}>
            <TrendingUp size={14} /> Ventas activas
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiHeader}>
            <span className={styles.kpiTitle}>Pedidos del Mes</span>
            <div className={styles.kpiIconBox}><TrendingUp size={18} /></div>
          </div>
          <div className={styles.kpiValue}>{monthOrdersCount}</div>
          <div className={styles.kpiBadgeSuccess}>
            <ArrowUpRight size={14} /> Pedidos registrados
          </div>
        </div>

        <div className={styles.kpiCard}>
          <div className={styles.kpiHeader}>
            <span className={styles.kpiTitle}>Sin Stock / Alertas</span>
            <div className={styles.kpiIconBox}><AlertCircle size={18} /></div>
          </div>
          <div className={styles.kpiValue}>{outOfStockCount}</div>
          <span className={styles.kpiSubtext}>Variantes con stock 0</span>
        </div>
      </div>

      {lowStockItems.length > 0 && (
        <div className={styles.dashboardPanel} style={{ borderLeft: '3px solid #dc2626' }}>
          <h3 style={{ color: '#dc2626' }}>⚠️ Stock bajo o agotado ({lowStockItems.length})</h3>
          {lowStockItems.map((item, i) => (
            <div key={i} className={styles.rankRow}>
              <div className={styles.rankLeft}>
                <span
                  className={styles.rankNumber}
                  style={{ background: item.stock === 0 ? '#fee2e2' : '#fef9c3', color: item.stock === 0 ? '#dc2626' : '#854d0e' }}
                >
                  {item.stock}
                </span>
                <span>
                  {item.title} ({item.weight} - {item.flavor_name})
                </span>
              </div>
              <span className={styles.rankValue} style={{ color: item.stock === 0 ? '#dc2626' : '#854d0e' }}>
                {item.stock === 0 ? 'Agotado' : 'Stock bajo'}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.chartsGrid}>
        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>Ingresos Diarios del Mes</h3>
          </div>
          {dailySales.length === 0 ? (
            <p className={styles.emptyState}>Aún no hay ventas en este mes.</p>
          ) : (
            <div style={{ width: '100%', height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailySales} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="label" stroke="#a8a29e" fontSize={12} tickLine={false} />
                  <YAxis stroke="#a8a29e" fontSize={12} tickLine={false} />
                  <Tooltip 
                    formatter={(val: any) => [formatCLP(Number(val)), 'Ingreso']}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  />
                  <Area type="monotone" dataKey="total" stroke="#16a34a" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartHeader}>
            <h3>Distribución de Productos Más Vendidos</h3>
          </div>
          {topProducts.length === 0 ? (
            <p className={styles.emptyState}>Sin datos de productos.</p>
          ) : (
            <div className={styles.donutLayout}>
              <div style={{ width: '55%', height: 240 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topProducts}
                      dataKey="quantity"
                      nameKey="title"
                      innerRadius={60}
                      outerRadius={85}
                      paddingAngle={5}
                    >
                      {topProducts.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={DONUT_COLORS[index % DONUT_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(val: any) => [`${val} unidades`, 'Vendidos']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className={styles.legendContainer}>
                {topProducts.map((prod, idx) => (
                  <div key={prod.title} className={styles.legendItem}>
                    <span 
                      className={styles.legendDot} 
                      style={{ backgroundColor: DONUT_COLORS[idx % DONUT_COLORS.length] }} 
                    />
                    <div className={styles.legendText}>
                      <span className={styles.legendTitle}>{prod.title}</span>
                      <span className={styles.legendValue}>{prod.quantity} un. ({formatCLP(prod.revenue)})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}