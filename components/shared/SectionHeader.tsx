interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ title, subtitle, align = 'center' }: SectionHeaderProps) {
  const alignment = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-12 ${alignment}`}>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: 'clamp(32px, 5vw, 48px)',
          letterSpacing: '-1px',
          color: '#E8F0FE',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: '#8B9DC3',
            fontSize: '18px',
            marginTop: '12px',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
