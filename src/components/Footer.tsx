import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-neutral-100">
      <div className="container mx-auto flex flex-col gap-4 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-neutral-500">© 2025 ShopMobile Repairs. All Rights Reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/services">Services</Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/about">About</Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}