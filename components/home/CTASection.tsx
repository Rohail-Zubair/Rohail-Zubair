'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/shared/SocialIcons';

export default function CTASection() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`
    );
    window.location.href = `mailto:rohailzubair263@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section style={{ padding: '96px 24px', background: '#0A0E1A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: 'clamp(28px, 4vw, 42px)',
                color: '#E8F0FE',
                letterSpacing: '-1px',
                marginBottom: '20px',
                lineHeight: 1.2,
              }}
            >
              Ready to scale your{' '}
              <span className="gradient-text-cyan">infrastructure?</span>
            </h2>
            <p style={{ color: '#8B9DC3', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px', maxWidth: '440px' }}>
              I help startups and enterprises build DevOps pipelines that reduce costs,
              improve reliability, and ship faster.
            </p>

            <div className="flex items-center gap-4">
              {[
                { icon: <LinkedinIcon size={20} />, href: 'https://linkedin.com/in/rohail-zubair', label: 'LinkedIn' },
                { icon: <GithubIcon size={20} />, href: 'https://github.com/Rohail-Zubair', label: 'GitHub' },
                { icon: <Mail size={20} />, href: 'mailto:rohailzubair263@gmail.com', label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    background: '#0F1629',
                    border: '1px solid #1E2D4A',
                    borderRadius: '10px',
                    color: '#8B9DC3',
                    transition: 'all 0.2s',
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
                    el.style.color = '#8B9DC3';
                    el.style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </a>
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { name: 'name', placeholder: 'Your name', type: 'text' },
                { name: 'email', placeholder: 'Email address', type: 'email' },
                { name: 'company', placeholder: 'Company (optional)', type: 'text' },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  required={field.name !== 'company'}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  style={{
                    background: '#141E35',
                    border: '1px solid #1E2D4A',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: '#E8F0FE',
                    fontSize: '15px',
                    outline: 'none',
                    fontFamily: "'Space Grotesk', sans-serif",
                    width: '100%',
                  }}
                />
              ))}
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  background: '#141E35',
                  border: '1px solid #1E2D4A',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  color: '#E8F0FE',
                  fontSize: '15px',
                  outline: 'none',
                  fontFamily: "'Space Grotesk', sans-serif",
                  resize: 'vertical',
                  width: '100%',
                }}
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
                  fontWeight: 600,
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
    </section>
  );
}
