import { useState, useEffect } from "react";
import sleepingDog from "@/assets/golden-retriever-sleeping.png";
import activeDog from "@/assets/golden-retriever-active.png";

const Lockscreen = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [petStatus, setPetStatus] = useState<'sleeping' | 'active'>('sleeping');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate status changes every 5 seconds for demo
    const statusTimer = setInterval(() => {
      setPetStatus(prev => prev === 'sleeping' ? 'active' : 'sleeping');
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const dateStr = currentTime.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-between p-8 relative overflow-hidden">
      {/* iOS-style blur overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Time Display */}
      <div className="relative z-10 text-center pt-20">
        <div className="text-white text-8xl font-light tracking-tight mb-2">
          {hours}:{minutes}
        </div>
        <div className="text-white/80 text-xl font-light">
          {dateStr}
        </div>
      </div>

      {/* Pet Avatar Animation */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative">
          <img 
            src={petStatus === 'sleeping' ? sleepingDog : activeDog}
            alt="Buddy"
            className={`w-64 h-64 object-contain transition-all duration-1000 ${
              petStatus === 'sleeping' 
                ? 'animate-pulse' 
                : 'animate-bounce'
            }`}
          />
          {/* Glow effect */}
          <div className={`absolute inset-0 blur-3xl opacity-30 ${
            petStatus === 'sleeping' 
              ? 'bg-blue-400' 
              : 'bg-yellow-400'
          }`}></div>
        </div>
        
        {/* Status Badge */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-lg">
          <p className="text-white text-lg font-medium">
            Buddy is {petStatus === 'sleeping' ? '😴 Sleeping' : '🎾 Playing'}
          </p>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="relative z-10 flex items-center gap-4 pb-8">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-4">
          <div className="w-12 h-12 flex items-center justify-center text-white text-2xl">
            🔦
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-4">
          <div className="w-12 h-12 flex items-center justify-center text-white text-2xl">
            📷
          </div>
        </div>
      </div>

      {/* Swipe up indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 text-sm">
        Swipe up to unlock
      </div>
    </div>
  );
};

export default Lockscreen;
