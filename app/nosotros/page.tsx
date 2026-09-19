import React from 'react';
import Link from 'next/link';

export default function SobreNosotrosPage() {
  return (
    <main 
      lang="es"
      style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        padding: '40px 20px', 
        color: '#2C1810', 
        fontFamily: 'var(--font-sans, sans-serif)',
        textAlign: 'justify',
        hyphens: 'auto',
        WebkitHyphens: 'auto'
      }}
    >
      <nav style={{ marginBottom: '20px', fontSize: '0.9rem', textAlign: 'left' }}>
        <Link href="/" style={{ color: '#4E2C1D', textDecoration: 'underline' }}>← Volver al inicio</Link>
      </nav>

      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', color: '#4E2C1D', textAlign: 'left' }}>Sobre Nosotros</h1>
      <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px', fontWeight: '500' }}>
        Llevando lo mejor de la naturaleza y los frutos secos directamente a tu hogar en Talca y todo Chile.
      </p>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '25px', lineHeight: '1.7' }}>
        <div style={{ background: '#fcf8f5', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #4E2C1D' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#4E2C1D', marginBottom: '10px' }}>🌱 Nuestra Historia</h2>
          <p>
            <strong>Semillas de Familia</strong> nace con el propósito de fomentar un estilo de vida más saludable y consciente, ofreciendo una cuidada selección de frutos secos, semillas y productos naturales de la más alta calidad. Como emprendimiento local, nos esforzamos por mantener la cercanía con nuestros clientes, entregando confianza y frescura en cada formato.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#4E2C1D', marginBottom: '10px' }}>💚 Nuestro Compromiso</h2>
          <p>
            Creemos firmemente que una buena alimentación es el pilar del bienestar familiar. Por eso, seleccionamos minuciosamente cada producto para asegurar que conserven todas sus propiedades nutricionales, su sabor auténtico y su textura crujiente. Nos importa que cada compra sea una experiencia satisfactoria, desde que eliges en nuestra web hasta que disfrutas el producto en tu mesa.
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#4E2C1D', marginBottom: '10px' }}>📍 ¿Dónde estamos?</h2>
          <p>
            Operamos desde la hermosa ciudad de <strong>Talca</strong>, desde donde realizamos despachos locales y envíos hacia distintas regiones del país, conectando el campo y los mejores distribuidores con tu hogar.
          </p>
        </div>
      </section>
    </main>
  );
}