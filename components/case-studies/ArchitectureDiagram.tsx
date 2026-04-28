'use client';

import { useEffect, useRef } from 'react';

interface ArchitectureDiagramProps {
  diagram: string;
}

export default function ArchitectureDiagram({ diagram }: ArchitectureDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = async () => {
      if (!ref.current) return;
      try {
        const mermaid = (await import('mermaid')).default;
        mermaid.initialize({
          startOnLoad: false,
          theme: 'dark',
          themeVariables: {
            background: '#0F1629',
            primaryColor: '#141E35',
            primaryTextColor: '#E8F0FE',
            primaryBorderColor: '#1E2D4A',
            lineColor: '#00D4FF',
            secondaryColor: '#141E35',
            tertiaryColor: '#0A0E1A',
            edgeLabelBackground: '#141E35',
            clusterBkg: '#141E35',
            clusterBorder: '#1E2D4A',
            titleColor: '#E8F0FE',
            nodeTextColor: '#E8F0FE',
          },
          flowchart: { curve: 'basis' },
        });

        const id = `mermaid-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, diagram);
        if (ref.current) {
          ref.current.innerHTML = svg;
          const svgEl = ref.current.querySelector('svg');
          if (svgEl) {
            svgEl.style.maxWidth = '100%';
            svgEl.style.height = 'auto';
          }
        }
      } catch (err) {
        console.error('Mermaid render error:', err);
        if (ref.current) {
          ref.current.innerHTML = `<pre style="color:#8B9DC3;font-size:12px;overflow:auto;padding:16px">${diagram}</pre>`;
        }
      }
    };
    render();
  }, [diagram]);

  return (
    <div
      style={{
        background: '#0F1629',
        border: '1px solid #1E2D4A',
        borderRadius: '12px',
        padding: '24px',
        overflowX: 'auto',
      }}
    >
      <div ref={ref} />
    </div>
  );
}
