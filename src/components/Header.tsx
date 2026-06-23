"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/data/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/#shops", label: "Shops" },
  { href: "/#diaspora", label: "Diaspora Delivery" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#amenities", label: "Amenities" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    return pathname === base || (base !== "/" && pathname.startsWith(base));
  };

  const closeNav = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold text-brand-red tracking-tight shrink-0">
          {SITE.name}
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <nav className="flex items-center gap-1">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-brand-red bg-brand-red-light"
                    : "text-gray-600 hover:text-brand-red hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 ml-3 pl-3 border-l border-gray-200">
            <div className="flex items-center gap-1.5 text-xs text-gray-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
              </span>
              <span className="hidden lg:inline">{SITE.hours}</span>
            </div>
            <a
              href={`tel:${SITE.phone}`}
              className="text-sm font-semibold bg-brand-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center justify-center w-10 h-10 bg-brand-red text-white rounded-full hover:bg-red-700 transition-colors"
            aria-label="Call us"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <button
            className="p-2.5 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
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
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-6 pt-2 space-y-1 shadow-lg">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeNav}
              className="block text-sm font-medium text-gray-600 hover:text-brand-red hover:bg-gray-50 px-3 py-2.5 rounded-lg transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </Link>
          ))}
          <hr className="my-2 border-gray-100" />
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
            </span>
            {SITE.hours}
          </div>
          <a
            href={`tel:${SITE.phone}`}
            className="block text-center text-sm font-semibold bg-brand-red text-white px-4 py-3 rounded-lg mt-2 min-h-[44px] flex items-center justify-center"
            onClick={closeNav}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {SITE.phone}
          </a>
        </div>
      )}
    </header>
  );
}
