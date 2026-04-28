import Link from 'next/link';
import { CaseStudy } from '@/data/caseStudies';
import { ArrowRight } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'CI/CD': '#00D4FF',
  'Database': '#00E5A0',
  'Cloud Infra': '#7B61FF',
  'Security': '#FFB800',
  'Cost Optimization': '#FF4560',
};

interface CaseStudyCardProps {
  cs: CaseStudy;
}

export default function CaseStudyCard({ cs }: CaseStudyCardProps) {
  const catColor = categoryColors[cs.category] ?? '#00D4FF';

  return (
    <Link
      href={`/case-studies/${cs.slug}`}
      className="card-hover block rounded-xl p-6"
      style={{
        background: '#0F1629',
        border: '1px solid #1E2D4A',
        textDecoration: 'none',
      }}
    >
      <span
        style={{
          display: 'inline-block',
          padding: '3px 10px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 600,
          background: `${catColor}15`,
          border: `1px solid ${catColor}40`,
          color: catColor,
          marginBottom: '12px',
        }}
      >
        {cs.category}
      </span>

      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 800,
          fontSize: '28px',
          color: '#00D4FF',
          textShadow: '0 0 15px rgba(0,212,255,0.5)',
          marginBottom: '8px',
        }}
      >
        {cs.heroMetric}
      </div>

      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '16px',
          color: '#E8F0FE',
          marginBottom: '10px',
          lineHeight: 1.3,
        }}
      >
        {cs.title}
      </h3>

      <p style={{ color: '#8B9DC3', fontSize: '13px', marginBottom: '14px', lineHeight: 1.5 }}>
        {cs.problem.slice(0, 100)}...
      </p>

      <div className="flex flex-wrap gap-1 mb-4">
        {cs.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            style={{
              padding: '2px 8px',
              background: '#141E35',
              borderRadius: '4px',
              fontSize: '11px',
              color: '#8B9DC3',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1" style={{ color: '#00D4FF', fontSize: '13px', fontWeight: 600 }}>
        Read Case Study <ArrowRight size={13} />
      </div>
    </Link>
  );
}
