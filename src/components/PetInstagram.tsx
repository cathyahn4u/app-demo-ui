import { Camera } from "lucide-react";

interface Post {
  id: number;
  imageUrl: string;
  caption: string;
  likes: number;
  timestamp: string;
}

const PawIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <ellipse cx="12" cy="16" rx="3" ry="4" />
    <ellipse cx="7" cy="11" rx="2" ry="3" transform="rotate(-15 7 11)" />
    <ellipse cx="12" cy="9" rx="2" ry="3" />
    <ellipse cx="17" cy="11" rx="2" ry="3" transform="rotate(15 17 11)" />
    <ellipse cx="9" cy="13" rx="1.5" ry="2" transform="rotate(-20 9 13)" />
    <ellipse cx="15" cy="13" rx="1.5" ry="2" transform="rotate(20 15 13)" />
  </svg>
);

export const PetInstagram = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-[--shadow-card]">
      <div className="flex items-center gap-2 mb-6">
        <Camera className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">Buddy's Moments</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-muted/20 rounded-lg overflow-hidden hover-scale"
          >
            <div className="aspect-square bg-gradient-to-br from-muted/40 to-muted/20 flex items-center justify-center">
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <p className="text-sm text-foreground mb-2">{post.caption}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5 text-primary">
                  <PawIcon filled />
                  <span className="font-semibold">{post.likes}</span>
                </div>
                <span>{post.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
