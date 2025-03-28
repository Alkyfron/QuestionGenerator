import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const conversationStarters = pgTable("conversation_starters", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertConversationStarterSchema = createInsertSchema(conversationStarters).pick({
  text: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertConversationStarter = z.infer<typeof insertConversationStarterSchema>;
export type ConversationStarter = typeof conversationStarters.$inferSelect;
