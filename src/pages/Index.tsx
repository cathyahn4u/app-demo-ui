import { EmotionCard } from "@/components/EmotionCard";
import { PainGauge } from "@/components/PainGauge";
import { RecentAnalysis } from "@/components/RecentAnalysis";
import { PetInstagram } from "@/components/PetInstagram";
import { BottomNav } from "@/components/BottomNav";
import { Activity, Heart, Lock, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Index = () => {
  const [activeTab, setActiveTab] = useState("analyze");

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
    timestamp: "3 minutes ago",
    username: "@buddythegolden",
    emoji: "🐕",
    healthLevel: 95,
    emotionalState: "Joyful",
    emotionEmoji: "😊"
  }, {
    id: 2,
    imageUrl: "/pet-photos/puppy-selfie.jpeg",
    caption: "Selfie game strong 📸 Who else loves belly rubs?",
    likes: 289,
    timestamp: "5 minutes ago",
    username: "@maxthepup",
    emoji: "🐶",
    healthLevel: 88,
    emotionalState: "Playful",
    emotionEmoji: "🤗"
  }, {
    id: 3,
    imageUrl: "/pet-photos/smiling-dog.jpeg",
    caption: "Found a flower and couldn't stop smiling! 🌸😁",
    likes: 421,
    timestamp: "8 minutes ago",
    username: "@happycharlie",
    emoji: "🦮",
    healthLevel: 98,
    emotionalState: "Happy",
    emotionEmoji: "😄"
  }, {
    id: 4,
    imageUrl: "/pet-photos/sunset-pup.jpeg",
    caption: "Golden hour is MY hour 🌅✨",
    likes: 567,
    timestamp: "11 minutes ago",
    username: "@lunathelab",
    emoji: "🐕",
    healthLevel: 92,
    emotionalState: "Peaceful",
    emotionEmoji: "😌"
  }, {
    id: 5,
    imageUrl: "/pet-photos/black-kitten.jpeg",
    caption: "Had a fever but my owner noticed it quick by PetLepathy 🌡️ Heading to the vet! 🏥",
    likes: 234,
    timestamp: "13 minutes ago",
    username: "@midnightkitty",
    emoji: "🐈‍⬛",
    healthLevel: 25,
    emotionalState: "Unwell",
    emotionEmoji: "😔"
  }, {
    id: 6,
    imageUrl: "/pet-photos/black-cat.jpeg",
    caption: "Tilt your head if you're adorable 😸",
    likes: 312,
    timestamp: "14 minutes ago",
    username: "@shadowthecat",
    emoji: "😺",
    healthLevel: 85,
    emotionalState: "Curious",
    emotionEmoji: "🤔"
  }, {
    id: 7,
    imageUrl: "/pet-photos/fancy-cat.jpeg",
    caption: "Feeling fancy in my bow tie 🎀✨",
    likes: 445,
    timestamp: "15 minutes ago",
    username: "@whiskerspurr",
    emoji: "🐱",
    healthLevel: 78,
    emotionalState: "Confident",
    emotionEmoji: "😎"
  }, {
    id: 8,
    imageUrl: "/pet-photos/cat-sink.jpeg",
    caption: "If I fits, I sits! Sink life chose me 😹",
    likes: 398,
    timestamp: "16 minutes ago",
    username: "@sillysocks",
    emoji: "😹",
    healthLevel: 94,
    emotionalState: "Mischievous",
    emotionEmoji: "😼"
  }, {
    id: 9,
    imageUrl: "/pet-photos/study-cat.jpeg",
    caption: "Studying hard or hardly studying? 📚🤓",
    likes: 356,
    timestamp: "17 minutes ago",
    username: "@professorpaws",
    emoji: "🐈",
    healthLevel: 81,
    emotionalState: "Focused",
    emotionEmoji: "🧐"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background/90 pb-20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Main Dashboard Grid */}
        {activeTab === "analyze" && <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Emotional Analysis - Locked */}
              <div className="lg:col-span-2 space-y-4 relative">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" />
                    Emotional Analysis
                  </h2>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Locked
                  </Badge>
                </div>
                
                {/* Locked overlay */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4 opacity-60">
                    {emotionData.map((emotion, index) => <EmotionCard key={index} {...emotion} />)}
                  </div>
                  
                {/* Unlock message - Glass effect */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/10 backdrop-blur-sm text-center px-6">
                  <Lock className="w-12 h-12 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Hardware Required
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md mb-4">Understand what your furry friend is feeling based on 
biosignals, using our wearable.</p>
                  <Button variant="default" size="lg" className="bg-gradient-to-br from-[hsl(237,85%,73%)]/80 to-[hsl(175,89%,83%)]/80 hover:from-[hsl(237,85%,68%)]/90 hover:to-[hsl(175,89%,78%)]/90 text-primary-foreground rounded-full py-2 px-6 h-auto font-semibold shadow-lg backdrop-blur-xl border border-white/20 transition-all">Register HW Presale</Button>
                </div>
                </div>
              </div>

              {/* Pain Detection - Locked */}
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Activity className="w-6 h-6 text-primary" />
                    Pain Detection
                  </h2>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Locked
                  </Badge>
                </div>
                
                {/* Locked overlay */}
                <div className="relative">
                  <div className="opacity-60">
                    <PainGauge painLevel={12} lastUpdated="Just now" />
                  </div>
                  
                {/* Unlock message - Glass effect */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/10 backdrop-blur-sm text-center px-4">
                  <Lock className="w-10 h-10 text-primary mx-auto mb-2" />
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    Hardware Required
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">Connect our device. Never miss their pain.</p>
                  <Button variant="default" size="default" className="bg-gradient-to-br from-[hsl(237,85%,73%)]/80 to-[hsl(175,89%,83%)]/80 hover:from-[hsl(237,85%,68%)]/90 hover:to-[hsl(175,89%,78%)]/90 text-primary-foreground rounded-full py-1.5 px-5 h-auto font-semibold shadow-lg backdrop-blur-xl border border-white/20 text-sm transition-all">Register HW Presale</Button>
                </div>
                </div>
              </div>
            </div>

            {/* Recent Analysis - Locked */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  Recent Analysis
                </h2>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  Locked
                </Badge>
              </div>
              
              <div className="relative">
              <div className="opacity-60">
                <RecentAnalysis entries={recentAnalysisData} />
              </div>
              
              {/* Unlock message - Glass effect */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/10 backdrop-blur-sm text-center px-6">
                <Lock className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Hardware Required
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mb-4">
                  Connect our specialized hardware device to unlock detailed analysis history and trends.
                </p>
                <Button variant="default" size="lg" className="bg-gradient-to-br from-[hsl(237,85%,73%)]/80 to-[hsl(175,89%,83%)]/80 hover:from-[hsl(237,85%,68%)]/90 hover:to-[hsl(175,89%,78%)]/90 text-primary-foreground rounded-full py-2 px-6 h-auto font-semibold shadow-lg backdrop-blur-xl border border-white/20 transition-all">Register HW Presale</Button>
              </div>
              </div>
            </div>
          </>}

        {/* Pet Instagram - Share Tab */}
        {activeTab === "share" && <div className="mt-6">
            <PetInstagram posts={instagramPosts} />
          </div>}
      </div>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>;
};
export default Index;