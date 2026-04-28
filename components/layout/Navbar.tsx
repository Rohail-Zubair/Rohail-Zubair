'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '/' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(10, 14, 26, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(30, 45, 74, 0.6)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '22px',
            color: '#00D4FF',
            letterSpacing: '-0.5px',
            textShadow: '0 0 15px rgba(0,212,255,0.4)',
          }}
        >
          RZ
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: pathname === link.href ? '#00D4FF' : '#8B9DC3',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: '15px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#E8F0FE')}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === link.href ? '#00D4FF' : '#8B9DC3')}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
          style={{
            background: '#00D4FF',
            color: '#0A0E1A',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,212,255,0.5)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          Hire Me →
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#8B9DC3]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          style={{
            background: '#0F1629',
            borderBottom: '1px solid #1E2D4A',
            padding: '20px 24px',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: pathname === link.href ? '#00D4FF' : '#8B9DC3',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                borderBottom: '1px solid #1E2D4A',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: 'inline-flex',
              marginTop: '16px',
              padding: '10px 20px',
              background: '#00D4FF',
              color: '#0A0E1A',
              borderRadius: '8px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
            }}
          >
            Hire Me →
          </Link>
        </div>
      )}
    </nav>
  );
}
