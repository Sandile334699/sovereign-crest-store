import Link from 'next/link';

export default function CartPage() {
  const items = [
    { name: 'Crown Signature Hoodie', price: 'R1,299', qty: 1 },
    { name: 'Sovereign Sneaker', price: 'R1,899', qty: 1 },
  ];

  return (
    <main style={{ background: '#0B0B0B', color: 'white', minHeight: '100vh', fontFamily: 'Arial' }}>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px',
          borderBottom: '1px solid #222',
        }}
      >
        <Link href="/" style={{ color: '#C8A24D', textDecoration: 'none', fontWeight: 'bold', fontSize: 22 }}>
          👑 SOVEREIGN CREST
        </Link>

        <nav style={{ display: 'flex', gap: 16 }}>
          <Link href="/men" style={{ color: 'white', textDecoration: 'none' }}>Men</Link>
          <Link href="/women" style={{ color: 'white', textDecoration: 'none' }}>Women</Link>
          <Link href="/footwear" style={{ color: 'white', textDecoration: 'none' }}>Footwear</Link>
          <Link href="/accessories" style={{ color: 'white', textDecoration: 'none' }}>Accessories</Link>
        </nav>
      </header>

      {/* Title */}
      <section style={{ padding: '56px 24px' }}>
        <h1 style={{ color: '#C8A24D', fontSize: 40, marginBottom: 12 }}>
          Shopping Cart
        </h1>
        <p style={{ color: '#ddd' }}>
          Review your selected Sovereign Crest items before checkout.
        </p>
      </section>

      {/* Cart Items */}
      <section style={{ padding: '0 24px 40px', display: 'grid', gap: 16 }}>
        {items.map((item) => (
          <div
            key={item.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#111',
              border: '1px solid #222',
              borderRadius: 18,
              padding: 20,
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 14,
                  background: 'linear-gradient(135deg,#1a1a1a,#2a2a2a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#C8A24D',
                  fontSize: 32,
                }}
              >
                👕
              </div>

              <div>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p style={{ margin: '6px 0', color: '#C8A24D', fontWeight: 'bold' }}>
                  {item.price}
                </p>
                <p style={{ margin: 0, color: '#bbb' }}>
                  Quantity: {item.qty}
                </p>
              </div>
            </div>

            <button
              style={{
                background: 'transparent',
                color: '#C8A24D',
                border: '1px solid #C8A24D',
                padding: '10px 14px',
                borderRadius: 999,
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </section>

      {/* Summary */}
      <section style={{ padding: '0 24px 56px' }}>
        <div
          style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: 20,
            padding: 24,
            maxWidth: 520,
            marginLeft: 'auto',
          }}
        >
          <h2 style={{ color: '#C8A24D', marginTop: 0 }}>Order Summary</h2>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <span>Subtotal</span>
            <span>R3,198</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <span>Delivery</span>
            <span>Calculated at checkout</span>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid #222',
              paddingTop: 12,
              fontWeight: 'bold',
              color: '#C8A24D',
              fontSize: 18,
            }}
          >
            <span>Total</span>
            <span>R3,198</span>
          </div>

          <Link
            href="/checkout"
            style={{
              display: 'block',
              marginTop: 24,
              background: '#C8A24D',
              color: '#000',
              textAlign: 'center',
              padding: '14px 18px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Proceed to Checkout
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid #222',
          padding: '24px',
          textAlign: 'center',
          color: '#888',
        }}
      >
        © {new Date().getFullYear()} Sovereign Crest Official
      </footer>
    </main>
  );
}
