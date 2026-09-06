import { supabase } from '../../src/lib/supabaseClient';
import Link from 'next/link';

export default async function CatalogoPage({ 
  searchParams 
}: { 
  searchParams: { page?: string } 
}) {
  const pageSize = 12;
  
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize - 1;

  console.log("Página actual:", currentPage, "Desde:", startIndex, "Hasta:", endIndex);

  const { data: products, count, error } = await supabase
    .from('products')
    .select('*', { count: 'exact' })
    .range(startIndex, endIndex);

  console.log("Productos obtenidos de la BD:", products?.length, "Total en tabla:", count);

  if (error) {
    console.error("Error al cargar productos:", error.message);
  }

  const totalProducts = count || 0;
  const totalPages = Math.ceil(totalProducts / pageSize);

  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Catálogo de Productos</h1>

      {/* Grid de productos */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {products?.map((product: any) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>

      {/* Controles de Paginación Tradicional */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '40px', alignItems: 'center' }}>
        {currentPage > 1 && (
          <Link 
            href={`/catalogo?page=${currentPage - 1}`}
            style={{ padding: '8px 16px', background: '#fcf8f5', border: '1px solid #4E2C1D', borderRadius: '6px', color: '#4E2C1D', textDecoration: 'none' }}
          >
            ← Anterior
          </Link>
        )}

        <span style={{ color: '#666' }}>
          Página {currentPage} de {totalPages || 1}
        </span>

        {currentPage < totalPages && (
          <Link 
            href={`/catalogo?page=${currentPage + 1}`}
            style={{ padding: '8px 16px', background: '#4E2C1D', borderRadius: '6px', color: '#fff', textDecoration: 'none' }}
          >
            Siguiente →
          </Link>
        )}
      </div>
    </main>
  );
}