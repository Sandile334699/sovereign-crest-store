import Link from 'next/link';

export default function ContactPage() {
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

      {/* Hero */}
      <section style={{ padding: '56px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#C8A24D', fontSize: 40, marginBottom: 12 }}>
          Contact Us
        </h1>
        <p style={{ color: '#ddd', maxWidth: 620, margin: '0 auto' }}>
          We're here to help with orders, sizing, delivery, and wholesale enquiries.
        </p>
      </section>

      {/* Contact Cards */}
      <section
        style={{
          padding: '0 24px 56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
          maxWidth: 960,
          margin: '0 auto',
        }}
      >
        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 20, padding: 24 }}>
          <h3 style={{ color: '#C8A24D', marginTop: 0 }}>WhatsApp</h3>
          <p>066 383 5525</p>
          <a
            href="https://wa.me/27663835525"
            target="_blank"
            style={{
              display: 'inline-block',
              marginTop: 8,
              background: '#25D366',
              color: '#000',
              padding: '10px 16px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Chat Now
          </a>
        </div>

        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 20, padding: 24 }}>
          <h3 style={{ color: '#C8A24D', marginTop: 0 }}>Email</h3>
          <p>sovereigncreststore@gmail.com</p>
          <a
            href="mailto:sovereigncreststore@gmail.com"
            style={{
              display: 'inline-block',
              marginTop: 8,
              border: '1px solid #C8A24D',
              color: '#C8A24D',
              padding: '10px 16px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Send Email
          </a>
        </div>

        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 20, padding: 24 }}>
          <h3 style={{ color: '#C8A24D', marginTop: 0 }}>Location</h3>
          <p>Witbank (eMalahleni)<br />Mpumalanga, South Africa</p>
        </div>
      </section>

      {/* Brand Story */}
      <section
        style={{
          padding: '0 24px 56px',
          maxWidth: 860,
          margin: '0 auto',
        }}
      >
        <div style={{ background: '#111', border: '1px solid #222', borderRadius: 24, padding: 32 }}>
          <h2 style={{ color: '#C8A24D', marginTop: 0 }}>About Sovereign Crest</h2>
          <p style={{ color: '#ddd', lineHeight: 1.8 }}>
            Sovereign Crest was founded to represent ambition, confidence, and timeless
            luxury streetwear. Our mission is to create premium clothing that empowers
            individuals to move with purpose and wear the crown daily.
          </p>

          <p style={{ color: '#ddd', lineHeight: 1.8 }}>
            Every collection is inspired by leadership, legacy, and modern African luxury.
          </p>
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
        © {new Date().getFullYear()} Sovereign Crest Official • Wear the Crown. Rule the Streets.
      </footer>
    </main>
  );
}
