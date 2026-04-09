import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, AlertTriangle } from "lucide-react";

interface PainGaugeProps {
  painLevel: number;
  lastUpdated: string;
}

const getPainLevel = (level: number) => {
  if (level <= 30) return {
    label: 'Low Risk',
    icon: CheckCircle,
    description: "Feeling all good over here!\nDon't you worry 😌",
  };
  if (level <= 70) return {
    label: 'Moderate',
    icon: AlertCircle,
    description: "Something feels a bit off...\nKeep an eye on me? 💙",
  };
  return {
    label: 'High Risk',
    icon: AlertTriangle,
    description: "I'm not feeling so good...\nI could use some help 🏥",
  };
};

export const PainGauge = ({ painLevel, lastUpdated }: PainGaugeProps) => {
  const painInfo = getPainLevel(painLevel);

  return (
    <div className="space-y-2">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xl font-bold text-white">{painLevel}%</span>
          <p className="text-[11px] text-white/50">Pain Likelihood</p>
        </div>
        <div className="border border-white/30 rounded-full px-3 py-0.5">
          <span className="text-xs font-medium text-white/90">{painInfo.label}</span>
        </div>
      </div>
      <p className="text-sm text-white/80 whitespace-pre-line leading-relaxed">{painInfo.description}</p>
      <p className="text-[10px] text-white/30">Updated {lastUpdated}</p>
    </div>
  );
};
