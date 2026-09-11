'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { supabase } from '../../src/lib/supabaseClient';
import { useDistributorStore } from '../../src/lib/useDistributorStore';
import styles from './ProductGrid.module.css';

export interface ProductFlavor {
  id: number;
  flavor_name: string;
}

interface VariantStock {
  flavor_id: number;
  stock: number;
}

export interface ProductVariant {
  id: number;
  weight: string;
  price: number;
  discount_percent: number;
  stocks: VariantStock[];
}

export interface Product {
  id: number;
  title: string;
  category_id: number | null;
  category_name?: string;
  description: string | null;
  img_url: string | null;
  images?: string[] | null;
  badge?: string | null;
  is_new?: boolean;
  is_distributor: boolean;
  variants: ProductVariant[];
  flavors: ProductFlavor[];
}

const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);

function stockFor(variant: ProductVariant | undefined, flavorId: number | undefined) {
  if (!variant || flavorId == null) return 0;
  return variant.stocks.find((s) => s.flavor_id === flavorId)?.stock ?? 0;
}

function ProductCard({
  product,
  onOpenModal,
  viewingDistributorTab,
  isDistributorLoggedIn,
  distributorPrices,
  onOpenDistributorModal,
}: {
  product: Product;
  onOpenModal: (p: Product) => void;
  viewingDistributorTab: boolean;
  isDistributorLoggedIn: boolean;
  distributorPrices: Record<number, number>;
  onOpenDistributorModal: () => void;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = product.images && product.images.length > 0 ? product.images : product.img_url ? [product.img_url] : [];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const totalStock = product.variants.reduce((sum, v) => sum + v.stocks.reduce((s, e) => s + e.stock, 0), 0);
  const isOutOfStock = totalStock <= 0;
  const firstVariant = product.variants[0];
  const hasDiscount = firstVariant && firstVariant.discount_percent > 0;

  const isLocked = viewingDistributorTab && !isDistributorLoggedIn;

  const variantsWithDistPrice = product.variants
    .map((v) => ({ v, dp: distributorPrices[v.id] }))
    .filter((x): x is { v: ProductVariant; dp: number } => x.dp != null);
  const cheapestDistributor =
    variantsWithDistPrice.length > 0
      ? variantsWithDistPrice.reduce((min, x) => (x.dp < min.dp ? x : min))
      : undefined;

  const showDistributorPrice = viewingDistributorTab && isDistributorLoggedIn && cheapestDistributor != null;

  return (
    <div className={`${styles.productCard} ${isOutOfStock ? styles.outOfStockCard : ''} ${isLocked ? styles.outOfStockCard : ''}`}>
      <div className={styles.imageContainer}>
        <div className={styles.topLeftBadges}>
          {isOutOfStock ? (
            <span className={styles.outOfStockBadge}>Sin stock</span>
          ) : (
            product.badge && <span className={styles.tagBadge}>{product.badge}</span>
          )}
          {product.is_distributor && (
            <span style={{ background: '#1e293b', color: '#fff', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>
              MAYORISTA
            </span>
          )}
        </div>
        {hasDiscount && !isLocked && !showDistributorPrice && <span className={styles.discountBadge}>-{firstVariant.discount_percent}%</span>}

        <div className={styles.fadeImageWrap}>
          {images.map((img, idx) => (
            <Image
              key={img + idx}
              src={img}
              alt={product.title}
              fill
              className={`${styles.productImage} ${styles.fadeImage} ${activeImageIndex === idx ? styles.fadeImageActive : ''}`}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          ))}
        </div>
      </div>

      <div className={styles.cardContent}>
        <span className={styles.productCategory}>{product.category_name || 'Sin categoría'}</span>
        <h3 className={styles.productTitle}>{product.title}</h3>
        <p className={styles.stockText} style={{ fontSize: '0.8rem', color: '#64748b', margin: '0.2rem 0' }}>
          {totalStock > 0 ? `${product.variants.length} opciones de peso` : 'Agotado'}
        </p>

        <div className={styles.cardFooter}>
          <div className={styles.priceGroup}>
            {isLocked ? (
              <span style={{ fontSize: '0.8rem', color: '#d97706', fontWeight: 600 }}>Inicia sesión para ver precio</span>
            ) : showDistributorPrice ? (
              <>
                <span className={styles.originalPrice}>{formatCLP(cheapestDistributor!.v.price)}</span>
                <span className={styles.price} style={{ color: '#2563eb' }}>
                  Desde {formatCLP(cheapestDistributor!.dp)}
                </span>
              </>
            ) : firstVariant ? (
              <>
                {hasDiscount && <span className={styles.originalPrice}>{formatCLP(firstVariant.price)}</span>}
                <span className={styles.price}>
                  Desde {formatCLP(hasDiscount ? firstVariant.price * (1 - firstVariant.discount_percent / 100) : firstVariant.price)}
                </span>
              </>
            ) : null}
          </div>

          {isLocked ? (
            <button className={styles.addBtn} style={{ background: '#334155' }} onClick={onOpenDistributorModal}>
              Acceso
            </button>
          ) : (
            <button className={styles.addBtn} onClick={() => onOpenModal(product)} disabled={isOutOfStock}>
              Ver Opciones
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProductModalDetails({
  product,
  onClose,
  onAddToCart,
  distributorPrices,
}: {
  product: Product;
  onClose: () => void;
  onAddToCart: (item: any) => void;
  distributorPrices?: Record<number, number>;
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariantId, setSelectedVariantId] = useState<number>(product.variants[0]?.id || 0);
  const [flavorQuantities, setFlavorQuantities] = useState<Record<number, number>>({});

  const images = product.images && product.images.length > 0 ? product.images : product.img_url ? [product.img_url] : [];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  const currentVariant = product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const handleQuantityChange = (flavorId: number, qty: number, maxStock: number) => {
    const validQty = Math.max(0, Math.min(qty, maxStock));
    setFlavorQuantities((prev) => ({ ...prev, [flavorId]: validQty }));
  };

  const currentDistributorPrice = currentVariant && distributorPrices ? distributorPrices[currentVariant.id] : undefined;

  const unitPrice = () => {
    if (!currentVariant) return 0;
    if (currentDistributorPrice != null) return currentDistributorPrice;
    const disc = currentVariant.discount_percent || 0;
    return disc > 0 ? currentVariant.price * (1 - disc / 100) : currentVariant.price;
  };

  const handleAddAll = () => {
    if (!currentVariant) return;
    const finalPrice = unitPrice();

    Object.entries(flavorQuantities).forEach(([flavorIdStr, qty]) => {
      if (qty > 0) {
        const flavorId = parseInt(flavorIdStr, 10);
        const flavorObj = product.flavors.find((f) => f.id === flavorId);
        if (flavorObj) {
          const maxStock = stockFor(currentVariant, flavorObj.id);
          onAddToCart({
            product_id: product.id,
            product_title: `${product.title} (${currentVariant.weight} - ${flavorObj.flavor_name})`,
            variant_id: currentVariant.id,
            flavor_id: flavorObj.id,
            selected_weight: currentVariant.weight,
            selected_flavor: flavorObj.flavor_name,
            unit_price: finalPrice,
            quantity: qty,
            img_url: product.img_url,
            max_stock: maxStock,
          });
        }
      }
    });

    onClose();
  };

  const totalSelectedCount = Object.values(flavorQuantities).reduce((sum, q) => sum + q, 0);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px', maxHeight: '90vh', overflowY: 'auto' }}>
        <button className={styles.modalCloseBtn} onClick={onClose}>✕</button>

        {images.length > 0 && (
          <div className={styles.modalImageWrap} style={{ position: 'relative' }}>
            <div className={styles.fadeImageWrap}>
              {images.map((img, idx) => (
                <Image key={img + idx} src={img} alt={product.title} fill className={`${styles.modalImage} ${styles.fadeImage} ${activeImageIndex === idx ? styles.fadeImageActive : ''}`} />
              ))}
            </div>
          </div>
        )}

        <div className={styles.modalInfoBox}>
          <span className={styles.productCategory}>{product.category_name || 'Sin categoría'}</span>
          <h3 className={styles.modalTitle}>{product.title}</h3>
          {product.description && <p className={styles.modalDescription}>{product.description}</p>}

          <div style={{ margin: '1rem 0' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>Selecciona el Peso:</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {product.variants.map((v) => {
                const isSelected = selectedVariantId === v.id;
                const vDistPrice = distributorPrices?.[v.id];
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setSelectedVariantId(v.id);
                      setFlavorQuantities({});
                    }}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      border: isSelected ? '2px solid #22c55e' : '1px solid #cbd5e1',
                      background: isSelected ? '#f0fdf4' : '#fff',
                      color: isSelected ? '#15803d' : '#334155',
                      fontWeight: isSelected ? 600 : 400,
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                    }}
                  >
                    {v.weight} -{' '}
                    {vDistPrice != null
                      ? formatCLP(vDistPrice)
                      : formatCLP(v.discount_percent > 0 ? v.price * (1 - v.discount_percent / 100) : v.price)}
                    {vDistPrice == null && v.discount_percent > 0 && ` (-${v.discount_percent}%)`}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ margin: '1.2rem 0' }}>
            <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.6rem' }}>
              Elige los sabores y cantidades:
            </label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.flavors.map((f) => {
                const maxStock = stockFor(currentVariant, f.id);
                const currentQty = flavorQuantities[f.id] || 0;

                return (
                  <div
                    key={f.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: currentQty > 0 ? '2px solid #22c55e' : '1px solid #e2e8f0',
                      background: currentQty > 0 ? '#f0fdf4' : '#fafaf9',
                    }}
                  >
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#1e293b', display: 'block' }}>{f.flavor_name}</span>
                      <span style={{ fontSize: '0.75rem', color: maxStock > 0 ? '#64748b' : '#dc2626' }}>
                        {maxStock > 0 ? `Stock disponible: ${maxStock}` : 'Agotado'}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <button
                        type="button"
                        disabled={maxStock <= 0 || currentQty <= 0}
                        onClick={() => handleQuantityChange(f.id, currentQty - 1, maxStock)}
                        style={{ width: '28px', height: '28px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer' }}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="0"
                        max={maxStock}
                        value={currentQty}
                        onChange={(e) => handleQuantityChange(f.id, parseInt(e.target.value) || 0, maxStock)}
                        style={{ width: '45px', textAlign: 'center', padding: '4px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                      />
                      <button
                        type="button"
                        disabled={maxStock <= 0 || currentQty >= maxStock}
                        onClick={() => handleQuantityChange(f.id, currentQty + 1, maxStock)}
                        style={{ width: '28px', height: '28px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#fff', cursor: 'pointer' }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.cardFooter} style={{ margin: '1.2rem 0 0 0', padding: 0, border: 'none', background: 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className={styles.priceGroup}>
              {currentDistributorPrice != null && currentVariant && (
                <span className={styles.originalPrice}>{formatCLP(currentVariant.price)}</span>
              )}
              <span className={styles.price} style={currentDistributorPrice != null ? { color: '#2563eb' } : undefined}>
                {formatCLP(unitPrice())} c/u
              </span>
            </div>
            <button
              className={styles.addBtn}
              disabled={totalSelectedCount <= 0}
              onClick={handleAddAll}
              style={{ opacity: totalSelectedCount <= 0 ? 0.6 : 1 }}
            >
              + Agregar al carrito ({totalSelectedCount})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProductGridProps {
  onAddToCart: (item: any) => void;
  onOpenDistributorModal: () => void;
}

export default function ProductGrid({ onAddToCart, onOpenDistributorModal }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['Todos']);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

const isDistributorLoggedIn = useDistributorStore((s) => s.status === 'approved');  const distributorPrices = useDistributorStore((s) => s.prices);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select(`
          id,
          title,
          category_id,
          description,
          img_url,
          images,
          badge,
          is_new,
          is_distributor,
          categories ( name ),
          product_variants (
            id,
            weight,
            price,
            discount_percent,
            variant_flavor_stock ( flavor_id, stock )
          ),
          product_flavors ( id, flavor_name )
        `)
        .eq('active', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching products:', error.message || error);
        setError('No se pudieron cargar los productos.');
        setLoading(false);
        return;
      }

      if (data) {
        const fetched: Product[] = data.map((item: any) => ({
          ...item,
          category_name: item.categories?.name || 'Sin categoría',
          variants: (item.product_variants || []).map((v: any) => ({
            id: v.id,
            weight: v.weight,
            price: v.price,
            discount_percent: v.discount_percent,
            stocks: (v.variant_flavor_stock || []).map((s: any) => ({ flavor_id: s.flavor_id, stock: s.stock })),
          })),
          flavors: item.product_flavors || [],
        }));
        setProducts(fetched);

        const categoryNames = Array.from(
          new Set(fetched.map((p) => p.category_name).filter((name): name is string => Boolean(name)))
        );
        const hasDistributorProducts = fetched.some((p) => p.is_distributor);

        setCategories(['Todos', ...categoryNames, ...(hasDistributorProducts ? ['Distribuidor'] : [])]);
      }

      setLoading(false);
    }

    fetchProducts();
  }, []);

  const viewingDistributorTab = activeCategory === 'Distribuidor';

  const filteredProducts = viewingDistributorTab
    ? products.filter((p) => p.is_distributor)
    : activeCategory === 'Todos'
    ? products
    : products.filter((p) => p.category_name === activeCategory);

  return (
    <section id="catalogo" className={styles.catalogSection}>
      <div className={styles.catalogContainer}>
        <div className={styles.catalogHeader}>
          <span className={styles.preTitle}>Catálogo</span>
          <h2 className={styles.catalogTitle}>Nuestros Productos</h2>

          <div className={styles.categoriesWrapper}>
            {categories.map((cat) => (
              <button key={cat} className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ''}`} onClick={() => setActiveCategory(cat)}>
                {cat === 'Distribuidor' ? '🤝 Zona Distribuidores' : cat}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className={styles.stateMessage}>Cargando...</p>}
        {error && <p className={styles.stateMessage}>{error}</p>}
        {!loading && !error && filteredProducts.length === 0 && <p className={styles.stateMessage}>No hay productos disponibles.</p>}

        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={(p) => setSelectedProduct(p)}
              viewingDistributorTab={viewingDistributorTab}
              isDistributorLoggedIn={isDistributorLoggedIn}
              distributorPrices={distributorPrices}
              onOpenDistributorModal={onOpenDistributorModal}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModalDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
          distributorPrices={viewingDistributorTab && isDistributorLoggedIn ? distributorPrices : undefined}
        />
      )}
    </section>
  );
}