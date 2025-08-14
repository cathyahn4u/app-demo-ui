import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PainGaugeProps {
  painLevel: number; // 0-100
  lastUpdated: string;
}

const getPainLevel = (level: number) => {
  if (level <= 30) return {
    status: 'low',
    label: 'Low Risk',
    icon: CheckCircle,
    color: 'pain-low',
    description: 'Your pet appears comfortable with minimal signs of discomfort'
  };
  if (level <= 70) return {
    status: 'medium',
    label: 'Moderate',
    icon: AlertCircle,
    color: 'pain-medium',
    description: 'Some signs of discomfort detected, monitoring recommended'
  };
  return {
    status: 'high',
    label: 'High Risk',
    icon: AlertTriangle,
    color: 'pain-high',
    description: 'Significant signs of pain detected, veterinary consultation advised'
  };
};

export const PainGauge = ({ painLevel, lastUpdated }: PainGaugeProps) => {
  const painInfo = getPainLevel(painLevel);
  const Icon = painInfo.icon;
  
  return (
    <Card className="p-4 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 shadow-[--shadow-card]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-foreground">Pain Analysis</h3>
        <Badge 
          variant="outline" 
          className={cn(
            "border-current text-xs",
            `text-${painInfo.color} border-${painInfo.color}/30`
          )}
        >
          {painInfo.label}
        </Badge>
      </div>
      
      <div className="flex items-center gap-4 mb-4">
        <div className={cn(
          "flex items-center justify-center w-12 h-12 rounded-full",
          `bg-${painInfo.color}/10 text-${painInfo.color}`
        )}>
          <Icon className="w-5 h-5" />
        </div>
        
        <div className="flex-1">
          <div className="text-2xl font-bold text-foreground">
            {painLevel}%
          </div>
          <p className="text-xs text-muted-foreground">
            Pain Probability
          </p>
        </div>
      </div>
      
      <div className="space-y-3">
        <Progress 
          value={painLevel} 
          className={cn(
            "h-2",
            `[&>div]:bg-gradient-to-r [&>div]:from-${painInfo.color} [&>div]:to-${painInfo.color}/80`
          )}
        />
        
        <div className="bg-muted/30 rounded-lg p-2">
          <p className="text-xs text-muted-foreground mb-1">Assessment</p>
          <p className="text-xs text-foreground leading-relaxed">
            {painInfo.description}
          </p>
        </div>
        
        <p className="text-xs text-muted-foreground text-center">
          Last updated: {lastUpdated}
        </p>
      </div>
    </Card>
  );
};