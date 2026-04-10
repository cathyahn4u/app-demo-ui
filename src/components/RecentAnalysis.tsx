import { cn } from "@/lib/utils";

interface AnalysisEntry {
  timestamp: string;
  dominantEmotion: string;
  painLevel: number;
  trend: 'up' | 'down' | 'stable';
}

interface RecentAnalysisProps {
  entries: AnalysisEntry[];
}

export const RecentAnalysis = ({ entries }: RecentAnalysisProps) => {
  const maxPain = Math.max(...entries.map(e => e.painLevel), 1);
  const points = entries.map((e, i) => {
    const x = (i / (entries.length - 1)) * 200;
    const y = 40 - (e.painLevel / maxPain) * 32;
    return { x, y, entry: e };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ');
  const areaPath = `${linePath} L${points[points.length - 1].x},44 L${points[0].x},44 Z`;

  return (
    <div className="space-y-1.5">
      <svg viewBox="-4 -2 208 52" className="w-full h-16">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(96,165,250,0.3)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0)" />
          </linearGradient>
        </defs>
        {[0, 1, 2].map(i => (
          <line key={i} x1="0" y1={i * 20 + 4} x2="200" y2={i * 20 + 4}
            stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
        ))}
        <path d={areaPath} fill="url(#areaGrad)" />
        <path d={linePath} fill="none" stroke="rgba(96,165,250,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="3" fill="#60a5fa" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
        ))}
      </svg>
      <div className="flex justify-between px-1">
        {entries.map((e, i) => (
          <span key={i} className="text-[11px] text-white/40">{e.timestamp}</span>
        ))}
      </div>
    </div>
  );
};
