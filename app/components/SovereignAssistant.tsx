'use client';

import { useState } from 'react';

export default function SovereignAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          width: 64,
          height: 64,
          borderRadius: '999px',
          border: 'none',
          background: '#C8A24D',
          color: '#000',
          fontSize: 24,
          fontWeight: 'bold',
          zIndex: 9999,
          boxShadow: '0 0 20px rgba(200,162,77,0.5)'
        }}
      >
        👑
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 96,
            right: 20,
            width: 320,
            background: '#111',
            color: 'white',
            border: '1px solid #C8A24D',
            borderRadius: 16,
            padding: 16,
            zIndex: 9999
          }}
        >
          <h3 style={{ color: '#C8A24D', marginTop: 0 }}>
            Sovereign Assistant
          </h3>

          <p>
            Welcome to Sovereign Crest Official 👑
          </p>

          <p style={{ fontSize: 14 }}>
            I’m your luxury fashion concierge. I can help with
            sizes, outfits, delivery information, and WhatsApp
            orders.
          </p>

          <a
            href="https://wa.me/27663835525"
            target="_blank"
            style={{
              display: 'block',
              marginTop: 12,
              padding: '12px',
              background: '#C8A24D',
              color: '#000',
              textAlign: 'center',
              borderRadius: 10,
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            Continue on WhatsApp
          </a>
        </div>
      )}
    </>
  );
}
