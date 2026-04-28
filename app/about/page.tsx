import type { Metadata } from 'next';
import { ExternalLink, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About — Rohail Zubair',
  description: 'DevOps Engineer based in Islamabad, Pakistan. Specializing in GCP/Azure, CI/CD, and enterprise security compliance.',
};

const timeline = [
  {
    year: '2024 – Present',
    role: 'DevOps Engineer',
    company: 'QLU.ai',
    color: '#00D4FF',
  },
  {
    year: '2023',
    role: 'Web Intern',
    company: 'Askari Bank Limited (ITG)',
    color: '#7B61FF',
  },
  {
    year: '2020 – 2024',
    role: 'BS Computer Science',
    company: 'NUCES-FAST · CGPA: 3.54 · Dean\'s List',
    color: '#00E5A0',
  },
];

const certifications = [
  { name: 'AWS Academy Cloud Security Foundations', issuer: 'AWS', color: '#FFB800' },
  { name: 'AWS Academy Cloud Security Builder', issuer: 'AWS', color: '#FFB800' },
  { name: 'Linux: Shell Scripting for DevOps', issuer: 'Coursera', color: '#00D4FF' },
  { name: 'DevOps Essentials by IBM', issuer: 'Coursera', color: '#7B61FF' },
  { name: 'Foundations of Cybersecurity', issuer: 'Google', color: '#00E5A0' },
  { name: 'Foundations of Project Management', issuer: 'Google', color: '#00E5A0' },
];

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0A0E1A', paddingTop: '80px' }}>
      {/* Hero */}
      <div style={{ padding: '64px 24px 0', background: '#0F1629', borderBottom: '1px solid #1E2D4A' }}>
        <div className="max-w-6xl mx-auto pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder */}
            <div
              style={{
                width: '100%',
                maxWidth: '380px',
                height: '380px',
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #141E35, #1E2D4A)',
                border: '1px solid #1E2D4A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '80px',
                  color: '#00D4FF',
                  opacity: 0.3,
                }}
              >
                RZ
              </span>
            </div>

            {/* Intro */}
            <div>
              <h1
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  color: '#E8F0FE',
                  letterSpacing: '-1px',
                  marginBottom: '20px',
                }}
              >
                Hey, I&apos;m Rohail
              </h1>
              <p style={{ color: '#8B9DC3', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
                A DevOps Engineer based in Islamabad, Pakistan. I specialize in building cloud
                infrastructure that is reliable, secure, and cost-efficient at scale.
              </p>
              <p style={{ color: '#8B9DC3', fontSize: '16px', lineHeight: 1.8, marginBottom: '16px' }}>
                Currently at QLU.ai, I manage multi-cloud infrastructure (GCP + Azure) for 10+
                production products, maintaining 99.99% uptime while reducing cloud costs by 30%
                and shipping CI/CD improvements that cut deployment times by 40%.
              </p>
              <p style={{ color: '#8B9DC3', fontSize: '16px', lineHeight: 1.8, marginBottom: '28px' }}>
                I&apos;ve led SOC 2 Type II compliance, achieved CASA Tier 2 verification, and
                implemented zero-trust security architectures — all from scratch.
              </p>
              <a
                href="/resume.pdf"
                download="Rohail-Zubair-Resume.pdf"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  background: '#00D4FF',
                  color: '#0A0E1A',
                  borderRadius: '8px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '15px',
                  textDecoration: 'none',
                }}
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '64px 24px' }}>
        <div className="max-w-6xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {/* Timeline */}
          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '28px',
                color: '#E8F0FE',
                marginBottom: '32px',
              }}
            >
              Career &amp; Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timeline.map((item, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', gap: '24px', paddingBottom: i < timeline.length - 1 ? '32px' : '0' }}
                >
                  {/* Line */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      style={{
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        background: item.color,
                        boxShadow: `0 0 10px ${item.color}80`,
                        flexShrink: 0,
                        marginTop: '4px',
                      }}
                    />
                    {i < timeline.length - 1 && (
                      <div style={{ width: '1px', flex: 1, background: '#1E2D4A', marginTop: '8px' }} />
                    )}
                  </div>
                  {/* Content */}
                  <div>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '12px',
                        color: item.color,
                        fontWeight: 600,
                      }}
                    >
                      {item.year}
                    </span>
                    <h3 style={{ color: '#E8F0FE', fontWeight: 600, fontSize: '17px', margin: '4px 0 2px' }}>
                      {item.role}
                    </h3>
                    <p style={{ color: '#8B9DC3', fontSize: '14px' }}>{item.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: '28px',
                color: '#E8F0FE',
                marginBottom: '32px',
              }}
            >
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="card-hover"
                  style={{
                    background: '#0F1629',
                    border: '1px solid #1E2D4A',
                    borderRadius: '12px',
                    padding: '20px',
                    borderLeft: `3px solid ${cert.color}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: cert.color,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '8px',
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {cert.issuer}
                  </div>
                  <p style={{ color: '#E8F0FE', fontSize: '14px', fontWeight: 500, lineHeight: 1.4, marginBottom: '12px' }}>
                    {cert.name}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '3px 10px',
                      background: `${cert.color}15`,
                      border: `1px solid ${cert.color}40`,
                      borderRadius: '20px',
                      fontSize: '11px',
                      color: cert.color,
                    }}
                  >
                    <ExternalLink size={10} /> Verified
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
