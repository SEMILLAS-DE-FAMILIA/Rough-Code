'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

export interface SlideItem {
  id: string | number;
  src: string;
  alt: string;
  title: string;
  description: string;
  buttonText?: string;
}

const FALLBACK_SLIDE: SlideItem = {
  id: 'fallback',
  src: '/images/slider/image1.png',
  alt: 'Semillas de Familia',
  title: 'Bienvenido a Semillas de Familia',
  description: 'Configura tu primer slide desde el panel admin para personalizar este espacio.',
  buttonText: 'Ver Catálogo',
};

const AUTOPLAY_DELAY = 5000;

export default function CarouselHeroClient({ initialSlides }: { initialSlides: SlideItem[] }) {
  const [slides] = useState<SlideItem[]>(initialSlides.length > 0 ? initialSlides : [FALLBACK_SLIDE]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (slides.length > 1) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, AUTOPLAY_DELAY);
    }
  }, [slides.length]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [startAutoplay]);

  useEffect(() => {
    const container = viewportRef.current;
    if (!container) return;
    const slideEl = container.querySelector<HTMLElement>(`[data-slide-index="${currentIndex}"]`);
    if (slideEl) {
      container.scrollTo({ left: slideEl.offsetLeft, behavior: 'smooth' });
    }
  }, [currentIndex, slides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(((index % slides.length) + slides.length) % slides.length);
    startAutoplay();
  };

  const scrollPrev = () => goToSlide(currentIndex - 1);
  const scrollNext = () => goToSlide(currentIndex + 1);

  const handleExploreClick = () => {
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className={styles.heroContainer}>
      <div className={styles.backgroundImageWrapper}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.fadeImageWrap} ${index === currentIndex ? styles.fadeImageActive : ''}`}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={slide.src}
              alt="Fondo de pantalla"
              fill
              className={`${styles.backgroundImage} ${styles.fadeImage} ${index === currentIndex ? styles.fadeImageActive : ''}`}
              priority={index === 0}
              quality={60}
            />
          </div>
        ))}
        <div className={styles.backgroundOverlay} />
      </div>

      <div className={styles.heroContentGrid}>
        <div className={styles.textColumn}>
          {currentSlide && (
            <div className={styles.textInner} key={currentSlide.id}>
              <h1 className={styles.mainTitle}>{currentSlide.title}</h1>
              {currentSlide.description && (
                <p className={styles.mainDescription}>{currentSlide.description}</p>
              )}
              {currentSlide.buttonText && (
                <button type="button" className={styles.mainButton} onClick={handleExploreClick}>
                  {currentSlide.buttonText}
                </button>
              )}
            </div>
          )}
        </div>

        <div className={styles.carouselColumn}>
          <div className={styles.carouselViewport} ref={viewportRef}>
            <div className={styles.carouselSlideContainer}>
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  data-slide-index={index}
                  className={`${styles.carouselSlide} ${index === currentIndex ? styles.isActive : ''}`}
                  onClick={() => goToSlide(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className={styles.imageInner}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className={styles.carouselImage}
                      sizes="(max-width: 768px) 30vw, 15vw"
                      loading={index === currentIndex ? undefined : 'lazy'}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {slides.length > 1 && (
            <div className={styles.arrowControls}>
              <button type="button" onClick={scrollPrev} className={styles.arrowButton} aria-label="Anterior">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button type="button" onClick={scrollNext} className={styles.arrowButton} aria-label="Siguiente">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}