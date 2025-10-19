import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import blackCatCharacter from "@/assets/black-cat-character.png";

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
          <div className="relative w-[273px] h-[591px] bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 rounded-[20px] overflow-hidden shadow-2xl">
            {/* Background pattern/image would go here */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Time */}
            <div className="absolute top-4 left-7 text-black font-semibold text-xl">
              9:41
            </div>

            {/* Widget Container */}
            <div className="absolute top-[7px] left-[69px] w-[135px] bg-black rounded-[13.4px] p-1.5 border border-black">
              <div className="flex items-center gap-2">
                {/* Pet Character */}
                <div className="w-[17px] h-[17px] rounded-[4px] overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src={blackCatCharacter} 
                    alt="Pet character" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Pet Name & Info */}
                <div className="flex-1">
                  <div className="text-white text-[8px] font-medium mb-0.5">Shadow</div>
                  <div className="flex items-center gap-0.5">
                    <span className="text-white text-[6px]">Health</span>
                    <div className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden ml-1">
                      <div className="h-full bg-gradient-to-r from-green-400 to-blue-400 rounded-full" style={{ width: '85%' }} />
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    <span className="text-white text-[6px]">Mood</span>
                    <div className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden ml-2">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>

                {/* Status Bars */}
                <div className="flex gap-[2px] items-end h-[17px]">
                  <div className="w-[1.5px] rounded-full bg-gradient-to-t from-green-400 to-green-300" style={{ height: '30%' }} />
                  <div className="w-[1.5px] rounded-full bg-gradient-to-t from-blue-400 to-blue-300" style={{ height: '70%' }} />
                  <div className="w-[1.5px] rounded-full bg-gradient-to-t from-purple-400 to-purple-300" style={{ height: '100%' }} />
                  <div className="w-[1.5px] rounded-full bg-gradient-to-t from-pink-400 to-pink-300" style={{ height: '80%' }} />
                  <div className="w-[1.5px] rounded-full bg-gradient-to-t from-yellow-400 to-yellow-300" style={{ height: '90%' }} />
                  <div className="w-[1.5px] rounded-full bg-gradient-to-t from-green-400 to-green-300" style={{ height: '30%' }} />
                </div>
              </div>
            </div>

            {/* Date/Time at bottom */}
            <div className="absolute bottom-32 left-0 right-0 text-center">
              <div className="text-white text-7xl font-light mb-2">9:41</div>
              <div className="text-white text-lg font-medium">Monday, October 19</div>
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
