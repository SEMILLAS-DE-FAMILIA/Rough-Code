import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://semillas-de-familia.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Opcional: Puedes hacer un fetch a tu base de datos o API para obtener IDs dinámicos (ej. productos del catálogo)
  // const productos = await fetch(`${siteUrl}/api/productos`).then((res) => res.json());

  // const productEntries = productos.map((prod: any) => ({
  //   url: `${siteUrl}/catalogo/${prod.id}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'weekly' as const,
  //   priority: 0.8,
  // }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/catalogo`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    // ...productEntries (si implementas las rutas dinámicas comentadas arriba)
  ];
}