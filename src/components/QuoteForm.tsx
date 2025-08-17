// src/components/QuoteForm.tsx

'use client';

import { useState, FormEvent } from 'react';

export default function QuoteForm() {
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ author, quote }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus('error');
        // A more robust error message extractor
        const errorMsg = result.error?.quote?._errors[0] || result.error?.author?._errors[0] || result.error || 'An unknown validation error occurred.';
        setMessage(errorMsg);
        return;
      }

      setStatus('success');
      setMessage('Your quote has been submitted!');
      setAuthor('');
      setQuote('');

    } catch (err) { // CORRECTIVE ACTION: The error is now being used.
      console.error("Submission Error:", err); // Log the actual error for debugging
      setStatus('error');
      setMessage('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          disabled={status === 'loading'}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="quote" className="block text-sm font-medium text-gray-700">Quote</label>
        <textarea
          id="quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          disabled={status === 'loading'}
          className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          rows={4}
        />
      </div>
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-gray-400"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Quote'}
      </button>
      
      {status === 'success' && <p className="text-sm text-green-600">{message}</p>}
      {status === 'error' && <p className="text-sm text-red-600">{message}</p>}
    </form>
  );
}