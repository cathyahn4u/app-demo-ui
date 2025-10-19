import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import blackCatAvatar from "@/assets/black-cat-character.png";

export const AvatarGenerator = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedAvatar, setGeneratedAvatar] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file",
          description: "Please select an image file",
          variant: "destructive",
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setGeneratedAvatar(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateAvatar = () => {
    if (!selectedImage) return;

    setGeneratedAvatar(blackCatAvatar);
    
    toast({
      title: "Avatar generated!",
      description: "Your pet's stylized avatar is ready",
    });
  };

  return (
    <Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Upload Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Upload className="w-5 h-5 text-primary" />
            Upload Pet Photo
          </h3>
          
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-colors"
          >
            {selectedImage ? (
              <img 
                src={selectedImage} 
                alt="Selected pet" 
                className="max-h-64 mx-auto rounded-lg object-contain"
              />
            ) : (
              <div className="space-y-3">
                <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload your pet's photo
                </p>
              </div>
            )}
          </div>

          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />

          <Button
            onClick={handleGenerateAvatar}
            disabled={!selectedImage}
            className="w-full bg-gradient-to-br from-[hsl(237,85%,73%)]/80 to-[hsl(175,89%,83%)]/80 hover:from-[hsl(237,85%,68%)]/90 hover:to-[hsl(175,89%,78%)]/90"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Generate Avatar
          </Button>
        </div>

        {/* Result Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Generated Avatar
          </h3>

          <div className="border border-border rounded-lg p-8 text-center min-h-[300px] flex items-center justify-center bg-muted/20">
            {generatedAvatar ? (
              <img 
                src={generatedAvatar} 
                alt="Generated avatar" 
                className="max-h-64 mx-auto rounded-lg object-contain"
              />
            ) : (
              <p className="text-sm text-muted-foreground">
                Your stylized avatar will appear here
              </p>
            )}
          </div>

          {generatedAvatar && (
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = generatedAvatar;
                link.download = 'pet-avatar.png';
                link.click();
              }}
              variant="outline"
              className="w-full"
            >
              Download Avatar
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
