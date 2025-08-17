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
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md">
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">
          Your Name
        </label>
        <div className="mt-1">
          <input
            id="author"
            name="author"
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            disabled={status === 'loading'}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g., John Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="quote" className="block text-sm font-medium text-gray-700">
          Issue Description
        </label>
        <div className="mt-1">
          <textarea
            id="quote"
            name="quote"
            rows={4}
            required
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            disabled={status === 'loading'}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="e.g., My iPhone 14 screen is cracked."
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Quote Request'}
        </button>
      </div>

      <div className="h-6 text-sm text-center">
        {status === 'success' && <p className="text-green-600">{message}</p>}
        {status === 'error' && <p className="text-red-600">{message}</p>}
      </div>
    </form>
  );
}