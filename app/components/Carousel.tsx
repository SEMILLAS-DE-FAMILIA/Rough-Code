'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import styles from './Carousel.module.css';

export interface SlideItem {
  id: string | number;
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

// Datos locales
const SLIDES_LOCALES: SlideItem[] = [
  {
    id: 1,
    src: '/images/slider/image1.png',
    alt: 'Bosque de Semillas Seleccionadas',
    title: 'Semillas Seleccionadas',
    description: 'La mejor calidad para la siembra de la temporada. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    buttonText: 'Explorar Catálogo',
  },
  {
    id: 2,
    src: '/images/slider/image2.png',
    alt: 'Insumos Agrícolas Profesionales',
    title: 'Insumos Agrícolas',
    description: 'Soluciones integrales para la producción del campo. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    buttonText: 'Ver Productos',
  },
  {
    id: 3,
    src: '/images/slider/image3.png',
    alt: 'Nosotros',
    title: 'Nosotros',
    description: 'De nuestro corazón a tu mesa.',
    buttonText: 'Ver Productos',
  },
];

export default function CarouselHero({ slides = SLIDES_LOCALES }: { slides?: SlideItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Sincronizar el estado del slide actual para cambiar el fondo
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlideIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // Llamar inicialmente
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Hacer click en un slide pequeño para ir directo a él
  const scrollToSlide = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  // Función para scroll suave hasta la sección de catálogo de productos abajo
  const handleExploreClick = () => {
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Datos del slide actualmente visible
  const currentSlide = slides[currentSlideIndex];

  return (
    <section className={styles.heroContainer}>
      {/* 1. Fondo de Pantalla Completo con Imagen del Slide Actual */}
      {currentSlide && (
        <div className={styles.backgroundImageWrapper}>
          <Image
            src={currentSlide.src}
            alt="Fondo de pantalla"
            fill
            className={styles.backgroundImage}
            priority
            quality={60}
          />
          <div className={styles.backgroundOverlay} />
        </div>
      )}

      {/* 2. Contenido del Hero (Grid de dos columnas) */}
      <div className={styles.heroContentGrid}>
        
        {/* Columna Izquierda: Texto */}
        <div className={styles.textColumn}>
          {currentSlide && (
            <>
              <h1 className={styles.mainTitle}>{currentSlide.title}</h1>
              <p className={styles.mainDescription}>{currentSlide.description}</p>
              {currentSlide.buttonText && (
                <button 
                  className={styles.mainButton} 
                  onClick={handleExploreClick}
                >
                  {currentSlide.buttonText}
                </button>
              )}
            </>
          )}
        </div>

        {/* Columna Derecha: Carrusel Pequeño (Thumbnail) */}
        <div className={styles.carouselColumn}>
          <div className={styles.carouselViewport} ref={emblaRef}>
            <div className={styles.carouselSlideContainer}>
              {slides.map((slide, index) => (
                <div 
                  key={slide.id} 
                  className={`${styles.carouselSlide} ${index === currentSlideIndex ? styles.isActive : ''}`}
                  onClick={() => scrollToSlide(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.imageInner}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className={styles.carouselImage}
                      sizes="(max-width: 768px) 30vw, 15vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Botones de navegación (Debajo del carrusel pequeño) */}
          <div className={styles.arrowControls}>
            <button onClick={scrollPrev} className={styles.arrowButton} aria-label="Anterior">
              &#10094;
            </button>
            <button onClick={scrollNext} className={styles.arrowButton} aria-label="Siguiente">
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}