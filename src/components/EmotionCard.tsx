import { cn } from "@/lib/utils";
import { Heart, Frown, Zap, Waves } from "lucide-react";

interface EmotionCardProps {
  emotion: 'happy' | 'sad' | 'anxious' | 'calm';
  confidence: number;
  isActive?: boolean;
}

const emotionConfig = {
  happy: { icon: Heart, label: 'Happy', color: 'hsl(var(--happy))', emoji: '😸' },
  sad: { icon: Frown, label: 'Sad', color: 'hsl(var(--sad))', emoji: '😿' },
  anxious: { icon: Zap, label: 'Anxious', color: 'hsl(var(--anxious))', emoji: '😰' },
  calm: { icon: Waves, label: 'Calm', color: 'hsl(var(--calm))', emoji: '😌' },
};

export const EmotionCard = ({ emotion, confidence, isActive = false }: EmotionCardProps) => {
  const config = emotionConfig[emotion];
  const Icon = config.icon;

  // Mini bar height
  const barHeight = Math.max(4, (confidence / 100) * 40);

  return (
    <div className={cn(
      "flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300",
      "backdrop-blur-md bg-white/5 border border-white/10",
      isActive && "bg-white/15 border-white/25 shadow-lg"
    )}>
      {/* Emoji + icon */}
      <span className="text-2xl">{config.emoji}</span>

      {/* Label */}
      <span className="text-xs font-semibold text-white/90">{config.label}</span>

      {/* Mini confidence bar */}
      <div className="w-full flex items-end justify-center gap-[2px] h-10">
        {[...Array(5)].map((_, i) => {
          const segHeight = Math.min(40, barHeight + (i === 2 ? 8 : i % 2 === 0 ? 4 : 0));
          const isLit = (i + 1) * 20 <= confidence + 10;
          return (
            <div
              key={i}
              className="w-[6px] rounded-full transition-all duration-500"
              style={{
                height: `${isLit ? segHeight : 4}px`,
                backgroundColor: isLit ? config.color : 'rgba(255,255,255,0.1)',
                boxShadow: isLit ? `0 0 6px ${config.color}` : 'none',
              }}
            />
          );
        })}
      </div>

      {/* Percentage */}
      <span className="text-lg font-bold text-white">{confidence}%</span>
    </div>
  );
};
