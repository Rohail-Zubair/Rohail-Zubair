'use client';

import { useEffect, useState } from 'react';

const commands = [
  '$ kubectl get pods --all-namespaces',
  '$ terraform apply -auto-approve',
  '$ docker build --cache-from gcr.io/app:latest .',
  '$ gcloud container clusters get-credentials prod-cluster',
  '$ helm upgrade --install app ./charts/app',
  '$ kubectl rollout status deployment/api',
];

export default function TerminalText() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [output, setOutput] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing'>('typing');

  useEffect(() => {
    if (phase === 'typing') {
      if (charIndex < commands[cmdIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentLine((prev) => prev + commands[cmdIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setPhase('pausing');
      }
    } else {
      const timeout = setTimeout(() => {
        setOutput((prev) => {
          const next = [...prev, currentLine];
          return next.slice(-4);
        });
        setCurrentLine('');
        setCharIndex(0);
        setCmdIndex((prev) => (prev + 1) % commands.length);
        setPhase('typing');
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [phase, charIndex, cmdIndex, currentLine]);

  return (
    <div className="terminal-font text-sm leading-6">
      {output.map((line, i) => (
        <div key={i} className="text-[#8B9DC3] opacity-60">
          {line}
        </div>
      ))}
      <div className="text-[#00D4FF]">
        {currentLine}
        <span className="inline-block w-2 h-4 bg-[#00D4FF] ml-0.5 animate-pulse align-middle" />
      </div>
    </div>
  );
}
