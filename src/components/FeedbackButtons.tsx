import { Button } from "./ui/button";
import { toast } from "sonner";

interface FeedbackButtonsProps {
  onFeedback: (activity: string) => void;
}

export const FeedbackButtons = ({ onFeedback }: FeedbackButtonsProps) => {
  const activities = [
    { label: "Eating", emoji: "🍖", value: "eating" },
    { label: "Playing", emoji: "⚽", value: "playing" },
    { label: "Sleeping", emoji: "😴", value: "sleeping" },
    { label: "Walking", emoji: "🚶", value: "walking" },
    { label: "Unusual", emoji: "⚠️", value: "unusual" },
  ];

  const handleClick = (activity: string, label: string) => {
    onFeedback(activity);
    toast.success(`Logged: ${label}`, {
      description: "Thank you for the feedback!",
    });
  };

  return (
    <div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-[--shadow-card]">
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Log Activity</h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {activities.map((activity) => (
          <Button
            key={activity.value}
            onClick={() => handleClick(activity.value, activity.label)}
            variant="outline"
            className="h-auto py-4 flex flex-col gap-2 bg-white/50 backdrop-blur-sm border-white/30 hover:bg-white/70 hover:scale-105 transition-all rounded-2xl"
          >
            <span className="text-3xl">{activity.emoji}</span>
            <span className="text-sm font-medium">{activity.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};
