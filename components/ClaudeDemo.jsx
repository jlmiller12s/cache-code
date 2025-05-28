'use client';

import { useState } from 'react';

export default function ClaudeDemo() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await result.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
      setResponse('An error occurred while communicating with Claude.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Claude AI Demo</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2"
          rows="4"
          placeholder="Enter your question for Claude..."
          required
        />
        
        <button 
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? 'Asking Claude...' : 'Send'}
        </button>
      </form>
      
      {response && (
        <div className="border border-gray-300 rounded p-4 bg-gray-50">
          <h2 className="font-bold mb-2">Claude's Response:</h2>
          <p className="whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
} 