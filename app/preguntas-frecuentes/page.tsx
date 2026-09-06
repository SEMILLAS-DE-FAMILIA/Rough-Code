import React from 'react';
import Link from 'next/link';

export default function PreguntasFrecuentesPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: '#2C1810', fontFamily: 'var(--font-sans, sans-serif)' }}>
      <nav style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
        <Link href="/" style={{ color: '#4E2C1D', textDecoration: 'underline' }}>← Volver al inicio</Link>
      </nav>

      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', color: '#4E2C1D' }}>Preguntas Frecuentes</h1>
      <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '30px' }}>Encuentra respuestas rápidas a las dudas más comunes sobre nuestros productos y envíos.</p>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '25px', lineHeight: '1.6' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', color: '#4E2C1D', marginBottom: '6px' }}>🛒 Sobre los Pedidos y Compras</h2>
          <div style={{ background: '#fcf8f5', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #4E2C1D', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p><strong>¿Cómo puedo realizar un pedido?</strong><br />Puedes navegar por nuestro catálogo web, añadir los productos que desees al carro de compras y completar los datos. Si prefieres atención personalizada, puedes escribirnos directamente a través del botón de WhatsApp flotante.</p>
            <p><strong>¿Cuáles son los medios de pago disponibles?</strong><br />Aceptamos transferencias bancarias directas y los principales medios de pago electrónicos integrados en nuestra plataforma.</p>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.2rem', color: '#4E2C1D', marginBottom: '6px' }}>📦 Sobre los Envíos</h2>
          <div style={{ background: '#fcf8f5', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #4E2C1D', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p><strong>¿Hacen entregas en Talca y otras regiones?</strong><br />¡Sí! Realizamos entregas locales directas en Talca y también envíos a todo Chile mediante operadores logísticos asociados.</p>
            <p><strong>¿Cuánto tarda en llegar mi pedido?</strong><br />Para Talca, los plazos de entrega suelen ser de 24 a 48 horas hábiles. Para envíos a otras regiones, el tiempo dependerá directamente de los plazos de la empresa de transporte seleccionada.</p>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.2rem', color: '#4E2C1D', marginBottom: '6px' }}>🥜 Sobre la Conservación de los Productos</h2>
          <div style={{ background: '#fcf8f5', padding: '15px', borderRadius: '8px', borderLeft: '4px solid #4E2C1D', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <p><strong>¿Cómo debo almacenar los frutos secos y semillas en casa?</strong><br />Para mantener su frescura, crocancia y propiedades, te recomendamos guardarlos en un lugar fresco, seco y oscuro, preferiblemente en frascos de vidrio herméticos o en sus propios envases bien sellados una vez abiertos. Evita la exposición directa al sol.</p>
            <p><strong>¿Los productos tienen fecha de vencimiento?</strong><br />Sí, cada formato cuenta con su respectiva etiqueta que especifica la fecha de consumo preferente para garantizar la mejor experiencia al consumirlos.</p>
          </div>
        </div>
      </section>
    </main>
  );
}