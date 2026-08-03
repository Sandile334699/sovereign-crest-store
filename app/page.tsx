import SovereignAssistant from './components/SovereignAssistant';

export default function Home() {
  const products = [
    { name: 'Crown Signature Hoodie', price: 'R1,299' },
    { name: 'Royal Crest Tee', price: 'R499' },
    { name: 'Sovereign Sneaker', price: 'R1,899' },
    { name: 'Royal Varsity Jacket', price: 'R1,699' },
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: '999px',
              background: '#C8A24D',
              color: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
            }}
          >
            👑
          </div>
          <div>
            <div style={{ color: '#C8A24D', fontWeight: 'bold', fontSize: 18 }}>
              SOVEREIGN CREST
            </div>
            <div style={{ fontSize: 12, color: '#bbb' }}>Official</div>
          </div>
        </div>

        <nav style={{ display: 'flex', gap: 16, fontSize: 14 }}>
          <a href="#men" style={{ color: 'white', textDecoration: 'none' }}>Men</a>
          <a href="#women" style={{ color: 'white', textDecoration: 'none' }}>Women</a>
          <a href="#footwear" style={{ color: 'white', textDecoration: 'none' }}>Footwear</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section
        style={{
          padding: '72px 24px',
          textAlign: 'center',
          background:
            'linear-gradient(180deg, #111 0%, #0B0B0B 100%)',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            border: '1px solid #333',
            borderRadius: 999,
            padding: '6px 12px',
            color: '#C8A24D',
            fontSize: 13,
            marginBottom: 16,
          }}
        >
          👑 Luxury Streetwear • South Africa
        </div>

        <h1
          style={{
            fontSize: 48,
            marginBottom: 16,
            color: '#C8A24D',
            lineHeight: 1.1,
          }}
        >
          Wear the Crown.
          <br />
          Rule the Streets.
        </h1>

        <p
          style={{
            maxWidth: 640,
            margin: '0 auto 28px',
            color: '#ddd',
            fontSize: 18,
          }}
        >
          Premium streetwear crafted for confidence, power, and timeless style.
          Designed in Witbank, South Africa.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a
            href="#collections"
            style={{
              background: '#C8A24D',
              color: '#000',
              padding: '14px 24px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Shop New Arrivals
          </a>

          <a
            href="#collections"
            style={{
              border: '1px solid #C8A24D',
              color: '#C8A24D',
              padding: '14px 24px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Explore Collections
          </a>
        </div>
      </section>

      {/* Trust Bar */}
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12,
          padding: '24px',
          borderTop: '1px solid #222',
          borderBottom: '1px solid #222',
        }}
      >
        {[
          'Premium Quality',
          'Secure Checkout',
          'Fast SA Delivery',
          'Luxury Support',
        ].map((item) => (
          <div
            key={item}
            style={{
              border: '1px solid #222',
              borderRadius: 16,
              padding: 16,
              textAlign: 'center',
              color: '#ddd',
            }}
          >
            {item}
          </div>
        ))}
      </section>

      {/* Collections */}
      <section id="collections" style={{ padding: '56px 24px' }}>
        <h2 style={{ color: '#C8A24D', textAlign: 'center', fontSize: 32 }}>
          Featured Collections
        </h2>
        <p style={{ textAlign: 'center', color: '#bbb', marginBottom: 32 }}>
          Curated essentials from the Sovereign Crest luxury streetwear line.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}
        >
          {products.map((p) => (
            <div
              key={p.name}
              style={{
                border: '1px solid #222',
                borderRadius: 20,
                padding: 20,
                background: '#111',
              }}
            >
              <div
                style={{
                  height: 180,
                  borderRadius: 16,
                  background:
                    'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  color: '#C8A24D',
                  fontSize: 48,
                }}
              >
                👕
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
        </div>
      </section>

      {/* AI Section */}
      <section
        style={{
          padding: '56px 24px',
          background: '#111',
          borderTop: '1px solid #222',
          borderBottom: '1px solid #222',
        }}
      >
        <h2 style={{ color: '#C8A24D', textAlign: 'center', fontSize: 30 }}>
          AI Powered Shopping
        </h2>
        <p style={{ textAlign: 'center', color: '#ddd', maxWidth: 720, margin: '0 auto 28px' }}>
          Meet Sovereign Assistant — your personal luxury fashion concierge available
          24/7 for outfit recommendations, sizing help, delivery information, and
          WhatsApp orders.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
            maxWidth: 900,
            margin: '0 auto',
          }}
        >
          {[
            '24/7 AI Support',
            'Style Recommendations',
            'Size Guidance',
            'WhatsApp Ordering',
          ].map((item) => (
            <div
              key={item}
              style={{
                border: '1px solid #333',
                borderRadius: 18,
                padding: 20,
                textAlign: 'center',
                color: '#ddd',
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 10 }}>✨</div>
              <div>{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{ padding: '56px 24px' }}>
        <h2 style={{ color: '#C8A24D', textAlign: 'center', fontSize: 30 }}>
          About Sovereign Crest
        </h2>
        <p style={{ maxWidth: 820, margin: '16px auto', color: '#ddd', lineHeight: 1.8 }}>
          Sovereign Crest was founded to represent ambition, style, and leadership.
          The crown symbolizes self-mastery; the crest represents legacy. We create
          clothing for individuals who move with purpose and wear confidence daily.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        style={{
          padding: '56px 24px',
          background: '#111',
          borderTop: '1px solid #222',
        }}
      >
        <h2 style={{ color: '#C8A24D', textAlign: 'center', fontSize: 30 }}>
          Contact Us
        </h2>

        <div
          style={{
            maxWidth: 520,
            margin: '24px auto',
            display: 'grid',
            gap: 14,
          }}
        >
          <div style={{ border: '1px solid #222', borderRadius: 16, padding: 16 }}>
            <strong>WhatsApp</strong>
            <br />
            066 383 5525
          </div>

          <div style={{ border: '1px solid #222', borderRadius: 16, padding: 16 }}>
            <strong>Email</strong>
            <br />
            sovereigncreststore@gmail.com
          </div>

          <div style={{ border: '1px solid #222', borderRadius: 16, padding: 16 }}>
            <strong>Location</strong>
            <br />
            Witbank (eMalahleni), Mpumalanga, South Africa
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="https://wa.me/27663835525"
            target="_blank"
            style={{
              display: 'inline-block',
              marginTop: 12,
              background: '#25D366',
              color: '#000',
              padding: '14px 24px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: '28px 24px',
          borderTop: '1px solid #222',
          textAlign: 'center',
          color: '#888',
        }}
      >
        © {new Date().getFullYear()} Sovereign Crest Official • Wear the Crown. Rule
        the Streets.
      </footer>

      {/* AI Assistant */}
      <SovereignAssistant />
    </main>
  );
    }
