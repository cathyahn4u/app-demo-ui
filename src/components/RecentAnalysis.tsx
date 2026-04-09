import { TrendingUp, TrendingDown, Minus } from "lucide-react";
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

const trendConfig = {
  up: { icon: TrendingUp, color: 'text-red-400' },
  down: { icon: TrendingDown, color: 'text-green-400' },
  stable: { icon: Minus, color: 'text-white/40' },
};

export const RecentAnalysis = ({ entries }: RecentAnalysisProps) => {
  const maxPain = Math.max(...entries.map(e => e.painLevel), 1);

  return (
    <div className="flex items-end justify-between gap-3 h-20 px-1">
      {entries.map((entry, i) => {
        const h = Math.max(12, (entry.painLevel / maxPain) * 64);
        const tc = trendConfig[entry.trend];
        const TrendIcon = tc.icon;
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t-md bg-white/15"
              style={{ height: `${h}px` }}
            />
            <TrendIcon className={cn("w-3 h-3", tc.color)} />
            <span className="text-[9px] text-white/30 text-center leading-tight">{entry.timestamp}</span>
          </div>
        );
      })}
    </div>
  );
};
