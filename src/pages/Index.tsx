import { EmotionCard } from "@/components/EmotionCard";
import { PainGauge } from "@/components/PainGauge";
import { RecentAnalysis } from "@/components/RecentAnalysis";
import { PetInstagram } from "@/components/PetInstagram";
import { LockscreenSettings } from "@/components/LockscreenSettings";
import { AvatarGenerator } from "@/components/AvatarGenerator";
import { BottomNav } from "@/components/BottomNav";
import { Activity, Heart, Lock, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const Index = () => {
  const [activeTab, setActiveTab] = useState("analyze");
  const [showAvatarGenerator, setShowAvatarGenerator] = useState(false);

  // Mock data for demonstration
  const petData = {
    name: "Midnight",
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
    quote: "The flowers tickle my nose and I couldn't be happier. This is what freedom feels like!",
    petName: "Midnight",
    likes: 342,
    timestamp: "3 minutes ago",
    username: "@midnightthegolden",
    emoji: "🐕",
    healthLevel: 95,
    emotionalState: "Joyful",
    emotionEmoji: "😊"
  }, {
    id: 2,
    imageUrl: "/pet-photos/smiling-dog.jpeg",
    caption: "Selfie game strong 📸 Who else loves belly rubs?",
    quote: "I mastered the art of the puppy eyes. My human can't resist giving me all the belly rubs now!",
    petName: "Max",
    likes: 289,
    timestamp: "5 minutes ago",
    username: "@maxthepup",
    emoji: "🐶",
    healthLevel: 88,
    emotionalState: "Playful",
    emotionEmoji: "🤗"
  }, {
    id: 3,
    imageUrl: "/pet-photos/flower-field.jpeg",
    caption: "Found a flower and couldn't stop smiling! 🌸😁",
    quote: "This flower smells amazing! I'm keeping it forever. Or at least until dinner time.",
    petName: "Charlie",
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
    quote: "They call it golden hour, but I think they named it after me. Just saying.",
    petName: "Luna",
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
    quote: "I'm not feeling great, but thankful my human knew something was wrong before it got worse.",
    petName: "Midnight",
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
    quote: "I've perfected the head tilt. It works every single time for extra treats.",
    petName: "Shadow",
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
    quote: "Bow ties are cool. I'm basically a feline James Bond now.",
    petName: "Whiskers",
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
    caption: "Why is he here instead of the $100 cat tower I bought? 🤦‍♀️",
    quote: "If I fits, I sits! Sink life chose me 😹",
    petName: "Socks",
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
    quote: "I have acquired all the knowledge from these books by sitting on them. That's how it works, right?",
    petName: "Professor",
    likes: 356,
    timestamp: "17 minutes ago",
    username: "@professorpaws",
    emoji: "🐈",
    healthLevel: 81,
    emotionalState: "Focused",
    emotionEmoji: "🧐"
  }];
  return <>
    {/* Top Banner */}
    <div className="bg-gradient-to-r from-purple-500 to-purple-600 py-3 px-4 text-center">
      <p className="text-white text-sm md:text-base">
        Health/Emotion data is randomized for demo.
        <br />
        <a href="#" className="underline font-semibold hover:text-white/90 transition-colors">Want one? Jump on our Hardware presale.</a>
      </p>
    </div>
    
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background/90 pb-20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Main Dashboard Grid */}
        {activeTab === "analyze" && <>
            {/* Avatar Generation Section */}
            <div className="mb-6">
              {!showAvatarGenerator ? <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <h2 className="font-bold text-foreground mb-3 flex items-center justify-center gap-2 text-xl">
                    <Heart className="w-6 h-6 text-primary" />
                    Generate your fur-riend&apos;s purrsonalized avatar
                  </h2>
                  <p className="text-muted-foreground mb-4 max-w-2xl mx-auto text-sm">The avatar will mirror how your fur-riend is feeling once connected to our hardware.
Check how your furry love is doing right on widgets – keeping you close to their heart, always. 💕
                <br /><br />
                    Check how your furry love is doing right on your lockscreen and background widgets – keeping you close to their heart, always. 💕
                  </p>
                  <Button onClick={() => setShowAvatarGenerator(true)} variant="default" size="lg" className="bg-gradient-to-br from-[hsl(237,85%,73%)]/80 to-[hsl(175,89%,83%)]/80 hover:from-[hsl(237,85%,68%)]/90 hover:to-[hsl(175,89%,78%)]/90 text-primary-foreground rounded-full py-2 px-6 h-auto font-semibold shadow-lg backdrop-blur-xl border border-white/20 transition-all">
                    Generate Avatar
                  </Button>
                </div> : <AvatarGenerator onClose={() => setShowAvatarGenerator(false)} />}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Pain Detection */}
              <div>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
                  <Activity className="w-6 h-6 text-primary" />
                  Pain Detection
                </h2>
                <PainGauge painLevel={12} lastUpdated="Just now" />
              </div>

              {/* Emotional Analysis */}
              <div className="lg:col-span-2 space-y-4">
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                  Emotional Analysis
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {emotionData.map((emotion, index) => <EmotionCard key={index} {...emotion} />)}
                </div>
              </div>
            </div>

            {/* Recent Analysis */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
                Recent Analysis
              </h2>
              <RecentAnalysis entries={recentAnalysisData} />
            </div>
          </>}

        {/* Pet Instagram - Share Tab */}
        {activeTab === "share" && <div className="mt-6">
            <PetInstagram posts={instagramPosts} />
          </div>}

        {/* Settings Tab */}
        {activeTab === "settings" && <div className="mt-6">
            <LockscreenSettings />
          </div>}
      </div>
      
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  </>;
};
export default Index;