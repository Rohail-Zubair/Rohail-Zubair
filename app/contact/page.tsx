'use client';

import { useState } from 'react';
import { Mail, MapPin, Building2, RefreshCw, Shield } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/shared/SocialIcons';

const services = [
  {
    icon: <Building2 size={24} />,
    title: 'Infrastructure Setup',
    desc: 'Multi-cloud IaC, Kubernetes, GCP/Azure',
    color: '#00D4FF',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'CI/CD Consulting',
    desc: 'Pipeline audit, optimization, automation',
    color: '#7B61FF',
  },
  {
    icon: <Shield size={24} />,
    title: 'Security & Compliance',
    desc: 'SOC 2, zero-trust, cloud hardening',
    color: '#00E5A0',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nBudget: ${form.budget}\nProject Type: ${form.projectType}\n\n${form.message}`
    );
    window.location.href = `mailto:rohailzubair263@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputStyle = {
    background: '#141E35',
    border: '1px solid #1E2D4A',
    borderRadius: '8px',
    padding: '12px 16px',
    color: '#E8F0FE',
    fontSize: '15px',
    outline: 'none',
    fontFamily: "'Space Grotesk', sans-serif",
    width: '100%',
  };

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
            Let&apos;s Work Together
          </h1>
          <p style={{ color: '#8B9DC3', fontSize: '18px' }}>
            Available for freelance engagements, consulting, and full-time remote roles.
          </p>
        </div>
      </div>

      <div style={{ padding: '48px 24px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — Contact info */}
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {[
                  { icon: <Mail size={18} />, text: 'rohailzubair263@gmail.com', href: 'mailto:rohailzubair263@gmail.com' },
                  { icon: <LinkedinIcon size={18} />, text: 'linkedin.com/in/rohail-zubair', href: 'https://linkedin.com/in/rohail-zubair' },
                  { icon: <GithubIcon size={18} />, text: 'github.com/Rohail-Zubair', href: 'https://github.com/Rohail-Zubair' },
                  { icon: <MapPin size={18} />, text: 'Islamabad, Pakistan (Open to Remote)', href: null },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 18px',
                      background: '#0F1629',
                      border: '1px solid #1E2D4A',
                      borderRadius: '10px',
                    }}
                  >
                    <span style={{ color: '#00D4FF' }}>{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        style={{ color: '#E8F0FE', textDecoration: 'none', fontSize: '15px' }}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span style={{ color: '#E8F0FE', fontSize: '15px' }}>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Status badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  background: 'rgba(0, 229, 160, 0.08)',
                  border: '1px solid rgba(0, 229, 160, 0.3)',
                  borderRadius: '30px',
                  marginBottom: '40px',
                }}
              >
                <span className="pulse-dot" />
                <span style={{ color: '#00E5A0', fontWeight: 500, fontSize: '14px' }}>
                  Currently Available for Projects
                </span>
              </div>

              {/* Services */}
              <h3 style={{ color: '#E8F0FE', fontWeight: 600, fontSize: '18px', marginBottom: '16px' }}>
                Services I Offer
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {services.map((s) => (
                  <div
                    key={s.title}
                    style={{
                      padding: '16px 20px',
                      background: '#0F1629',
                      border: '1px solid #1E2D4A',
                      borderRadius: '10px',
                      borderLeft: `3px solid ${s.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                    }}
                  >
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <div>
                      <div style={{ color: '#E8F0FE', fontWeight: 600, fontSize: '15px' }}>{s.title}</div>
                      <div style={{ color: '#8B9DC3', fontSize: '13px' }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div
              style={{
                background: '#0F1629',
                border: '1px solid #1E2D4A',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <h3 style={{ color: '#E8F0FE', fontWeight: 600, fontSize: '20px', marginBottom: '24px' }}>
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Company (optional)"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  style={inputStyle}
                />
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  style={{ ...inputStyle, appearance: 'none' }}
                  aria-label="Budget range"
                >
                  <option value="">Budget Range</option>
                  <option>Under $1k</option>
                  <option>$1k – $5k</option>
                  <option>$5k – $15k</option>
                  <option>$15k+</option>
                  <option>Monthly Retainer</option>
                </select>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  style={{ ...inputStyle, appearance: 'none' }}
                  aria-label="Project type"
                >
                  <option value="">Project Type</option>
                  <option>Infrastructure Setup</option>
                  <option>CI/CD Consulting</option>
                  <option>Security & Compliance</option>
                  <option>Cloud Cost Optimization</option>
                  <option>Full-time Role</option>
                  <option>Other</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#00D4FF',
                    color: '#0A0E1A',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '14px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,212,255,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
