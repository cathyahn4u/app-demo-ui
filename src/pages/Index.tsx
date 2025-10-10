import { EmotionCard } from "@/components/EmotionCard";
import { PainGauge } from "@/components/PainGauge";
import { RecentAnalysis } from "@/components/RecentAnalysis";
import { PetInstagram } from "@/components/PetInstagram";
import { BottomNav } from "@/components/BottomNav";
import { Activity, Heart } from "lucide-react";
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
...
            </div>
          </>}

        {/* Pet Instagram - Share Tab */}
        {activeTab === "share" && (
          <div className="mt-6">
            <PetInstagram posts={instagramPosts} />
          </div>
        )}
      </div>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>;
};
export default Index;