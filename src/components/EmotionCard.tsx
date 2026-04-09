import { cn } from "@/lib/utils";

interface EmotionCardProps {
  emotion: 'happy' | 'sad' | 'anxious' | 'calm';
  confidence: number;
  isActive?: boolean;
}

const emotionConfig = {
  happy: { label: 'Happy', description: "You know, it has been always lovely to be with you. 🥰" },
  sad: { label: 'Sad', description: "I need extra cuddles today... can you stay? 🥺" },
  anxious: { label: 'Anxious', description: "Something's making me a bit nervous... 😰" },
  calm: { label: 'Calm', description: "Just vibing here, life is good~ 😌" },
};

export const EmotionCard = ({ emotion, confidence, isActive = false }: EmotionCardProps) => {
  const config = emotionConfig[emotion];

  if (!isActive) return null;

  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold text-white/60">{config.label}</p>
      <p className="text-sm text-white/80 leading-relaxed">{config.description}</p>
    </div>
  );
};
