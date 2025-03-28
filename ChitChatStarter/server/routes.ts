import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get a random conversation starter
  app.get("/api/conversation-starters/random", async (req, res) => {
    try {
      const starter = await storage.getRandomConversationStarter();
      res.json(starter);
    } catch (error) {
      res.status(500).json({ message: "Failed to get a random conversation starter" });
    }
  });

  // API endpoint to get all conversation starters
  app.get("/api/conversation-starters", async (req, res) => {
    try {
      const starters = await storage.getAllConversationStarters();
      res.json(starters);
    } catch (error) {
      res.status(500).json({ message: "Failed to get conversation starters" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
