import Link from 'next/link';
import { ReactNode } from 'react';

interface GlowButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  className?: string;
}

export default function GlowButton({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: GlowButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 cursor-pointer';
  const primary = 'bg-[#00D4FF] text-[#0A0E1A] hover:bg-[#00BFED] hover:shadow-[0_0_20px_rgba(0,212,255,0.5)]';
  const secondary = 'border border-[#1E2D4A] text-[#E8F0FE] hover:border-[#00D4FF] hover:text-[#00D4FF] hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]';
  const styles = `${base} ${variant === 'primary' ? primary : secondary} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
