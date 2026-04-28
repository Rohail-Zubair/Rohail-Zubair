'use client';

import { useState } from 'react';
import { caseStudies } from '@/data/caseStudies';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';

const allCategories = ['All', 'CI/CD', 'Cloud Infra', 'Database', 'Security', 'Cost Optimization'];

export default function CaseStudiesPage() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? caseStudies : caseStudies.filter((cs) => cs.category === active);

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
        <div className="max-w-7xl mx-auto">
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 6vw, 56px)',
              letterSpacing: '-2px',
              color: '#E8F0FE',
              marginBottom: '12px',
            }}
          >
            Case Studies
          </h1>
          <p style={{ color: '#8B9DC3', fontSize: '18px' }}>
            Production-proven solutions with measurable impact
          </p>
        </div>
      </div>

      <div style={{ padding: '48px 24px' }}>
        <div className="max-w-7xl mx-auto">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  border: `1px solid ${active === cat ? '#00D4FF' : '#1E2D4A'}`,
                  background: active === cat ? 'rgba(0,212,255,0.1)' : 'transparent',
                  color: active === cat ? '#00D4FF' : '#8B9DC3',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((cs) => (
              <CaseStudyCard key={cs.slug} cs={cs} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
