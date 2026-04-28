'use client';

import { ExternalLink } from 'lucide-react';

export default function GithubLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 24px',
        background: '#0F1629',
        border: '1px solid #1E2D4A',
        borderRadius: '10px',
        color: '#00D4FF',
        textDecoration: 'none',
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        fontSize: '15px',
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '#00D4FF';
        el.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = '#1E2D4A';
        el.style.boxShadow = 'none';
      }}
    >
      <ExternalLink size={16} />
      View on GitHub
    </a>
  );
}
