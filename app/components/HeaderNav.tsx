'use client';

import React, { useState } from 'react';
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <header className={styles.topHeaderNav}>
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
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Buscar semillas, productos..."
          className={styles.searchInput}
        />
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