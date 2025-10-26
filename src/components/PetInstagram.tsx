import { Camera, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Post {
  id: number;
  imageUrl: string;
  caption: string;
  quote: string;
  petName: string;
  likes: number;
  timestamp: string;
  username: string;
  emoji: string;
  healthLevel: number; // 0-100
  emotionalState: string;
  emotionEmoji: string;
}

const PawIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Main pad */}
    <path d="M12 18c-1.5 0-2.7-1-2.7-2.2 0-1.2 1.2-2.2 2.7-2.2s2.7 1 2.7 2.2c0 1.2-1.2 2.2-2.7 2.2z" 
          fill={filled ? "currentColor" : "none"} />
    {/* Toe pads */}
    <ellipse cx="8.5" cy="11" rx="1.5" ry="2" fill={filled ? "currentColor" : "none"} />
    <ellipse cx="12" cy="9.5" rx="1.5" ry="2.2" fill={filled ? "currentColor" : "none"} />
    <ellipse cx="15.5" cy="11" rx="1.5" ry="2" fill={filled ? "currentColor" : "none"} />
    <ellipse cx="10" cy="13" rx="1.3" ry="1.8" fill={filled ? "currentColor" : "none"} />
    <ellipse cx="14" cy="13" rx="1.3" ry="1.8" fill={filled ? "currentColor" : "none"} />
  </svg>
);

export const PetInstagram = ({ posts }: { posts: Post[] }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-[--shadow-card]">
        <div className="flex items-center gap-2 mb-6">
          <Camera className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Pet Community Feed</h3>
        </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-muted/20 rounded-lg overflow-hidden hover-scale"
            >
              {/* Username and Emoji Header */}
              <div className="flex items-center gap-2 p-3 pb-2">
                <div className="text-2xl">{post.emoji}</div>
                <span className="text-sm font-semibold text-foreground">{post.username}</span>
              </div>
              
              <div className="aspect-square bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center">
                <img
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <div className="flex items-center gap-1.5 text-primary">
                    <PawIcon filled />
                    <span className="font-semibold">{post.likes} paws</span>
                  </div>
                  <span>{post.timestamp}</span>
                </div>
                
                <p className="text-sm text-foreground mb-3">
                  <span className="font-semibold">{post.petName}</span>&apos;s owner: {post.caption}
                </p>
                
                {/* Pet Quote */}
                <div className="bg-muted/30 rounded-lg p-3 mb-3 border-l-2 border-primary/40">
                  <p className="text-xs font-semibold text-foreground mb-1">{post.petName} says:</p>
                  <p className="text-sm text-muted-foreground italic">"{post.quote}"</p>
                </div>
                
                {/* Health and Emotional State */}
                <div className="space-y-2 pt-2 border-t border-border/30">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">Health</span>
                      <span className="font-semibold text-foreground">{post.healthLevel}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-muted/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all"
                        style={{ width: `${post.healthLevel}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground">Mood:</span>
                    <span className="text-lg">{post.emotionEmoji}</span>
                    <span className="font-semibold text-foreground">{post.emotionalState}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              size="lg" 
              className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-primary"
            >
              <Plus className="w-6 h-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card border-border z-50">
            <DropdownMenuItem onClick={() => navigate("/meme-generator")}>
              🎨 Generate Meme
            </DropdownMenuItem>
            <DropdownMenuItem>
              📸 Add Photo
            </DropdownMenuItem>
            <DropdownMenuItem>
              🎥 Add Video
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};
