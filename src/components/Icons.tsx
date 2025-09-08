// src/components/Icons.tsx
import React from 'react';

export const Phone: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 7c0 6 4.5 11.5 10.5 11.5 1.9 0 2.5-.7 3.4-1.6l1.6-1.6c.8-.8 1.6-1.2 2.8-.9 1 .3 1.9.5 2.8.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2.5v4.75a2 2 0 0 1-2 2H16" />
  </svg>
);

export const Screen: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <rect x="3" y="4" width="18" height="14" rx="2" ry="2" />
    <path d="M8 20h8" />
  </svg>
);

export const Battery: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
    <rect x="2" y="7" width="18" height="10" rx="2" ry="2" />
    <line x1="22" y1="11" x2="22" y2="13" />
  </svg>
);

export default Phone;