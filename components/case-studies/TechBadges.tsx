interface TechBadgesProps {
  tags: string[];
}

export default function TechBadges({ tags }: TechBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          style={{
            padding: '5px 12px',
            background: '#141E35',
            border: '1px solid #1E2D4A',
            borderRadius: '6px',
            fontSize: '13px',
            color: '#8B9DC3',
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
