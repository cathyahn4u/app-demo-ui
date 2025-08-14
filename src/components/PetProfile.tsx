import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface PetProfileProps {
  name: string;
  breed: string;
  age: number;
  weight: string;
  lastCheckup: string;
  avatarUrl?: string;
}

export const PetProfile = ({ 
  name, 
  breed, 
  age, 
  weight, 
  lastCheckup, 
  avatarUrl 
}: PetProfileProps) => {
  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 shadow-[--shadow-card]">
      <div className="flex items-center gap-4">
        <Avatar className="w-16 h-16 ring-2 ring-primary/20">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-primary/10 to-accent/10">
            {name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-bold text-foreground">{name}</h2>
            <Badge variant="secondary" className="text-xs">
              {age} years
            </Badge>
          </div>
          
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span className="bg-muted/50 px-2 py-1 rounded-md">{breed}</span>
            <span className="bg-muted/50 px-2 py-1 rounded-md">{weight}</span>
          </div>
          
          <p className="text-xs text-muted-foreground mt-2">
            Last checkup: {lastCheckup}
          </p>
        </div>
      </div>
    </Card>
  );
};