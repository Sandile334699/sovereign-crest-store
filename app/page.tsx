import SovereignAssistant from './components/SovereignAssistant';
export default function Home() {
  return (
    <main style={{
      background: '#0B0B0B',
      color: 'white',
      minHeight: '100vh',
      padding: '24px',
      fontFamily: 'Arial'
    }}>
      <h1 style={{color:'#C8A24D', fontSize:'40px'}}>SOVEREIGN CREST</h1>
      <p>Wear the Crown. Rule the Streets.</p>

      <div style={{marginTop:'32px', padding:'20px', border:'1px solid #333', borderRadius:'16px'}}>
        <h2>Crown Signature Hoodie</h2>
        <p style={{color:'#C8A24D'}}>R1,299</p>
      </div>

      <div style={{marginTop:'16px', padding:'20px', border:'1px solid #333', borderRadius:'16px'}}>
        <h2>Royal Crest Tee</h2>
        <p style={{color:'#C8A24D'}}>R499</p>
      </div>

      <div style={{marginTop:'16px', padding:'20px', border:'1px solid #333', borderRadius:'16px'}}>
        <h2>Sovereign Sneaker</h2>
        <p style={{color:'#C8A24D'}}>R1,899</p>
      </div>
    </main> <SovereignAssistant />
  );
}
