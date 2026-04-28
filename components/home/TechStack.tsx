'use client';

import SectionHeader from '@/components/shared/SectionHeader';

const techCategories = [
  {
    name: 'Cloud Platforms',
    items: ['GCP', 'Azure'],
    color: '#4285F4',
  },
  {
    name: 'Containers',
    items: ['Docker', 'Kubernetes', 'GKE'],
    color: '#2496ED',
  },
  {
    name: 'CI/CD',
    items: ['GitHub Actions', 'Jenkins', 'Cloud Build'],
    color: '#00D4FF',
  },
  {
    name: 'Infrastructure as Code',
    items: ['Terraform'],
    color: '#7B61FF',
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'Redis', 'Elasticsearch', 'CrateDB', 'QDrant'],
    color: '#00E5A0',
  },
  {
    name: 'Security',
    items: ['Twingate', 'Cloud Armor', 'Sprinto (SOC2)'],
    color: '#FFB800',
  },
  {
    name: 'Monitoring',
    items: ['Cloud Monitoring', 'Grafana', 'PagerDuty'],
    color: '#FF4560',
  },
  {
    name: 'Messaging',
    items: ['MQTT (Mosquitto)'],
    color: '#8B9DC3',
  },
];

export default function TechStack() {
  return (
    <section style={{ padding: '96px 24px', background: '#0F1629' }}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Tools I Ship With" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {techCategories.map((cat) => (
            <div
              key={cat.name}
              style={{
                background: '#141E35',
                border: '1px solid #1E2D4A',
                borderRadius: '12px',
                padding: '20px',
                transition: 'border-color 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#1E2D4A';
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '13px',
                  color: cat.color,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '12px',
                }}
              >
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: '4px 10px',
                      background: 'rgba(10,14,26,0.6)',
                      border: '1px solid #1E2D4A',
                      borderRadius: '6px',
                      color: '#E8F0FE',
                      fontSize: '13px',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
