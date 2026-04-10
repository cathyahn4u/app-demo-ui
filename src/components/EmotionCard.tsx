import { cn } from "@/lib/utils";

interface EmotionCardProps {
  emotion: 'happy' | 'sad' | 'anxious' | 'calm';
  confidence: number;
  isActive?: boolean;
}

const emotionConfig = {
  happy: { emoji: '😊', color: '#A6B8E7' },
  sad: { emoji: '😢', color: '#75615C' },
  anxious: { emoji: '😰', color: '#75615C' },
  calm: { emoji: '😌', color: '#BAB0AD' },
};

export const EmotionCard = ({ emotion, confidence, isActive = false }: EmotionCardProps) => {
  const config = emotionConfig[emotion];

  return (
    <div className={cn(
      "flex flex-col items-center gap-1.5 p-2 rounded-lg",
      isActive && "bg-white/10"
    )}>
      <span className="text-2xl">{config.emoji}</span>
      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-500", config.color)}
          style={{ width: `${confidence}%`, opacity: 0.8 }}
        />
      </div>
      <span className="text-xs text-white/50 font-medium">{confidence}%</span>
    </div>
  );
};
