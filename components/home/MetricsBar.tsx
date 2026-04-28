import AnimatedCounter from '@/components/shared/AnimatedCounter';

const metrics = [
  { value: '99.99%', label: 'Uptime SLA Maintained' },
  { value: '40%', label: 'Faster CI/CD' },
  { value: '50%', label: 'Query Speed Improvement' },
  { value: '30%', label: 'Cloud Cost Reduction' },
  { value: '10+', label: 'Production Products Managed' },
];

export default function MetricsBar() {
  return (
    <section
      style={{
        background: '#0F1629',
        borderTop: '1px solid #1E2D4A',
        borderBottom: '1px solid #1E2D4A',
        padding: '48px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="text-center"
              style={{
                paddingRight: i < metrics.length - 1 ? '0' : '0',
                borderRight: i < metrics.length - 1 ? '1px solid #1E2D4A' : 'none',
              }}
            >
              <div style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '8px' }}>
                <AnimatedCounter value={m.value} />
              </div>
              <div style={{ color: '#8B9DC3', fontSize: '13px', lineHeight: 1.4 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
