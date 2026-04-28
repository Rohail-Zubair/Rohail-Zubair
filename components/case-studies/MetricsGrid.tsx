'use client';

import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { CaseStudyMetric } from '@/data/caseStudies';

interface MetricsGridProps {
  metrics: CaseStudyMetric[];
}

export default function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          style={{
            background: '#0F1629',
            border: '1px solid #1E2D4A',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            transition: 'border-color 0.3s',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.4)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = '#1E2D4A')}
        >
          <div style={{ fontSize: 'clamp(20px, 3vw, 32px)', marginBottom: '8px' }}>
            <AnimatedCounter value={m.value} />
          </div>
          <div style={{ color: '#8B9DC3', fontSize: '13px', lineHeight: 1.4 }}>{m.label}</div>
        </div>
      ))}
    </div>
  );
}
