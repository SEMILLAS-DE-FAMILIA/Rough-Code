'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroSlider.module.css';

const SLIDES = [
  {
    id: 1,
    title: 'Semillas Orgánicas de Alta Germinación',
    subtitle: 'Cultiva tus propios alimentos con semillas seleccionadas de calidad premium.',
    img: '/images/slider/image1.png',
    btnText: 'Ver Catálogo',
  },
  {
    id: 2,
    title: 'Insumos y Nutrición para tu Cultivo',
    subtitle: 'Fertilizantes y sustratos orgánicos para maximizar tu cosecha.',
    img: '/images/slider/image2.png',
    btnText: 'Explorar Insumos',
  },
  {
    id: 3,
    title: 'Herramientas para el Trabajo Agrícola',
    subtitle: 'Equipamiento duradero para proyectos de jardín y producción a gran escala.',
    img: '/images/slider/image3.png',
    btnText: 'Ver Herramientas',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            priority={index === 0}
            className={styles.slideImg}
          />
          <div className={styles.overlay} />
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>{slide.title}</h1>
            <p className={styles.subtitle}>{slide.subtitle}</p>
            <a href="#catalogo" className={styles.ctaBtn}>
              {slide.btnText}
            </a>
          </div>
        </div>
      ))}

      {/* Indicadores/Puntos del carrusel */}
      <div className={styles.dotsWrapper}>
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}