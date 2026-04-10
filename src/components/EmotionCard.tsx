import { cn } from "@/lib/utils";

interface EmotionCardProps {
  emotion: 'happy' | 'sad' | 'anxious' | 'calm';
  confidence: number;
  isActive?: boolean;
}

const emotionConfig = {
  happy: { emoji: '😊', color: 'bg-green-400' },
  sad: { emoji: '😢', color: 'bg-blue-400' },
  anxious: { emoji: '😰', color: 'bg-yellow-400' },
  calm: { emoji: '😌', color: 'bg-cyan-400' },
};

export const EmotionCard = ({ emotion, confidence, isActive = false }: EmotionCardProps) => {
  const config = emotionConfig[emotion];

  return (
    <div className={cn(
      "flex flex-col items-center gap-1.5 p-2 rounded-lg",
      isActive && "bg-white/10"
    )}>
      <span className="text-xl">{config.emoji}</span>
      <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className={cn("h-full rounded-full transition-all duration-500", config.color)}
          style={{ width: `${confidence}%`, opacity: 0.8 }}
        />
      </div>
      <span className="text-[10px] text-white/50 font-medium">{confidence}%</span>
    </div>
  );
};
