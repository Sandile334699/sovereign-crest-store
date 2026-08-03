import Link from 'next/link';
import AddToCartButton from '../components/AddToCartButton';
import CartBadge from '../components/CartBadge';

export default function MenPage() {
  const products = [
    { name: 'Crown Signature Hoodie', price: 1299, emoji: '👕' },
    { name: 'Royal Crest Tee', price: 499, emoji: '👔' },
    { name: 'Sovereign Sneaker', price: 1899, emoji: '👟' },
    { name: 'Royal Varsity Jacket', price: 1699, emoji: '🧥' },
  ];

  return (
    <main
      style={{
        background: '#0B0B0B',
        color: 'white',
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px',
          borderBottom: '1px solid #222',
          position: 'sticky',
          top: 0,
          background: '#0B0B0B',
          zIndex: 100,
        }}
      >
        <Link
          href="/"
          style={{
            color: '#C8A24D',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: 22,
          }}
        >
          👑 SOVEREIGN CREST
        </Link>

        <nav
          style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
          <Link href="/women" style={{ color: 'white', textDecoration: 'none' }}>
            Women
          </Link>
          <Link href="/footwear" style={{ color: 'white', textDecoration: 'none' }}>
            Footwear
          </Link>
          <Link href="/accessories" style={{ color: 'white', textDecoration: 'none' }}>
            Accessories
          </Link>

          <CartBadge />
        </nav>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: '64px 24px',
          textAlign: 'center',
          background:
            'linear-gradient(180deg, #111 0%, #0B0B0B 100%)',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            padding: '6px 14px',
            border: '1px solid #333',
            borderRadius: 999,
            color: '#C8A24D',
            marginBottom: 16,
            fontSize: 13,
          }}
        >
          Premium Menswear • Sovereign Crest
        </div>

        <h1
          style={{
            color: '#C8A24D',
            fontSize: 44,
            marginBottom: 16,
          }}
        >
          Men's Collection
        </h1>

        <p
          style={{
            color: '#ddd',
            maxWidth: 680,
            margin: '0 auto',
            fontSize: 18,
            lineHeight: 1.7,
          }}
        >
          Premium hoodies, tees, jackets, and footwear crafted for confidence,
          power, and timeless streetwear style.
        </p>
      </section>

      {/* Products */}
      <section
        style={{
          padding: '0 24px 64px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
        }}
      >
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: 24,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              transition: 'transform 0.2s ease',
            }}
          >
            {/* Product Image Placeholder */}
            <div
              style={{
                height: 240,
                borderRadius: 18,
                background:
                  'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 64,
                color: '#C8A24D',
              }}
            >
              {p.emoji}
            </div>

            {/* Product Info */}
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  margin: '0 0 8px',
                  fontSize: 20,
                }}
              >
                {p.name}
              </h3>

              <p
                style={{
                  color: '#C8A24D',
                  fontWeight: 'bold',
                  fontSize: 22,
                  margin: 0,
                }}
              >
                R{p.price.toLocaleString()}
              </p>
            </div>

            {/* Add to Cart */}
            <AddToCartButton
              name={p.name}
              price={p.price}
            />
          </div>
        ))}
      </section>

      {/* Brand Banner */}
      <section
        style={{
          margin: '0 24px 64px',
          padding: 32,
          borderRadius: 24,
          border: '1px solid #222',
          background: '#111',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#C8A24D', marginTop: 0 }}>
          Wear the Crown
        </h2>

        <p
          style={{
            color: '#ddd',
            maxWidth: 720,
            margin: '0 auto',
            lineHeight: 1.8,
          }}
        >
          Every Sovereign Crest piece is designed to elevate your presence with
          luxury fabrics, modern tailoring, and confident streetwear energy.
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid #222',
          padding: '28px 24px',
          textAlign: 'center',
          color: '#888',
        }}
      >
        © {new Date().getFullYear()} Sovereign Crest Official • Wear the Crown.
        Rule the Streets.
      </footer>
    </main>
  );
}
