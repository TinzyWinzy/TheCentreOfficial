"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/data/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/shops", label: "Shops" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-brand-red tracking-tight">
          {SITE.name}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            className="text-sm font-semibold bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Call Us
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-4 pt-2 space-y-2">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-600 hover:text-brand-red py-1"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE.phone}`}
            className="block text-center text-sm font-semibold bg-brand-red text-white px-4 py-2 rounded-lg mt-2"
          >
            Call {SITE.phone}
          </a>
        </div>
      )}
    </header>
  );
}
