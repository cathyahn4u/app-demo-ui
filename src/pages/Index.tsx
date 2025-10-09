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
    imageUrl: "/pet-photos/flower-field.jpeg",
    caption: "Running through a field of flowers! Living my best life 🌼✨",
    likes: 342,
    timestamp: "2 hours ago",
    username: "@buddythegolden",
    emoji: "🐾",
    healthLevel: 95,
    emotionalState: "Joyful",
    emotionEmoji: "😊"
  }, {
    id: 2,
    imageUrl: "/pet-photos/puppy-selfie.jpeg",
    caption: "Selfie game strong 📸 Who else loves belly rubs?",
    likes: 289,
    timestamp: "5 hours ago",
    username: "@buddythegolden",
    emoji: "🐾",
    healthLevel: 92,
    emotionalState: "Playful",
    emotionEmoji: "🤗"
  }, {
    id: 3,
    imageUrl: "/pet-photos/smiling-dog.jpeg",
    caption: "Found a flower and couldn't stop smiling! 🌸😁",
    likes: 421,
    timestamp: "1 day ago",
    username: "@buddythegolden",
    emoji: "🐾",
    healthLevel: 98,
    emotionalState: "Happy",
    emotionEmoji: "😄"
  }, {
    id: 4,
    imageUrl: "/pet-photos/sunset-pup.jpeg",
    caption: "Golden hour is MY hour 🌅✨",
    likes: 567,
    timestamp: "1 day ago",
    username: "@buddythegolden",
    emoji: "🐾",
    healthLevel: 94,
    emotionalState: "Peaceful",
    emotionEmoji: "😌"
  }, {
    id: 5,
    imageUrl: "/pet-photos/black-kitten.jpeg",
    caption: "My feline friend stopping by for cuddles 🐱💕",
    likes: 234,
    timestamp: "2 days ago",
    username: "@buddythegolden",
    emoji: "🐾",
    healthLevel: 88,
    emotionalState: "Affectionate",
    emotionEmoji: "🥰"
  }, {
    id: 6,
    imageUrl: "/pet-photos/black-cat.jpeg",
    caption: "Tilt your head if you're adorable 😸",
    likes: 312,
    timestamp: "2 days ago",
    username: "@buddythegolden",
    emoji: "🐾",
    healthLevel: 90,
    emotionalState: "Curious",
    emotionEmoji: "🤔"
  }, {
    id: 7,
    imageUrl: "/pet-photos/fancy-cat.jpeg",
    caption: "Feeling fancy in my bow tie 🎀✨",
    likes: 445,
    timestamp: "3 days ago",
    username: "@buddythegolden",
    emoji: "🐾",
    healthLevel: 91,
    emotionalState: "Confident",
    emotionEmoji: "😎"
  }, {
    id: 8,
    imageUrl: "/pet-photos/cat-sink.jpeg",
    caption: "If I fits, I sits! Sink life chose me 😹",
    likes: 398,
    timestamp: "3 days ago",
    username: "@buddythegolden",
    emoji: "🐾",
    healthLevel: 93,
    emotionalState: "Mischievous",
    emotionEmoji: "😼"
  }, {
    id: 9,
    imageUrl: "/pet-photos/study-cat.jpeg",
    caption: "Studying hard or hardly studying? 📚🤓",
    likes: 356,
    timestamp: "4 days ago",
    username: "@buddythegolden",
    emoji: "🐾",
    healthLevel: 89,
    emotionalState: "Focused",
    emotionEmoji: "🧐"
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