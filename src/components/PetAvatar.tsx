import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PetAvatarProps {
  status: 'sleeping' | 'active' | 'eating' | 'pain' | 'happy';
  petName: string;
  breed: string;
}

export const PetAvatar = ({ status, petName, breed }: PetAvatarProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getStatusEmoji = () => {
    switch (status) {
      case 'sleeping': return '😴';
      case 'active': return '🐕';
      case 'eating': return '🍖';
      case 'pain': return '😣';
      case 'happy': return '😊';
      default: return '🐕';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'sleeping': return 'from-calm/20 to-calm/5';
      case 'active': return 'from-happy/20 to-happy/5';
      case 'eating': return 'from-primary/20 to-primary/5';
      case 'pain': return 'from-pain-high/20 to-pain-high/5';
      case 'happy': return 'from-happy/20 to-happy/5';
      default: return 'from-primary/20 to-primary/5';
    }
  };

  return (
    <div className="relative">
      <motion.div
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${getStatusColor()} backdrop-blur-xl border border-white/20 p-8`}
        animate={isAnimating ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
            className="text-8xl"
            animate={
              status === 'sleeping' 
                ? { y: [0, -5, 0] }
                : status === 'active'
                ? { rotate: [0, -10, 10, -10, 0] }
                : status === 'eating'
                ? { scale: [1, 1.1, 1] }
                : {}
            }
            transition={{ duration: 2, repeat: Infinity }}
          >
            {getStatusEmoji()}
          </motion.div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">{petName}</h2>
            <p className="text-muted-foreground">{breed}</p>
          </div>

          <div className="mt-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-sm border border-white/30">
            <span className="text-sm font-medium text-foreground capitalize">{status}</span>
          </div>
        </div>
      </motion.div>

      {/* Pulse effect for pain status */}
      <AnimatePresence>
        {status === 'pain' && (
          <motion.div
            className="absolute inset-0 rounded-3xl bg-pain-high/20"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.1, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
