import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudies, getCaseStudyBySlug } from '@/data/caseStudies';
import ArchitectureDiagram from '@/components/case-studies/ArchitectureDiagram';
import MetricsGrid from '@/components/case-studies/MetricsGrid';
import TechBadges from '@/components/case-studies/TechBadges';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Rohail Zubair`,
    description: cs.problem.slice(0, 160),
  };
}

const categoryColors: Record<string, string> = {
  'CI/CD': '#00D4FF',
  'Database': '#00E5A0',
  'Cloud Infra': '#7B61FF',
  'Security': '#FFB800',
  'Cost Optimization': '#FF4560',
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const catColor = categoryColors[cs.category] ?? '#00D4FF';

  return (
    <div style={{ minHeight: '100vh', background: '#0A0E1A', paddingTop: '80px' }}>
      {/* Hero */}
      <div
        style={{
          padding: '64px 24px 48px',
          borderBottom: '1px solid #1E2D4A',
          background: '#0F1629',
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#8B9DC3', marginBottom: '24px', textDecoration: 'none', fontSize: '14px' }}
          >
            <ArrowLeft size={14} /> Back to Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              style={{
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 600,
                background: `${catColor}15`,
                border: `1px solid ${catColor}40`,
                color: catColor,
              }}
            >
              {cs.category}
            </span>
            <span style={{ color: '#8B9DC3', fontSize: '13px' }}>{cs.client}</span>
            <span style={{ color: '#8B9DC3', fontSize: '13px' }}>· {cs.duration}</span>
          </div>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 40px)',
              letterSpacing: '-1px',
              color: '#E8F0FE',
              marginBottom: '16px',
              lineHeight: 1.2,
            }}
          >
            {cs.title}
          </h1>

          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: 'clamp(28px, 5vw, 48px)',
              color: '#00D4FF',
              textShadow: '0 0 30px rgba(0,212,255,0.5)',
              marginBottom: '24px',
            }}
          >
            {cs.heroMetric}
          </div>

          <TechBadges tags={cs.tags} />
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '48px 24px' }}>
        <div className="max-w-4xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {/* Metrics */}
          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '22px',
                color: '#E8F0FE',
                marginBottom: '20px',
              }}
            >
              Key Metrics
            </h2>
            <MetricsGrid metrics={cs.metrics} />
          </section>

          {/* Problem */}
          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '22px',
                color: '#E8F0FE',
                marginBottom: '16px',
              }}
            >
              The Problem
            </h2>
            <p
              style={{
                color: '#8B9DC3',
                fontSize: '17px',
                lineHeight: 1.8,
                background: '#0F1629',
                border: '1px solid #1E2D4A',
                borderRadius: '12px',
                padding: '24px',
                borderLeft: `3px solid ${catColor}`,
              }}
            >
              {cs.problem}
            </p>
          </section>

          {/* Solution */}
          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '22px',
                color: '#E8F0FE',
                marginBottom: '16px',
              }}
            >
              Solution Approach
            </h2>
            <div
              style={{
                background: '#0F1629',
                border: '1px solid #1E2D4A',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {cs.solutionSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} style={{ color: '#00E5A0', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: '#8B9DC3', fontSize: '16px', lineHeight: 1.6 }}>{step}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '22px',
                color: '#E8F0FE',
                marginBottom: '16px',
              }}
            >
              Architecture Diagram
            </h2>
            <ArchitectureDiagram diagram={cs.architectureDiagram} />
          </section>

          {/* Results */}
          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '22px',
                color: '#E8F0FE',
                marginBottom: '16px',
              }}
            >
              Results
            </h2>
            <p
              style={{
                color: '#E8F0FE',
                fontSize: '17px',
                lineHeight: 1.8,
                background: 'rgba(0, 229, 160, 0.05)',
                border: '1px solid rgba(0, 229, 160, 0.2)',
                borderRadius: '12px',
                padding: '24px',
                borderLeft: '3px solid #00E5A0',
              }}
            >
              {cs.results}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
