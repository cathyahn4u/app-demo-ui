import { PetProfile } from "@/components/PetProfile";
import { EmotionCard } from "@/components/EmotionCard";
import { PainGauge } from "@/components/PainGauge";
import { RecentAnalysis } from "@/components/RecentAnalysis";
import { Activity, Brain, Heart } from "lucide-react";

const Index = () => {
  // Mock data for demonstration
  const petData = {
    name: "Buddy",
    breed: "Golden Retriever",
    age: 5,
    weight: "30 kg",
    lastCheckup: "March 15, 2024",
    avatarUrl: undefined
  };

  const emotionData = [
    { emotion: 'happy' as const, confidence: 85, isActive: true },
    { emotion: 'calm' as const, confidence: 72, isActive: false },
    { emotion: 'anxious' as const, confidence: 15, isActive: false },
    { emotion: 'sad' as const, confidence: 8, isActive: false },
  ];

  const recentAnalysisData = [
    { timestamp: "2 hours ago", dominantEmotion: "Happy", painLevel: 12, trend: 'stable' as const },
    { timestamp: "5 hours ago", dominantEmotion: "Playful", painLevel: 8, trend: 'down' as const },
    { timestamp: "8 hours ago", dominantEmotion: "Calm", painLevel: 15, trend: 'up' as const },
    { timestamp: "12 hours ago", dominantEmotion: "Happy", painLevel: 10, trend: 'stable' as const },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background/90">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Pet Emotion & Pain Analysis
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced AI-powered analysis to understand your pet's emotional state and detect signs of discomfort
          </p>
        </div>

        {/* Pet Profile */}
        <div className="mb-8">
          <PetProfile {...petData} />
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Pain Analysis - Takes prominent position */}
          <div className="lg:col-span-1">
            <PainGauge painLevel={12} lastUpdated="2 hours ago" />
          </div>

          {/* Emotion Grid */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Emotion Analysis</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {emotionData.map((emotion) => (
                <EmotionCard
                  key={emotion.emotion}
                  emotion={emotion.emotion}
                  confidence={emotion.confidence}
                  isActive={emotion.isActive}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentAnalysis entries={recentAnalysisData} />
          
          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-[--shadow-card]">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Today's Summary</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <div className="text-2xl font-bold text-happy">95%</div>
                <div className="text-sm text-muted-foreground">Positive Emotions</div>
              </div>
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <div className="text-2xl font-bold text-pain-low">8</div>
                <div className="text-sm text-muted-foreground">Analyses Today</div>
              </div>
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <div className="text-2xl font-bold text-primary">4.2</div>
                <div className="text-sm text-muted-foreground">Avg Wellness Score</div>
              </div>
              <div className="text-center p-4 bg-muted/20 rounded-lg">
                <div className="text-2xl font-bold text-accent">12%</div>
                <div className="text-sm text-muted-foreground">Avg Pain Level</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
