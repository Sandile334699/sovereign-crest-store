import Link from 'next/link';

export default function CheckoutPage() {
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

        <Link href="/cart" style={{ color: 'white', textDecoration: 'none' }}>
          ← Back to Cart
        </Link>
      </header>

      {/* Title */}
      <section style={{ padding: '48px 24px 24px' }}>
        <h1 style={{ color: '#C8A24D', fontSize: 40, marginBottom: 12 }}>
          Checkout
        </h1>
        <p style={{ color: '#ddd', maxWidth: 620 }}>
          Complete your order details below. Secure online payments will be activated soon.
        </p>
      </section>

      {/* Layout */}
      <section
        style={{
          padding: '0 24px 56px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}
      >
        {/* Customer form */}
        <div
          style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: 20,
            padding: 24,
          }}
        >
          <h2 style={{ color: '#C8A24D', marginTop: 0 }}>Customer Details</h2>

          {[
            'Full Name',
            'Phone Number',
            'Email Address',
            'Street Address',
            'City',
            'Postal Code',
          ].map((label) => (
            <div key={label} style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 6, color: '#ddd' }}>
                {label}
              </label>
              <input
                type="text"
                placeholder={label}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: 12,
                  border: '1px solid #333',
                  background: '#0B0B0B',
                  color: 'white',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          ))}

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#ddd' }}>
              Order Notes
            </label>
            <textarea
              placeholder="Add any special delivery instructions..."
              rows={4}
              style={{
                width: '100%',
                padding: '12px 14px',
                borderRadius: 12,
                border: '1px solid #333',
                background: '#0B0B0B',
                color: 'white',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>

        {/* Order summary */}
        <div
          style={{
            background: '#111',
            border: '1px solid #222',
            borderRadius: 20,
            padding: 24,
            position: 'sticky',
            top: 24,
          }}
        >
          <h2 style={{ color: '#C8A24D', marginTop: 0 }}>Order Summary</h2>

          <div style={{ display: 'grid', gap: 12, marginBottom: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Crown Signature Hoodie</span>
              <span>R1,299</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Sovereign Sneaker</span>
              <span>R1,899</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <span>Subtotal</span>
            <span>R3,198</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
            <span>Delivery</span>
            <span>Calculated after order</span>
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
              marginBottom: 20,
            }}
          >
            <span>Total</span>
            <span>R3,198</span>
          </div>

          <div
            style={{
              background: '#1a1a1a',
              border: '1px solid #333',
              borderRadius: 16,
              padding: 16,
              marginBottom: 20,
            }}
          >
            <strong style={{ color: '#C8A24D' }}>Payments Coming Soon</strong>
            <p style={{ color: '#ddd', marginBottom: 0, marginTop: 8 }}>
              Secure online card payments will be activated soon. For now, our team
              will confirm your order via WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/27663835525?text=Hi%20Sovereign%20Crest%2C%20I%20would%20like%20to%20confirm%20my%20order."
            target="_blank"
            style={{
              display: 'block',
              width: '100%',
              background: '#25D366',
              color: '#000',
              textAlign: 'center',
              padding: '14px 18px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 'bold',
              boxSizing: 'border-box',
            }}
          >
            Confirm Order on WhatsApp
          </a>

          <p style={{ color: '#888', fontSize: 13, marginTop: 16 }}>
            By confirming your order, you agree to our delivery and returns policy.
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
