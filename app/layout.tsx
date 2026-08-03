import type { Metadata } from 'next';
import { CartProvider } from './context/CartContext';

export const metadata: Metadata = {
  title: 'Sovereign Crest Official',
  description: 'Luxury Streetwear • Wear the Crown. Rule the Streets.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: '#0B0B0B',
          color: 'white',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
