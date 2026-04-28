'use client';

import { motion } from 'framer-motion';
import TerminalText from '@/components/shared/TerminalText';
import GlowButton from '@/components/shared/GlowButton';

const techIcons = [
  { name: 'GCP', color: '#4285F4' },
  { name: 'Azure', color: '#0078D4' },
  { name: 'K8s', color: '#326CE5' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Terraform', color: '#7B61FF' },
  { name: 'GH Actions', color: '#00D4FF' },
];

const floatingMetrics = [
  { value: '99.99%', label: 'Uptime', color: '#00E5A0', delay: 0 },
  { value: '40%', label: 'Faster CI/CD', color: '#00D4FF', delay: 1.5 },
  { value: '30%', label: 'Cost Reduction', color: '#7B61FF', delay: 3 },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center grid-bg gradient-mesh overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(0, 229, 160, 0.1)',
                border: '1px solid rgba(0, 229, 160, 0.3)',
              }}
            >
              <span className="pulse-dot" />
              <span style={{ color: '#00E5A0', fontSize: '14px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
                Available for Projects
              </span>
            </motion.div>

            <motion.h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(44px, 7vw, 72px)',
                letterSpacing: '-2px',
                lineHeight: 1.1,
                color: '#E8F0FE',
                marginBottom: '24px',
              }}
            >
              <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} style={{ display: 'block' }}>
                I Build Infrastructure
              </motion.span>
              <motion.span initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} style={{ display: 'block' }}>
                That
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="gradient-text-cyan"
                style={{ display: 'block' }}
              >
                Never Sleeps.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ color: '#8B9DC3', fontSize: '18px', lineHeight: 1.7, marginBottom: '36px', maxWidth: '520px' }}
            >
              DevOps Engineer specializing in multi-cloud architecture, CI/CD automation,
              and enterprise security at scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <GlowButton href="/case-studies" variant="primary">
                → View Case Studies
              </GlowButton>
              <a
                href="/resume.pdf"
                download="Rohail-Zubair-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300"
                style={{
                  border: '1px solid #1E2D4A',
                  color: '#E8F0FE',
                  fontFamily: "'Space Grotesk', sans-serif",
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#00D4FF';
                  el.style.color = '#00D4FF';
                  el.style.boxShadow = '0 0 15px rgba(0,212,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = '#1E2D4A';
                  el.style.color = '#E8F0FE';
                  el.style.boxShadow = 'none';
                }}
              >
                ↓ Download Resume
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
              <p style={{ color: '#8B9DC3', fontSize: '13px', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Currently working with:
              </p>
              <div className="flex flex-wrap gap-2">
                {techIcons.map((t) => (
                  <span
                    key={t.name}
                    style={{
                      padding: '4px 12px',
                      background: 'rgba(30,45,74,0.6)',
                      border: '1px solid #1E2D4A',
                      borderRadius: '20px',
                      color: t.color,
                      fontSize: '13px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 600,
                    }}
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Terminal + floating metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            {/* Terminal window */}
            <div
              className="relative z-10 rounded-xl overflow-hidden"
              style={{
                background: '#0F1629',
                border: '1px solid #1E2D4A',
                boxShadow: '0 0 40px rgba(0,212,255,0.1), 0 24px 48px rgba(0,0,0,0.5)',
              }}
            >
              {/* Title bar */}
              <div
                style={{
                  padding: '12px 16px',
                  background: '#141E35',
                  borderBottom: '1px solid #1E2D4A',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FF4560' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#FFB800' }} />
                <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#00E5A0' }} />
                <span style={{ color: '#8B9DC3', fontSize: '13px', fontFamily: "'JetBrains Mono', monospace", marginLeft: '8px' }}>
                  rohail@prod-cluster ~
                </span>
              </div>
              <div style={{ padding: '20px 20px', minHeight: '160px' }}>
                <TerminalText />
              </div>
            </div>

            {/* Floating metric cards */}
            {floatingMetrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                style={{
                  position: 'absolute',
                  background: 'rgba(15, 22, 41, 0.9)',
                  backdropFilter: 'blur(12px)',
                  border: `1px solid ${m.color}40`,
                  borderRadius: '12px',
                  padding: '12px 16px',
                  boxShadow: `0 0 20px ${m.color}20`,
                  animation: `float ${4 + i}s ease-in-out ${m.delay}s infinite`,
                  ...(i === 0 ? { top: '-20px', right: '-10px' } :
                     i === 1 ? { bottom: '60px', left: '-20px' } :
                               { bottom: '-20px', right: '40px' }),
                }}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 800, fontSize: '20px', color: m.color, textShadow: `0 0 15px ${m.color}80` }}>
                  {m.value}
                </div>
                <div style={{ color: '#8B9DC3', fontSize: '12px', marginTop: '2px' }}>{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
