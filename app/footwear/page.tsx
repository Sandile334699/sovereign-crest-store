import Link from 'next/link';

export default function FootwearPage() {
  const products = [
    { name: 'Crest Lows', price: 'R1,699' },
    { name: 'Sovereign High Top', price: 'R1,799' },
    { name: 'Royal Slides', price: 'R699' },
    { name: 'Crest Runner', price: 'R1,699' },
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
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/men" style={{ color: 'white', textDecoration: 'none' }}>Men</Link>
          <Link href="/women" style={{ color: 'white', textDecoration: 'none' }}>Women</Link>
          <Link href="/accessories" style={{ color: 'white', textDecoration: 'none' }}>Accessories</Link>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ padding: '56px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#C8A24D', fontSize: 40, marginBottom: 12 }}>
          Footwear Collection
        </h1>
        <p style={{ color: '#ddd', maxWidth: 620, margin: '0 auto' }}>
          Premium sneakers, slides, and luxury street footwear crafted for everyday confidence.
        </p>
      </section>

      {/* Products */}
      <section
        style={{
          padding: '0 24px 56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20,
        }}
      >
        {products.map((p) => (
          <div
            key={p.name}
            style={{
              background: '#111',
              border: '1px solid #222',
              borderRadius: 20,
              padding: 20,
            }}
          >
            <div
              style={{
                height: 220,
                borderRadius: 16,
                background: 'linear-gradient(135deg,#1a1a1a,#2a2a2a)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 54,
                color: '#C8A24D',
                marginBottom: 16,
              }}
            >
              👟
            </div>

            <h3 style={{ marginTop: 0 }}>{p.name}</h3>
            <p style={{ color: '#C8A24D', fontWeight: 'bold', fontSize: 18 }}>
              {p.price}
            </p>

            <button
              style={{
                width: '100%',
                background: '#C8A24D',
                color: '#000',
                border: 'none',
                padding: '12px 16px',
                borderRadius: 999,
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
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
