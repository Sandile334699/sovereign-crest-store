'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartBadge() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      style={{
        position: 'relative',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}
    >
      🛒 Cart
      {itemCount > 0 && (
        <span
          style={{
            position: 'absolute',
            top: -10,
            right: -14,
            background: '#C8A24D',
            color: '#000',
            borderRadius: '999px',
            fontSize: 12,
            fontWeight: 'bold',
            minWidth: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 6px',
          }}
        >
          {itemCount}
        </span>
      )}
    </Link>
  );
}
