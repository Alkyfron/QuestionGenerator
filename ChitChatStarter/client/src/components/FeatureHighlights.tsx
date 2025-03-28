import { Card } from "@/components/ui/card";
import { MessageSquare, Plus, Smartphone } from "lucide-react";

export default function FeatureHighlights() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="p-6 rounded-lg shadow text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
          <MessageSquare className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-bold text-lg text-primary mb-2">50+ Conversation Starters</h3>
        <p className="text-textDark">Diverse collection of icebreakers for any social situation</p>
      </Card>
      
      <Card className="p-6 rounded-lg shadow text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
          <Plus className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-bold text-lg text-primary mb-2">One-Click Generation</h3>
        <p className="text-textDark">Simple interface to quickly get a new conversation starter</p>
      </Card>
      
      <Card className="p-6 rounded-lg shadow text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
          <Smartphone className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-bold text-lg text-primary mb-2">Mobile Friendly</h3>
        <p className="text-textDark">Works perfectly on all devices, take it to your next event</p>
      </Card>
    </div>
  );
}
