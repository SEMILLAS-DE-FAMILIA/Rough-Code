'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useDistributorStore } from '../../src/lib/useDistributorStore';
import BrandLogo from '../BrandLogo'; // Ajusta la ruta a la ubicación de tu BrandLogo.tsx
import styles from './AppLayout.module.css';

interface CartItemProp {
  id: string | number;
  title: string;
  price: string;
  img: string;
}

interface HeaderNavProps {
  cartItems?: CartItemProp[];
  onRemoveFromCart?: (index: number) => void;
  onOpenDistributorModal: () => void;
  onSearch?: (query: string) => void;
}

// Umbral antes de empezar a esconder el header (evita parpadeo justo al top)
const HIDE_THRESHOLD_PX = 96;

export default function HeaderNav({
  cartItems = [],
  onRemoveFromCart,
  onOpenDistributorModal,
  onSearch,
}: HeaderNavProps) {
  const isDistributor = useDistributorStore((s) => s.status === 'approved');
  const distributorName = useDistributorStore((s) => s.profile?.company_name);
  const logout = useDistributorStore((s) => s.logout);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query); // el input se actualiza al instante, se ve fluido

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch?.(query); // esto es lo que dispara el colapso del layout, ahora con delay
    }, 350);
  };

  const handleClearSearch = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setSearchQuery('');
    onSearch?.('');
    searchInputRef.current?.focus();
  };

  // Header aparece/desaparece según dirección del scroll.
  // Mientras el buscador esté enfocado nunca se esconde (evita que se
  // trague el input mientras la persona está escribiendo).
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledDown = currentScrollY > lastScrollY.current;
      const pastThreshold = currentScrollY > HIDE_THRESHOLD_PX;

      setIsHeaderHidden(() => {
        if (isSearchFocused) return false;
        if (!pastThreshold) return false;
        if (scrolledDown) return true;
        return false;
      });

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSearchFocused]);

  return (
    <header className={`${styles.topHeaderNav} ${isHeaderHidden ? styles.topHeaderNavHidden : ''}`}>
      {/* LADO IZQUIERDO: Marca / Logo estilizado */}
      <div
        className={styles.brandSection}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ cursor: 'pointer' }}
      >
        <BrandLogo />
      </div>

      {/* CENTRO: BARRA DE BÚSQUEDA */}
      <div className={styles.searchContainer}>
        <div className={`${styles.searchInputWrapper} ${isSearchFocused ? styles.searchInputWrapperFocused : ''}`}>
          <svg
            className={styles.searchIcon}
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>

          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            placeholder="Buscar semillas, productos..."
            className={styles.searchInput}
            aria-label="Buscar productos"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className={styles.searchClearBtn}
              aria-label="Limpiar búsqueda"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* LADO DERECHO: Acceso / Estado Distribuidor */}
      <div className={styles.navActions}>
        <button
          onClick={isDistributor ? logout : onOpenDistributorModal}
          className={styles.distributorBtn}
        >
          {isDistributor ? `✓ ${distributorName}` : 'Soy Distribuidor'}
        </button>
      </div>
    </header>
  );
}