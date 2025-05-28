'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // Here you would integrate with your email service
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      setStatus('success');
      setMessage('Thanks for subscribing! Check your email for confirmation.');
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
      
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="w-full py-24 px-4 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-thin italic mb-6 font-blacky">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-8">
          Stay updated with the latest articles, tutorials, and resources.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15ff15] disabled:opacity-50"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
          />
          <button 
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-6 py-3 bg-[#15ff15] text-black font-bold rounded-lg hover:bg-[#0aff0a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'loading' ? (
              <>
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                Subscribing...
              </>
            ) : status === 'success' ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Subscribed!
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
        
        {message && (
          <p className={`mt-4 text-sm ${
            status === 'success' ? 'text-[#15ff15]' : 'text-red-500'
          }`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
} 