import { PetProfile } from "@/components/PetProfile";
import { EmotionCard } from "@/components/EmotionCard";
import { PainGauge } from "@/components/PainGauge";
import { RecentAnalysis } from "@/components/RecentAnalysis";
import { PetInstagram } from "@/components/PetInstagram";
import { Button } from "@/components/ui/button";
import { Activity, Heart, Scan, Loader2, Smartphone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "@/assets/logo_icon.png";
const Index = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowAnalysis(true);
    }, 1500); // 1.5 second delay
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
  const emotionData = [{
    emotion: 'happy' as const,
    confidence: 85,
    isActive: true
  }, {
    emotion: 'calm' as const,
    confidence: 72,
    isActive: false
  }, {
    emotion: 'anxious' as const,
    confidence: 15,
    isActive: false
  }, {
    emotion: 'sad' as const,
    confidence: 8,
    isActive: false
  }];
  const recentAnalysisData = [{
    timestamp: "2 hours ago",
    dominantEmotion: "Happy",
    painLevel: 12,
    trend: 'stable' as const
  }, {
    timestamp: "5 hours ago",
    dominantEmotion: "Playful",
    painLevel: 8,
    trend: 'down' as const
  }, {
    timestamp: "8 hours ago",
    dominantEmotion: "Calm",
    painLevel: 15,
    trend: 'up' as const
  }, {
    timestamp: "12 hours ago",
    dominantEmotion: "Happy",
    painLevel: 10,
    trend: 'stable' as const
  }];

  const instagramPosts = [{
    id: 1,
    imageUrl: "/lovable-uploads/2890d838-d769-4092-8f55-364e2d26f594.png",
    caption: "Happy playtime in the park! 🎾",
    likes: 127,
    timestamp: "3 hours ago"
  }, {
    id: 2,
    imageUrl: "/lovable-uploads/2890d838-d769-4092-8f55-364e2d26f594.png",
    caption: "Afternoon nap after a long walk 😴",
    likes: 98,
    timestamp: "6 hours ago"
  }, {
    id: 3,
    imageUrl: "/lovable-uploads/2890d838-d769-4092-8f55-364e2d26f594.png",
    caption: "Enjoying the sunshine ☀️",
    likes: 156,
    timestamp: "1 day ago"
  }, {
    id: 4,
    imageUrl: "/lovable-uploads/2890d838-d769-4092-8f55-364e2d26f594.png",
    caption: "Best day ever at the beach! 🏖️",
    likes: 203,
    timestamp: "2 days ago"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background/90">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logoIcon} alt="PetLepathy Logo" className="h-16 w-auto" />
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Advanced AI-powered analysis to understand your pet's emotional state and detect pain.</p>
        </div>

        {/* Pet Profile */}
        <div className="mb-8">
          <PetProfile {...petData} />
        </div>

        {/* Analyze Button or Analyzing State */}
        {!showAnalysis && !isAnalyzing && <div className="text-center mb-8">
            <Button onClick={handleAnalyze} size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg">
              <Scan className="w-5 h-5 mr-2" />
              Analyze Now
            </Button>
          </div>}

        {/* Analyzing State */}
        {isAnalyzing && <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-12 h-12 text-primary animate-spin" />
              <div className="text-lg font-semibold text-foreground">Analyzing your pet...</div>
              <div className="text-sm text-muted-foreground">Processing emotional patterns and pain indicators</div>
            </div>
          </div>}

        {/* Main Dashboard Grid */}
        {showAnalysis && <>
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
                  {emotionData.map(emotion => <EmotionCard key={emotion.emotion} emotion={emotion.emotion} confidence={emotion.confidence} isActive={emotion.isActive} />)}
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

            {/* Pet Instagram */}
            <div className="mt-6">
              <PetInstagram posts={instagramPosts} />
            </div>
          </>}

        {/* Lockscreen Button */}
        <div className="text-center mt-12">
          <Link to="/lockscreen">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border-primary/30 hover:border-primary/60 hover:bg-primary/20"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              View Pet Lockscreen
            </Button>
          </Link>
        </div>
      </div>
    </div>;
};
export default Index;