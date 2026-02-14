'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { siteConfig } from '@/lib/site-data';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="container-wrap flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-lg">{siteConfig.name}</Link>
        <button className="md:hidden" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className="hidden gap-6 md:flex">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-700 hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="container-wrap flex flex-col gap-3 pb-4 md:hidden">
          {siteConfig.navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-700" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
