import { cn } from "@/lib/utils";

interface PainGaugeProps {
  painLevel: number;
  lastUpdated: string;
}

export const PainGauge = ({ painLevel, lastUpdated }: PainGaugeProps) => {
  const radius = 36;
  const stroke = 6;
  const circumference = 2 * Math.PI * radius;
  const progress = (painLevel / 100) * circumference;
  const center = radius + stroke;
  const size = (radius + stroke) * 2;

  const color = painLevel <= 30 ? '#4ade80' : painLevel <= 70 ? '#facc15' : '#f87171';
  const emoji = painLevel <= 30 ? '😌' : painLevel <= 70 ? '😐' : '😣';

  return (
    <div className="flex items-center gap-4">
      <div className="relative flex-shrink-0">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={center} cy={center} r={radius}
            fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke}
          />
          <circle
            cx={center} cy={center} r={radius}
            fill="none" stroke={color} strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            strokeLinecap="round"
            className="transition-all duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold text-white">{painLevel}%</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-2xl">{emoji}</span>
        <span className="text-[10px] text-white/30">{lastUpdated}</span>
      </div>
    </div>
  );
};
