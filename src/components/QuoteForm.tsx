// src/components/QuoteForm.tsx
'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';

export default function QuoteForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
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
        body: JSON.stringify({ name, email, phone, details }),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus('error');
        const errorMsg = result.error?.details?._errors[0] || result.error?.name?._errors[0] || result.error?.email?._errors[0] || result.error?.phone?._errors[0] || result.error || 'An unknown validation error occurred.';
        setMessage(errorMsg);
        return;
      }

      setStatus('success');
      setMessage('Your quote request has been sent! We will contact you shortly.');
      setName('');
      setEmail('');
      setPhone('');
      setDetails('');

    } catch (err) {
      console.error('Submission Error:', err);
      setStatus('error');
      setMessage('Failed to connect to the server. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Full Name
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <User className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            id="name" name="name" type="text" required value={name}
            onChange={(e) => setName(e.target.value)} disabled={status === 'loading'}
            className="block w-full rounded-md border-neutral-300 pl-10 shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors"
            placeholder="John Doe"
          />
        </div>
      </div>

       <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email Address
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Mail className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            id="email" name="email" type="email" required value={email}
            onChange={(e) => setEmail(e.target.value)} disabled={status === 'loading'}
            className="block w-full rounded-md border-neutral-300 pl-10 shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

       <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
          Phone Number
        </label>
        <div className="relative">
           <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Phone className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            id="phone" name="phone" type="tel" value={phone}
            onChange={(e) => setPhone(e.target.value)} disabled={status === 'loading'}
            className="block w-full rounded-md border-neutral-300 pl-10 shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors"
            placeholder="Optional"
          />
        </div>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-neutral-700 mb-1">
          Issue Description
        </label>
         <div className="relative">
           <div className="pointer-events-none absolute inset-y-0 left-0 top-3 flex items-start pl-3">
            <MessageSquare className="h-5 w-5 text-neutral-400" />
          </div>
          <textarea
            id="details" name="details" rows={4} required value={details}
            onChange={(e) => setDetails(e.target.value)} disabled={status === 'loading'}
            className="block w-full rounded-md border-neutral-300 pl-10 shadow-sm focus:border-primary focus:ring-primary sm:text-sm transition-colors"
            placeholder="e.g., My iPhone 14 screen is cracked and the battery dies quickly."
          />
        </div>
      </div>

      <div>
        <button
          type="submit" disabled={status === 'loading'}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light disabled:bg-neutral-400 transition-all duration-300 transform hover:scale-105"
        >
          {status === 'loading' ? 'Submitting...' : 'Send Request'}
        </button>
      </div>

      <div className="h-6 text-sm text-center font-medium">
        {status === 'success' && <p className="text-secondary">{message}</p>}
        {status === 'error' && <p className="text-red-600">{message}</p>}
      </div>
    </form>
  );
}