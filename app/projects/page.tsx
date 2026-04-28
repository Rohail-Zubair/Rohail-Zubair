import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { Briefcase, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects — Rohail Zubair',
  description: 'Professional and academic projects in DevOps, cloud infrastructure, and CI/CD.',
};

export default function ProjectsPage() {
  const professional = projects.filter((p) => p.type === 'professional');
  const academic = projects.filter((p) => p.type === 'academic');

  return (
    <div style={{ minHeight: '100vh', background: '#0A0E1A', paddingTop: '80px' }}>
      {/* Header */}
      <div style={{ padding: '64px 24px 48px', borderBottom: '1px solid #1E2D4A', background: '#0F1629' }}>
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
            Projects
          </h1>
          <p style={{ color: '#8B9DC3', fontSize: '18px' }}>
            Professional infrastructure work and academic projects.
          </p>
        </div>
      </div>

      <div style={{ padding: '48px 24px' }}>
        <div className="max-w-7xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {/* Professional */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={18} style={{ color: '#00D4FF' }} />
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#E8F0FE',
                }}
              >
                Professional Work
              </h2>
              <span
                style={{
                  padding: '2px 10px',
                  background: 'rgba(0,212,255,0.1)',
                  border: '1px solid rgba(0,212,255,0.3)',
                  borderRadius: '20px',
                  fontSize: '12px',
                  color: '#00D4FF',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                QLU.ai · 2024–Present
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {professional.map((project) => (
                <div
                  key={project.name}
                  className="card-hover"
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
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '15px',
                        color: '#E8F0FE',
                        lineHeight: 1.3,
                      }}
                    >
                      {project.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#8B9DC3',
                        fontFamily: "'JetBrains Mono', monospace",
                        flexShrink: 0,
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <p style={{ color: '#8B9DC3', fontSize: '14px', lineHeight: 1.6, flex: 1 }}>
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '2px 8px',
                          background: '#141E35',
                          border: '1px solid #1E2D4A',
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
                </div>
              ))}
            </div>
          </section>

          {/* Academic */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap size={18} style={{ color: '#7B61FF' }} />
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  color: '#E8F0FE',
                }}
              >
                Academic Projects
              </h2>
              <span
                style={{
                  padding: '2px 10px',
                  background: 'rgba(123,97,255,0.1)',
                  border: '1px solid rgba(123,97,255,0.3)',
                  borderRadius: '20px',
                  fontSize: '12px',
                  color: '#7B61FF',
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                NUCES-FAST · 2023
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {academic.map((project) => (
                <div
                  key={project.name}
                  className="card-hover"
                  style={{
                    background: '#0F1629',
                    border: '1px solid #1E2D4A',
                    borderLeft: '3px solid #7B61FF',
                    borderRadius: '12px',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#E8F0FE',
                        lineHeight: 1.3,
                      }}
                    >
                      {project.name}
                    </h3>
                    <span
                      style={{
                        fontSize: '11px',
                        color: '#8B9DC3',
                        fontFamily: "'JetBrains Mono', monospace",
                        flexShrink: 0,
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <p style={{ color: '#8B9DC3', fontSize: '14px', lineHeight: 1.6, flex: 1 }}>
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: '2px 8px',
                          background: '#141E35',
                          border: '1px solid #1E2D4A',
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
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
