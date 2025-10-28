import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload, Download, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import logoIcon from "@/assets/logo-icon.png";

type MemeStep = "upload" | "select-caption" | "edit-meme" | "share";

interface GeneratedCaption {
  id: number;
  text: string;
}

const MemeGenerator = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<MemeStep>("upload");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [captions, setCaptions] = useState<GeneratedCaption[]>([]);
  const [selectedCaption, setSelectedCaption] = useState<GeneratedCaption | null>(null);
  const [captionPosition, setCaptionPosition] = useState({ x: 50, y: 20 });
  const [isGenerating, setIsGenerating] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateCaptions = async () => {
    setIsGenerating(true);
    try {
      // Mock AI-generated captions for now
      // TODO: Replace with actual AI generation when Lovable Cloud is enabled
      const mockCaptions: GeneratedCaption[] = [
        { id: 1, text: "New profile pic just dropped." },
        { id: 2, text: "Gotta get that pawfect angle." },
        { id: 3, text: "Trying to get that perfect selfie angle like..." },
        { id: 4, text: "Just trying to get a good pawtrait" },
        { id: 5, text: "Hello world." }
      ];
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setCaptions(mockCaptions);
      setStep("select-caption");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate captions. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCaptionSelect = (caption: GeneratedCaption) => {
    setSelectedCaption(caption);
    setStep("edit-meme");
  };

  useEffect(() => {
    if (step === "edit-meme" && canvasRef.current && uploadedImage && selectedCaption) {
      drawMeme();
    }
  }, [step, uploadedImage, selectedCaption, captionPosition]);

  const drawMeme = () => {
    const canvas = canvasRef.current;
    if (!canvas || !uploadedImage || !selectedCaption) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      // Set canvas size
      canvas.width = 1080;
      canvas.height = 1080;

      // Calculate crop dimensions for center-cropping to 1:1
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const minDim = Math.min(imgWidth, imgHeight);
      
      // Calculate crop position (centered)
      const cropX = (imgWidth - minDim) / 2;
      const cropY = (imgHeight - minDim) / 2;

      // Draw the cropped image (center-cropped to square)
      ctx.drawImage(
        img,
        cropX, cropY, minDim, minDim,  // Source: crop from center
        0, 0, canvas.width, canvas.height  // Destination: fill canvas
      );

      // Draw blurred bottom section with gradual fade
      const blurHeight = 180;
      const gradientHeight = 60;
      
      // Draw fully blurred section (also needs center-crop)
      ctx.filter = "blur(10px)";
      ctx.drawImage(
        img,
        cropX, cropY + (minDim - blurHeight), minDim, blurHeight,  // Source: bottom of cropped area
        0, canvas.height - blurHeight, canvas.width, blurHeight  // Destination: bottom of canvas
      );
      ctx.filter = "none";

      // Create gradient overlay for smooth transition
      const gradient = ctx.createLinearGradient(0, canvas.height - blurHeight - gradientHeight, 0, canvas.height - blurHeight + 20);
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(0.5, "rgba(0, 0, 0, 0.15)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.3)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, canvas.height - blurHeight - gradientHeight, canvas.width, blurHeight + gradientHeight);
      
      // Add semi-transparent overlay on bottom
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, canvas.height - 120, canvas.width, 120);

      // Draw caption
      ctx.font = "bold 48px Arial";
      ctx.fillStyle = "white";
      ctx.strokeStyle = "black";
      ctx.lineWidth = 4;
      ctx.textAlign = "center";
      
      const captionX = (captionPosition.x / 100) * canvas.width;
      const captionY = (captionPosition.y / 100) * canvas.height;
      
      // Word wrap caption
      const words = selectedCaption.text.split(" ");
      const lines: string[] = [];
      let currentLine = "";
      
      words.forEach(word => {
        const testLine = currentLine + word + " ";
        const metrics = ctx.measureText(testLine);
        if (metrics.width > canvas.width - 100 && currentLine !== "") {
          lines.push(currentLine);
          currentLine = word + " ";
        } else {
          currentLine = testLine;
        }
      });
      lines.push(currentLine);

      lines.forEach((line, i) => {
        const y = captionY + (i * 56);
        ctx.strokeText(line, captionX, y);
        ctx.fillText(line, captionX, y);
      });

      // Draw pet name and character (bottom right)
      ctx.font = "bold 32px Arial";
      ctx.textAlign = "right";
      ctx.fillStyle = "white";
      ctx.fillText("🐈‍⬛ Midnight", canvas.width - 30, canvas.height - 45);

      // Draw PetLepathy logo and text (bottom left)
      const logo = new Image();
      logo.onload = () => {
        const logoSize = 36;
        ctx.drawImage(logo, 30, canvas.height - 70, logoSize, logoSize);
        
        ctx.textAlign = "left";
        ctx.font = "bold 28px Arial";
        ctx.fillText("PetLepathy", 75, canvas.height - 45);
      };
      logo.src = logoIcon;
    };
    img.src = uploadedImage;
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "petlepathy-meme.png";
        a.click();
        URL.revokeObjectURL(url);
        
        toast({
          title: "Success!",
          description: "Meme downloaded successfully!"
        });
      }
    });
  };

  const handleShare = async () => {
    const url = "https://pet-lepathy.com/app-demo/meme-generation";
    
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied!",
        description: "Share this link so others can create their own pet memes."
      });
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually: " + url,
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background/90 pb-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Meme Generator</h1>
          <p className="text-muted-foreground">Create hilarious memes with AI-powered captions</p>
        </div>

        {/* Upload Step */}
        {step === "upload" && (
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center">
            <div className="mb-6">
              <Upload className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">Upload Your Photo</h2>
              <p className="text-muted-foreground">Choose a photo of your pet to create a meme</p>
            </div>
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              className="hidden"
            />
            
            {uploadedImage ? (
              <div className="space-y-4">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="max-w-full max-h-96 mx-auto rounded-lg"
                />
                <div className="flex gap-3 justify-center">
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Change Photo
                  </Button>
                  <Button
                    onClick={generateCaptions}
                    disabled={isGenerating}
                  >
                    {isGenerating ? "Generating..." : "Generate Captions"}
                  </Button>
                </div>
              </div>
            ) : (
              <Button
                size="lg"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-5 h-5 mr-2" />
                Choose Photo
              </Button>
            )}
          </div>
        )}

        {/* Select Caption Step */}
        {step === "select-caption" && (
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">
              Choose Your Caption
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Select one of these AI-generated captions
            </p>
            
            <div className="space-y-3">
              {captions.map((caption) => (
                <button
                  key={caption.id}
                  onClick={() => handleCaptionSelect(caption)}
                  className="w-full p-4 bg-muted/20 hover:bg-muted/40 rounded-lg text-left transition-colors border border-border/50 hover:border-primary/50"
                >
                  <p className="text-foreground">{caption.text}</p>
                </button>
              ))}
            </div>
            
            <Button
              variant="outline"
              onClick={() => setStep("upload")}
              className="mt-6 w-full"
            >
              Back to Upload
            </Button>
          </div>
        )}

        {/* Edit Meme Step */}
        {step === "edit-meme" && selectedCaption && (
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">
                Preview Your Meme
              </h2>
              
              <div className="mb-6">
                <canvas
                  ref={canvasRef}
                  className="max-w-full h-auto mx-auto rounded-lg border border-border"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Caption Position (Vertical)
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="40"
                    value={captionPosition.y}
                    onChange={(e) => setCaptionPosition({ ...captionPosition, y: parseInt(e.target.value) })}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                Share Your Meme
              </h3>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button onClick={handleDownload} variant="default">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button onClick={handleShare} variant="outline">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setStep("select-caption")}
                >
                  Change Caption
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemeGenerator;
