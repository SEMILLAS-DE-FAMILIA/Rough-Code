import React from 'react';
import Link from 'next/link';

export default function TerminosPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: '#2C1810', fontFamily: 'var(--font-sans, sans-serif)' }}>
      <nav style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
        <Link href="/" style={{ color: '#4E2C1D', textDecoration: 'underline' }}>← Volver al inicio</Link>
      </nav>

      <h1 style={{ fontSize: '2.2rem', marginBottom: '10px', color: '#4E2C1D' }}>Términos y Condiciones</h1>
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '30px' }}>Última actualización: Septiembre de 2026</p>

      <section style={{ display: 'flex', flexDirection: 'column', gap: '20px', lineHeight: '1.6' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#4E2C1D', marginBottom: '8px' }}>1. Alcance y Uso del Sitio</h2>
          <p>Este sitio web está destinado a la venta online de frutos secos, semillas, frutos deshidratados y productos afines para clientes dentro del territorio chileno. Las compras realizadas a través de nuestra plataforma están sujetas a la disponibilidad de stock.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#4E2C1D', marginBottom: '8px' }}>2. Precios y Stock</h2>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li>Todos los precios publicados en el sitio web están expresados en pesos chilenos e incluyen el Impuesto al Valor Agregado (IVA).</li>
            <li>Nos esforzamos por mantener el inventario actualizado; sin embargo, en caso de que un producto no se encuentre disponible tras realizar la compra, nos pondremos en contacto a la brevedad para coordinar la devolución del dinero o el cambio por otro producto equivalente.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#4E2C1D', marginBottom: '8px' }}>3. Despachos y Envíos</h2>
          <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <li><strong>Envíos locales (Talca):</strong> Realizamos entregas directas en la comuna de Talca bajo las modalidades y plazos informados al momento de pagar.</li>
            <li><strong>Envíos a otras regiones:</strong> Los envíos se realizan a través de empresas de transporte externas. Los tiempos de entrega dependen exclusivamente de la empresa de transporte y de la zona de destino.</li>
            <li>Es responsabilidad del cliente ingresar correctamente la dirección de destino y los datos de contacto para asegurar una entrega exitosa.</li>
          </ul>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#4E2C1D', marginBottom: '8px' }}>4. Cambios y Devoluciones</h2>
          <p>Debido a la naturaleza alimentaria de nuestros productos (frutos secos y alimentos perecibles o susceptibles a humedad), <strong>no se aceptan cambios ni devoluciones por satisfacción o por arrepentimiento de compra</strong> una vez que el producto haya sido abierto o manipulado.</p>
          <p style={{ marginTop: '8px' }}>Si tu producto llega con un daño de fábrica evidente, empaque roto o algún problema atribuible a nuestro manejo, debes contactarnos dentro de las <strong>48 horas posteriores a la recepción</strong> adjuntando registros fotográficos para evaluar la reposición.</p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', color: '#4E2C1D', marginBottom: '8px' }}>5. Privacidad y Protección de Datos</h2>
          <p>Los datos proporcionados por los clientes (nombre, teléfono, dirección y correo) serán utilizados exclusivamente para la gestión de los pedidos, facturación y despacho, garantizando la confidencialidad de la información de acuerdo con la legislación chilena vigente.</p>
        </div>
      </section>
    </main>
  );
}