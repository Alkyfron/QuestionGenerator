import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import ConversationCard from "@/components/ConversationCard";
import FeatureHighlights from "@/components/FeatureHighlights";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { type ConversationStarter } from "@shared/schema";

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { data, refetch, isLoading, isError } = useQuery<ConversationStarter>({
    queryKey: ["/api/conversation-starters/random"],
    refetchOnWindowFocus: false,
  });

  const handleGenerateStarter = async () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    await refetch();
    
    // Reset transition state after a short delay
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      <Header />
      
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="max-w-3xl w-full">
          <ConversationCard 
            starter={data?.text}
            isLoading={isLoading}
            isError={isError}
            isTransitioning={isTransitioning}
          />
          
          <div className="flex justify-center">
            <Button 
              onClick={handleGenerateStarter}
              disabled={isLoading || isTransitioning}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-7 px-8 rounded-full text-lg md:text-xl transition-all hover:translate-y-[-2px] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/50"
              size="lg"
            >
              <span className="flex items-center justify-center">
                <RefreshCw className="h-5 w-5 mr-2" />
                New Conversation Starter
              </span>
            </Button>
          </div>

          <FeatureHighlights />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
