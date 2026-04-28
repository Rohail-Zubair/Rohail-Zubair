'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/shared/SocialIcons';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0A0E1A',
        borderTop: '1px solid #1E2D4A',
        padding: '60px 24px 32px',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '24px',
                color: '#00D4FF',
                marginBottom: '8px',
              }}
            >
              RZ
            </div>
            <p style={{ color: '#8B9DC3', fontSize: '15px', maxWidth: '280px' }}>
              Building infrastructure that scales.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://github.com/Rohail-Zubair"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#8B9DC3', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4FF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8B9DC3')}
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rohail-zubair"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#8B9DC3', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4FF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8B9DC3')}
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:rohailzubair263@gmail.com"
                style={{ color: '#8B9DC3', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4FF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8B9DC3')}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Work */}
          <div>
            <h4 style={{ color: '#E8F0FE', fontWeight: 600, marginBottom: '16px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Work</h4>
            {[{ label: 'Case Studies', href: '/case-studies' }, { label: 'Projects', href: '/projects' }].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: '#8B9DC3', marginBottom: '10px', fontSize: '15px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4FF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8B9DC3')}
              >{l.label}</Link>
            ))}
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ color: '#E8F0FE', fontWeight: 600, marginBottom: '16px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Pages</h4>
            {[{ label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: 'block', color: '#8B9DC3', marginBottom: '10px', fontSize: '15px' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00D4FF')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#8B9DC3')}
              >{l.label}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1E2D4A', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <p style={{ color: '#8B9DC3', fontSize: '14px' }}>
            © 2025 Rohail Zubair · Islamabad, Pakistan · Built with Next.js + Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
