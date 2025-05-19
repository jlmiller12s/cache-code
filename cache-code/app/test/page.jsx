export default function TestPage() {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '0 auto',
      color: 'white',
      background: 'black'
    }}>
      <h1 style={{ color: '#15ff15', fontSize: '2rem', marginBottom: '1rem' }}>
        Test Page - Cache Code
      </h1>
      <p style={{ marginBottom: '1rem' }}>
        This is a basic test page to verify that Next.js routing is working correctly.
      </p>
      <div style={{ 
        padding: '1rem', 
        background: '#0a2d0a', 
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <p>If you can see this page, your server is working correctly!</p>
      </div>
    </div>
  );
} 