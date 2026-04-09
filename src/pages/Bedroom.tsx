import bedroomBg from "@/assets/bedroom-bg.png";
import { PainGauge } from "@/components/PainGauge";
import { EmotionCard } from "@/components/EmotionCard";
import { RecentAnalysis } from "@/components/RecentAnalysis";
import { Activity, Heart, BarChart3 } from "lucide-react";

const Bedroom = () => {
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
    <div className="relative min-h-screen w-full overflow-auto">
      {/* Background image */}
      <img
        src={bedroomBg}
        alt="Cozy bedroom with sleeping cat"
        className="fixed inset-0 w-full h-full object-cover"
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center pt-12 pb-24 px-4 min-h-screen">
        {/* Pain Detection */}
        <div className="w-full max-w-md mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3 drop-shadow-lg">
            <Activity className="w-5 h-5 text-white" />
            Pain Detection
          </h2>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg">
            <PainGauge painLevel={12} lastUpdated="Just now" />
          </div>
        </div>

        {/* Emotional Analysis */}
        <div className="w-full max-w-md mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3 drop-shadow-lg">
            <Heart className="w-5 h-5 text-white" />
            Emotional Analysis
          </h2>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg">
            <div className="grid grid-cols-2 gap-3">
              {emotionData.map((emotion, index) => (
                <EmotionCard key={index} {...emotion} />
              ))}
            </div>
          </div>
        </div>

        {/* Recent Analysis */}
        <div className="w-full max-w-md mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-3 drop-shadow-lg">
            <BarChart3 className="w-5 h-5 text-white" />
            Recent Analysis
          </h2>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4 shadow-lg">
            <RecentAnalysis entries={recentAnalysisData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedroom;
