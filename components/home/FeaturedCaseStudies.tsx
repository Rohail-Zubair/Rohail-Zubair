import Link from 'next/link';
import { getFeaturedCaseStudies } from '@/data/caseStudies';
import SectionHeader from '@/components/shared/SectionHeader';
import { ArrowRight } from 'lucide-react';

const categoryColors: Record<string, string> = {
  'CI/CD': '#00D4FF',
  'Database': '#00E5A0',
  'Cloud Infra': '#7B61FF',
  'Security': '#FFB800',
  'Cost Optimization': '#FF4560',
};

export default function FeaturedCaseStudies() {
  const featured = getFeaturedCaseStudies();

  return (
    <section style={{ padding: '96px 24px', background: '#0A0E1A' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Real Problems. Measurable Results."
          subtitle="Every case study is backed by production data."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((cs) => {
            const catColor = categoryColors[cs.category] ?? '#00D4FF';
            return (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="card-hover block rounded-xl p-6"
                style={{
                  background: '#0F1629',
                  border: '1px solid #1E2D4A',
                  textDecoration: 'none',
                }}
              >
                {/* Category badge */}
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
                    marginBottom: '14px',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {cs.category}
                </span>

                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '18px',
                    color: '#E8F0FE',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  {cs.title}
                </h3>

                <p style={{ color: '#8B9DC3', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
                  {cs.problem.slice(0, 120)}...
                </p>

                {/* Metric pills */}
                <div className="flex flex-wrap gap-2 mb-16">
                  {cs.metrics.slice(0, 3).map((m) => (
                    <span
                      key={m.label}
                      style={{
                        padding: '3px 10px',
                        background: 'rgba(0,212,255,0.08)',
                        border: '1px solid rgba(0,212,255,0.2)',
                        borderRadius: '20px',
                        fontSize: '12px',
                        color: '#00D4FF',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                      }}
                    >
                      {m.value} {m.label}
                    </span>
                  ))}
                </div>

                {/* Tags */}
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

                <div className="flex items-center gap-1" style={{ color: '#00D4FF', fontSize: '14px', fontWeight: 600 }}>
                  Read Case Study <ArrowRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/case-studies"
            style={{
              color: '#00D4FF',
              fontWeight: 600,
              borderBottom: '1px solid rgba(0,212,255,0.3)',
              paddingBottom: '2px',
              textDecoration: 'none',
            }}
          >
            View all 7 case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
