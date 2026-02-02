import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Heart, Frown, Zap, Waves } from "lucide-react";

interface EmotionCardProps {
  emotion: 'happy' | 'sad' | 'anxious' | 'calm';
  confidence: number;
  isActive?: boolean;
}

const emotionConfig = {
  happy: {
    icon: Heart,
    label: 'Happy',
    color: 'happy',
    description: "I'm feeling amazing! Let's play! 🎾"
  },
  sad: {
    icon: Frown,
    label: 'Sad',
    color: 'sad',
    description: "I need extra cuddles today... 🥺"
  },
  anxious: {
    icon: Zap,
    label: 'Anxious',
    color: 'anxious',
    description: "Something's making me nervous! 😰"
  },
  calm: {
    icon: Waves,
    label: 'Calm',
    color: 'calm',
    description: "Just vibing and feeling zen~ 😌"
  }
};

export const EmotionCard = ({ emotion, confidence, isActive = false }: EmotionCardProps) => {
  const config = emotionConfig[emotion];
  const Icon = config.icon;
  
  return (
    <Card className={cn(
      "p-4 transition-all duration-300 hover:scale-105 border border-border/50",
      "bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm",
      isActive && "ring-2 ring-primary/30 shadow-[--shadow-emotion]"
    )}>
      <div className="flex items-center gap-3 mb-3">
        <div className={cn(
          "p-2 rounded-lg",
          `bg-${config.color}/10 text-${config.color}`
        )}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-foreground">{config.label}</h3>
          <p className="text-xs text-muted-foreground leading-tight">
            {config.description}
          </p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-muted-foreground">Confidence</span>
          <span className="text-sm font-medium text-foreground">{confidence}%</span>
        </div>
        <Progress 
          value={confidence} 
          className={cn(
            "h-2",
            `[&>div]:bg-${config.color}`
          )}
        />
      </div>
    </Card>
  );
};