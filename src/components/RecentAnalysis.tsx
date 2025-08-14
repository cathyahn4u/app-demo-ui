import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnalysisEntry {
  timestamp: string;
  dominantEmotion: string;
  painLevel: number;
  trend: 'up' | 'down' | 'stable';
}

interface RecentAnalysisProps {
  entries: AnalysisEntry[];
}

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case 'up': return TrendingUp;
    case 'down': return TrendingDown;
    default: return Minus;
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case 'up': return 'text-pain-high';
    case 'down': return 'text-pain-low';
    default: return 'text-muted-foreground';
  }
};

export const RecentAnalysis = ({ entries }: RecentAnalysisProps) => {
  return (
    <Card className="p-6 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 shadow-[--shadow-card]">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Recent Analysis</h3>
      </div>
      
      <div className="space-y-3">
        {entries.map((entry, index) => {
          const TrendIcon = getTrendIcon(entry.trend);
          const trendColor = getTrendColor(entry.trend);
          
          return (
            <div 
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="text-sm text-muted-foreground">
                  {entry.timestamp}
                </div>
                <Badge variant="outline" className="text-xs">
                  {entry.dominantEmotion}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">
                  {entry.painLevel}%
                </span>
                <TrendIcon className={cn("w-4 h-4", trendColor)} />
              </div>
            </div>
          );
        })}
      </div>
      
      {entries.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground text-sm">No recent analysis available</p>
        </div>
      )}
    </Card>
  );
};