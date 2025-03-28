import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface ConversationCardProps {
  starter?: string;
  isLoading: boolean;
  isError: boolean;
  isTransitioning: boolean;
}

export default function ConversationCard({ 
  starter, 
  isLoading, 
  isError,
  isTransitioning
}: ConversationCardProps) {
  return (
    <Card className="bg-white rounded-xl shadow-lg p-6 md:p-10 mb-8 transition-all duration-300 transform hover:shadow-xl">
      <div className="min-h-[180px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isLoading && !isTransitioning ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Skeleton className="h-8 w-3/4 mx-auto mb-4" />
              <Skeleton className="h-8 w-full mx-auto mb-4" />
              <Skeleton className="h-8 w-2/3 mx-auto" />
            </motion.div>
          ) : isError ? (
            <motion.p
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-center text-red-500"
            >
              Oops! Something went wrong. Please try again.
            </motion.p>
          ) : (
            <motion.p
              key={starter || 'default'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-center text-textDark"
            >
              {starter || "Ask someone about the best piece of advice they've ever received."}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
