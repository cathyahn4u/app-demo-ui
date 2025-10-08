import { PetProfile } from "@/components/PetProfile";
import { PetAvatar } from "@/components/PetAvatar";
import { EmotionCard } from "@/components/EmotionCard";
import { PainGauge } from "@/components/PainGauge";
import { RecentAnalysis } from "@/components/RecentAnalysis";
import { FeedbackButtons } from "@/components/FeedbackButtons";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Scan, Loader2, Bell } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [petStatus, setPetStatus] = useState<'sleeping' | 'active' | 'eating' | 'pain' | 'happy'>('happy');

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowAnalysis(true);
    }, 1500);
  };

  const handleFeedback = (activity: string) => {
    console.log('Activity logged:', activity);
    // Here you would send this to your backend/database
  };
  
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
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="/lovable-uploads/2890d838-d769-4092-8f55-364e2d26f594.png" 
              alt="PetLepathy Logo" 
              className="h-20 w-auto"
            />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Stay connected with your pet's emotional state and wellbeing - even when you're away
          </p>
        </div>

        {/* Pet Avatar - Main Feature */}
        <div className="mb-8 max-w-md mx-auto">
          <PetAvatar 
            status={petStatus} 
            petName={petData.name}
            breed={petData.breed}
          />
        </div>

        {/* Quick Feedback */}
        <div className="mb-8">
          <FeedbackButtons onFeedback={handleFeedback} />
        </div>

        {/* Analyze Button or Analyzing State */}
        {!showAnalysis && !isAnalyzing && (
          <div className="text-center mb-8">
            <Button 
              onClick={handleAnalyze}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg rounded-2xl px-8 py-6 text-lg backdrop-blur-sm"
            >
              <Scan className="w-5 h-5 mr-2" />
              Run Full Analysis
            </Button>
          </div>
        )}

        {/* Analyzing State */}
        {isAnalyzing && (
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <div className="text-lg font-semibold text-foreground">Analyzing your pet...</div>
              <div className="text-sm text-muted-foreground">Processing emotional patterns and pain indicators</div>
            </div>
          </div>
        )}

        {/* Main Dashboard Grid */}
        {showAnalysis && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Pain Analysis */}
              <div className="lg:col-span-1">
                <div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-[--shadow-card]">
                  <PainGauge painLevel={12} lastUpdated="2 hours ago" />
                </div>
              </div>

              {/* Emotion Grid */}
              <div className="lg:col-span-2">
                <div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-[--shadow-card]">
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
            </div>

            {/* Recent Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentAnalysis entries={recentAnalysisData} />
              
            {/* Quick Stats */}
              <div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-[--shadow-card]">
                <div className="flex items-center gap-2 mb-4">
                  <Activity className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Today's Summary</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl">
                    <div className="text-2xl font-bold text-happy">95%</div>
                    <div className="text-sm text-muted-foreground">Positive Emotions</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl">
                    <div className="text-2xl font-bold text-pain-low">8</div>
                    <div className="text-sm text-muted-foreground">Analyses Today</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl">
                    <div className="text-2xl font-bold text-primary">4.2</div>
                    <div className="text-sm text-muted-foreground">Avg Wellness Score</div>
                  </div>
                  <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl">
                    <div className="text-2xl font-bold text-accent">12%</div>
                    <div className="text-sm text-muted-foreground">Avg Pain Level</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Index;
