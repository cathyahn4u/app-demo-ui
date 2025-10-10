import { Search, PawPrint, Settings, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const BottomNav = ({ activeTab = "analyze", onTabChange }: BottomNavProps) => {
  const navItems = [
    { id: "analyze", label: "Analyze", icon: LineChart },
    { id: "share", label: "Share", icon: PawPrint },
    { id: "search", label: "Search", icon: Search },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange?.(item.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
