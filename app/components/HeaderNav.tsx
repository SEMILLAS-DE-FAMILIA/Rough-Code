'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useDistributorStore } from '../../src/lib/useDistributorStore';
import BrandLogo from '../BrandLogo';
import styles from './AppLayout.module.css';

interface HeaderNavProps {
  onOpenDistributorModal: () => void;
  onSearch?: (query: string) => void;
}

const HIDE_THRESHOLD_PX = 96;

export default function HeaderNav({
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
  const tickingRef = useRef(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      onSearch?.(query);
    }, 350);
  };

  const handleClearSearch = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    setSearchQuery('');
    onSearch?.('');
    searchInputRef.current?.focus();
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const scrolledDown = currentScrollY > lastScrollY.current;
          const pastThreshold = currentScrollY > HIDE_THRESHOLD_PX;

          setIsHeaderHidden(() => {
            if (isSearchFocused) return false;
            if (!pastThreshold) return false;
            if (scrolledDown) return true;
            return false;
          });

          lastScrollY.current = currentScrollY;
          tickingRef.current = false;
        });

        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSearchFocused]);

  return (
    <header className={`${styles.topHeaderNav} ${isHeaderHidden ? styles.topHeaderNavHidden : ''}`}>
      {/* LADO IZQUIERDO: Marca / Logo estilizado (Se oculta en móviles) */}
      <div
        className={`${styles.brandSection} ${styles.hideOnMobile}`}
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
          className={`${styles.distributorBtn} ${isDistributor ? styles.distributorBtnActive : ''}`}
        >
          {isDistributor ? (
            <>
              <span className={styles.distributorDot} />
              <span className={styles.distributorNameText}>{distributorName}</span>
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7L12 3 4 7m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <span>Soy Distribuidor</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}