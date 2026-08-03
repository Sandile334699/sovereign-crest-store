'use client';

import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeItem, itemCount } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main style={{ background: '#0B0B0B', color: 'white', minHeight: '100vh', padding: 24 }}>
      <h1 style={{ color: '#C8A24D' }}>Shopping Cart</h1>

      {itemCount === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link href="/men" style={{ color: '#C8A24D' }}>
            Continue shopping
          </Link>
        </div>
      ) : (
        <>
          <div style={{ display: 'grid', gap: 16 }}>
            {items.map((item) => (
              <div
                key={item.name}
                style={{
                  background: '#111',
                  border: '1px solid #222',
                  borderRadius: 16,
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <p style={{ color: '#C8A24D' }}>
                    R{item.price} × {item.qty}
                  </p>
                </div>

                <button
                  onClick={() => removeItem(item.name)}
                  style={{
                    background: 'transparent',
                    color: '#C8A24D',
                    border: '1px solid #C8A24D',
                    borderRadius: 999,
                    padding: '8px 14px',
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 24,
              background: '#111',
              border: '1px solid #222',
              borderRadius: 16,
              padding: 20,
            }}
          >
            <h2 style={{ color: '#C8A24D' }}>Total: R{total.toLocaleString()}</h2>

            <Link
              href="/checkout"
              style={{
                display: 'inline-block',
                background: '#C8A24D',
                color: '#000',
                padding: '12px 20px',
                borderRadius: 999,
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
