import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface AnalysisEntry {
  timestamp: string;
  dominantEmotion: string;
  painLevel: number;
  trend: 'up' | 'down' | 'stable';
}

interface RecentAnalysisProps {
  entries: AnalysisEntry[];
}

const emotionEmojis: Record<string, string> = {
  Happy: '😸', Playful: '🐾', Calm: '😌', Sad: '😿', Anxious: '😰',
};

const trendConfig = {
  up: { icon: TrendingUp, color: 'hsl(var(--pain-high))' },
  down: { icon: TrendingDown, color: 'hsl(var(--pain-low))' },
  stable: { icon: Minus, color: 'rgba(255,255,255,0.5)' },
};

export const RecentAnalysis = ({ entries }: RecentAnalysisProps) => {
  const maxPain = Math.max(...entries.map(e => e.painLevel), 1);

  return (
    <div className="space-y-3">
      {/* Mini bar chart */}
      <div className="flex items-end justify-between gap-2 h-16 px-2">
        {entries.map((entry, i) => {
          const h = Math.max(8, (entry.painLevel / maxPain) * 56);
          const tc = trendConfig[entry.trend];
          return (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full max-w-[28px] rounded-t-md transition-all duration-500"
                style={{
                  height: `${h}px`,
                  background: `linear-gradient(to top, ${tc.color}, ${tc.color}88)`,
                  boxShadow: `0 0 8px ${tc.color}44`,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Timeline labels */}
      <div className="flex justify-between gap-2 px-2">
        {entries.map((entry, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
            <span className="text-lg">{emotionEmojis[entry.dominantEmotion] || '🐾'}</span>
            <span className="text-[9px] text-white/40 text-center leading-tight">{entry.timestamp}</span>
          </div>
        ))}
      </div>

      {entries.length === 0 && (
        <p className="text-center text-white/40 text-sm py-4">No data yet</p>
      )}
    </div>
  );
};
