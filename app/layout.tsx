import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans, Pacifico } from "next/font/google";
import "./globals.css";
import "./styles/tokens.css";

// Importación de componentes globales
import TrustBanner from "./components/TrustBanner";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

// Configuración de la tipografía Pacifico para el logo
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: {
    default: "Semillas de Familia | Frutos Secos e Infusiones",
    template: "%s | Semillas de Familia",
  },
  description: "Catálogo oficial de frutos secos, semillas, snacks saludables e infusiones naturales. Calidad y frescura directo a tu mesa.",
  keywords: ["frutos secos", "infusiones", "semillas", "té", "snack saludable", "alimentos naturales", "Chile"],
  authors: [{ name: "Semillas de Familia" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Semillas de Familia | Frutos Secos e Infusiones",
    description: "Encuentra frutos secos seleccionados, snacks saludables e infusiones. Envíos y retiros disponibles.",
    url: "https://tusitio.vercel.app",
    siteName: "Semillas de Familia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Semillas de Familia - Frutos Secos e Infusiones",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Semillas de Familia | Frutos Secos e Infusiones",
    description: "Catálogo oficial de frutos secos, semillas e infusiones naturales.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${displayFont.variable}`}>
        <div className="flex-1">
          {children}
        </div>

        <TrustBanner />
        <Footer />
      </body>
    </html>
  );
}