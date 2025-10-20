import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import lockscreenPreview from "@/assets/lockscreen-full-preview.png";
import catNeutral from "@/assets/cat-neutral.mp4";
import catSleepy from "@/assets/cat-sleepy.mp4";
import catHappy from "@/assets/cat-happy.mp4";
import catSick from "@/assets/cat-sick.mp4";

export const LockscreenSettings = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    toast({
      title: "Widget Preview",
      description: "Lockscreen widget setup coming soon! This feature will be available when connected to our hardware.",
    });
  };

  const handleSetupWidget = () => {
    toast({
      title: "Setup Widget",
      description: "This will guide you through setting up your lockscreen widget on iOS or Android.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-2">
          <Smartphone className="w-6 h-6 text-primary" />
          Lockscreen Widget
        </h2>
        <p className="text-muted-foreground">
          Keep your pet's health and emotions right on your lockscreen
        </p>
      </div>

      {/* Widget Preview */}
      <Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Preview</h3>
        
        <div className="flex justify-center">
          <img 
            src={lockscreenPreview} 
            alt="Lockscreen widget preview" 
            className="max-w-full h-auto rounded-xl shadow-2xl"
          />
        </div>

        <div className="mt-6 pt-6 border-t border-border/30">
          <p className="text-sm font-semibold text-foreground mb-4 text-center">
            🐾 Your pet avatar will mirror your pet's real-time health and emotional status
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <video 
                src={catNeutral} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-lg border border-border/50"
              />
              <p className="text-xs text-center text-muted-foreground font-medium">Neutral</p>
            </div>
            
            <div className="space-y-2">
              <video 
                src={catSleepy} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-lg border border-border/50"
              />
              <p className="text-xs text-center text-muted-foreground font-medium">Sleepy</p>
            </div>
            
            <div className="space-y-2">
              <video 
                src={catHappy} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-lg border border-border/50"
              />
              <p className="text-xs text-center text-muted-foreground font-medium">Happy</p>
            </div>
            
            <div className="space-y-2">
              <video 
                src={catSick} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-lg border border-border/50"
              />
              <p className="text-xs text-center text-muted-foreground font-medium">Sick/Unwell</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Setup Instructions */}
      <Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">How to Set Up</h3>
        
        <div className="space-y-4 text-sm text-muted-foreground">
          <div>
            <h4 className="font-semibold text-foreground mb-2">📱 For iPhone (iOS 16+)</h4>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Long press on your lockscreen</li>
              <li>Tap "Customize" then "Lock Screen"</li>
              <li>Tap "Add Widget" above the time</li>
              <li>Find and select "PetLepathy"</li>
              <li>Choose your pet and customize</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">🤖 For Android</h4>
            <ol className="list-decimal list-inside space-y-1 ml-2">
              <li>Long press on your home screen</li>
              <li>Tap "Widgets"</li>
              <li>Find "PetLepathy" in the widget list</li>
              <li>Drag it to your lockscreen</li>
              <li>Configure your pet settings</li>
            </ol>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/30">
          <p className="text-sm text-muted-foreground mb-4">
            ℹ️ <strong>Note:</strong> This feature requires our PetLepathy hardware sensor to be connected to your pet. 
            The widget will update in real-time based on your pet's health and emotional state.
          </p>
          
          <div className="flex gap-3 flex-wrap">
            <Button onClick={handleSetupWidget}>
              <Smartphone className="w-4 h-4 mr-2" />
              Setup Widget
            </Button>
            <Button variant="outline" onClick={handleDownload}>
              <Download className="w-4 h-4 mr-2" />
              Download Preview
            </Button>
          </div>
        </div>
      </Card>

      {/* Customization Options */}
      <Card className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border border-border/50 p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Customization</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Widget Theme
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button className="p-3 rounded-lg border-2 border-primary bg-black text-white text-xs font-medium">
                Dark
              </button>
              <button className="p-3 rounded-lg border border-border bg-white text-black text-xs font-medium hover:border-primary">
                Light
              </button>
              <button className="p-3 rounded-lg border border-border bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-medium hover:border-primary">
                Gradient
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Display Information
            </label>
            <div className="space-y-2">
              {['Health Status', 'Emotional State', 'Activity Level', 'Last Updated Time'].map((option) => (
                <label key={option} className="flex items-center gap-2 text-sm text-foreground">
                  <input type="checkbox" defaultChecked className="rounded" />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
