import bedroomBg from "@/assets/bedroom-bg.png";
import { PainGauge } from "@/components/PainGauge";
import { EmotionCard } from "@/components/EmotionCard";
import { RecentAnalysis } from "@/components/RecentAnalysis";
import { Activity, BarChart3 } from "lucide-react";

const Bedroom = () => {
  const emotionData = [
    { emotion: 'happy' as const, confidence: 85, isActive: true },
    { emotion: 'calm' as const, confidence: 72, isActive: false },
    { emotion: 'anxious' as const, confidence: 15, isActive: false },
    { emotion: 'sad' as const, confidence: 8, isActive: false },
  ];

  const recentAnalysisData = [
    { timestamp: "2h", dominantEmotion: "Happy", painLevel: 12, trend: 'stable' as const },
    { timestamp: "5h", dominantEmotion: "Playful", painLevel: 8, trend: 'down' as const },
    { timestamp: "8h", dominantEmotion: "Calm", painLevel: 15, trend: 'up' as const },
    { timestamp: "12h", dominantEmotion: "Happy", painLevel: 10, trend: 'stable' as const },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-auto">
      <img
        src={bedroomBg}
        alt="Cozy bedroom with sleeping cat"
        className="fixed inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center pt-6 pb-24 px-6 min-h-screen">
        {/* Health & Emotion Status */}
        <div className="w-full max-w-sm mb-4">
          <h2 className="text-sm font-bold text-white/60 flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4" />
            Health & Emotion
          </h2>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-4">
              <PainGauge painLevel={12} lastUpdated="just now" />
              <div className="flex-1 grid grid-cols-4 gap-1.5">
                {emotionData.map((emotion, index) => (
                  <EmotionCard key={index} {...emotion} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Analysis */}
        <div className="w-full max-w-sm mb-4">
          <h2 className="text-sm font-bold text-white/60 flex items-center gap-2 mb-2">
            <BarChart3 className="w-4 h-4" />
            Recent Analysis
          </h2>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
            <RecentAnalysis entries={recentAnalysisData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedroom;
