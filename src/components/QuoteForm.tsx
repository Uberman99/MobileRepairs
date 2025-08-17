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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, quote }),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle zod validation shape (result.error.format()) or generic error
        const zodError = result.error;
        const quoteErr = zodError?.quote?._errors?.[0];
        const authorErr = zodError?.author?._errors?.[0];
        setStatus('error');
        setMessage(quoteErr || authorErr || result.error || 'An unknown error occurred.');
        return;
      }

      setStatus('success');
      setMessage('Your quote has been submitted!');
      setAuthor('');
      setQuote('');
    } catch (err) {
      setStatus('error');
      setMessage('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <div>
        <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          disabled={status === 'loading'}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="quote" className="block text-sm font-medium text-gray-700">Quote</label>
        <textarea
          id="quote"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          disabled={status === 'loading'}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-60"
        >
          {status === 'loading' ? 'Submitting...' : 'Submit Quote'}
        </button>
        {status === 'success' && <p className="text-sm text-green-600">{message}</p>}
        {status === 'error' && <p className="text-sm text-red-600">{message}</p>}
      </div>
    </form>
  );
}