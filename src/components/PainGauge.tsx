import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";

interface PainGaugeProps {
  painLevel: number; // 0-100
  lastUpdated: string;
}

const getPainLevel = (level: number) => {
  if (level <= 30) return {
    label: 'Low',
    icon: CheckCircle,
    color: 'hsl(var(--pain-low))',
    emoji: '😸',
  };
  if (level <= 70) return {
    label: 'Moderate',
    icon: AlertCircle,
    color: 'hsl(var(--pain-medium))',
    emoji: '😿',
  };
  return {
    label: 'High',
    icon: AlertTriangle,
    color: 'hsl(var(--pain-high))',
    emoji: '🙀',
  };
};

export const PainGauge = ({ painLevel, lastUpdated }: PainGaugeProps) => {
  const painInfo = getPainLevel(painLevel);
  
  // SVG circular gauge
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (painLevel / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Circular Gauge */}
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke={painInfo.color}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-700 ease-out"
            style={{ filter: `drop-shadow(0 0 6px ${painInfo.color})` }}
          />
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl">{painInfo.emoji}</span>
          <span className="text-2xl font-bold text-white">{painLevel}%</span>
        </div>
      </div>

      {/* Label row */}
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: painInfo.color, boxShadow: `0 0 8px ${painInfo.color}` }}
        />
        <span className="text-sm font-semibold text-white/90">{painInfo.label} Risk</span>
      </div>

      <p className="text-[10px] text-white/40">Updated {lastUpdated}</p>
    </div>
  );
};
