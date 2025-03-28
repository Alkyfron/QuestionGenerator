import { users, type User, type InsertUser, type ConversationStarter, type InsertConversationStarter } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Conversation starters methods
  getAllConversationStarters(): Promise<ConversationStarter[]>;
  getRandomConversationStarter(): Promise<ConversationStarter>;
  createConversationStarter(starter: InsertConversationStarter): Promise<ConversationStarter>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private conversationStarters: Map<number, ConversationStarter>;
  currentUserId: number;
  currentStarterId: number;

  constructor() {
    this.users = new Map();
    this.conversationStarters = new Map();
    this.currentUserId = 1;
    this.currentStarterId = 1;
    
    // Initialize with default conversation starters
    this.initializeDefaultConversationStarters();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getAllConversationStarters(): Promise<ConversationStarter[]> {
    return Array.from(this.conversationStarters.values());
  }
  
  async getRandomConversationStarter(): Promise<ConversationStarter> {
    const starters = Array.from(this.conversationStarters.values());
    const randomIndex = Math.floor(Math.random() * starters.length);
    return starters[randomIndex];
  }
  
  async createConversationStarter(starter: InsertConversationStarter): Promise<ConversationStarter> {
    const id = this.currentStarterId++;
    const conversationStarter: ConversationStarter = { ...starter, id };
    this.conversationStarters.set(id, conversationStarter);
    return conversationStarter;
  }
  
  private initializeDefaultConversationStarters() {
    const starters = [
      "Ask someone about the best piece of advice they've ever received.",
      "What would you do if you had an extra day each week?",
      "If you could have dinner with any historical figure, who would it be and why?",
      "What's a skill you've always wanted to learn but haven't had the chance to?",
      "What's the most interesting place you've ever traveled to?",
      "If you could live in any fictional world, which would you choose?",
      "What's something you believed as a child that you later found out wasn't true?",
      "What's a movie or book that changed your perspective on something?",
      "If you could instantly become an expert in something, what would it be?",
      "What's something you've done that you never thought you would do?",
      "If you could solve one global problem, what would it be?",
      "What's the most memorable concert or live event you've attended?",
      "What's a hobby or activity you enjoy that might surprise people?",
      "If you had to eat one cuisine for the rest of your life, what would it be?",
      "What's the best gift you've ever received?",
      "What's a small change you've made that had a big impact on your life?",
      "If you could have any animal as a pet, what would it be?",
      "What's something you're looking forward to in the coming months?",
      "What's a tradition you or your family has that you really enjoy?",
      "If you could have any superpower, what would it be and how would you use it?",
      "What's something that made you smile recently?",
      "If you could master any musical instrument instantly, which would you choose?",
      "What's the best piece of technology you own?",
      "What's a book you think everyone should read?",
      "If you could live in any time period, past or future, when would it be?",
      "What's something you've accomplished that you're proud of?",
      "If money was no object, how would you spend your time?",
      "What's the most beautiful place in nature you've visited?",
      "What's a food you hated as a child but love now?",
      "If you could know the absolute truth to one question, what would you ask?",
      "What's the most unusual job you've heard of or had?",
      "If you could instantly learn any language, which would you choose?",
      "What's a game or sport you enjoy playing or watching?",
      "What's something you've created that you're proud of?",
      "If you could have a conversation with your younger self, what would you say?",
      "What's a random fact you know that most people don't?",
      "What's the best advice you've ever given someone?",
      "If you could choose anyone to be your mentor, who would it be?",
      "What's the most adventurous thing you've ever done?",
      "If you could be famous for something, what would you want it to be?",
      "What's a goal you're currently working toward?",
      "What's something you've changed your mind about over time?",
      "If you could witness any event in history, what would it be?",
      "What's a small pleasure in life that you really enjoy?",
      "If you could have dinner with three people, living or dead, who would they be?",
      "What's something you've learned recently that surprised you?",
      "If you could start a business, what kind would it be?",
      "What's a movie, book, or show you can watch/read repeatedly without getting tired of it?",
      "If you had to teach a class on something, what would you teach?",
      "What's something that has exceeded your expectations recently?"
    ];
    
    starters.forEach((text) => {
      this.createConversationStarter({ text });
    });
  }
}

export const storage = new MemStorage();
