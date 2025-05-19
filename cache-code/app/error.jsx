'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to the console
    console.error('Error encountered:', error);
  }, [error]);

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '800px', 
      margin: '2rem auto',
      background: '#0a0a0a', 
      color: 'white',
      borderRadius: '8px',
      border: '1px solid #15ff15'
    }}>
      <h1 style={{ color: '#15ff15', fontSize: '2rem', marginBottom: '1rem' }}>
        Something went wrong
      </h1>
      
      <div style={{ background: '#0a2d0a', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
        <p>Error Message: {error?.message || 'Unknown error'}</p>
        {error?.stack && (
          <pre style={{ 
            whiteSpace: 'pre-wrap', 
            overflow: 'auto', 
            marginTop: '1rem',
            fontSize: '0.8rem',
            color: '#ccc',
            padding: '0.5rem',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '4px'
          }}>
            {error.stack}
          </pre>
        )}
      </div>
      
      <button
        onClick={reset}
        style={{ 
          background: '#15ff15', 
          color: 'black', 
          padding: '0.5rem 1rem', 
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Try Again
      </button>
    </div>
  );
} 