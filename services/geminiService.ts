import { GoogleGenAI } from "@google/genai";

export const generateWelcomeMessage = async (name: string, interests: string[]): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "হাত পাখার বিজয়ের লক্ষে আপনার এই যোগদানকে আমরা স্বাগত জানাই। আল্লাহ আমাদের সহায় হোন।";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Prompting for an Election Campaign specific welcome message
    const prompt = `
      Write a short, energetic, and dignified welcome message (max 25 words) in Bengali for a new election campaign volunteer named ${name} joining the team of Mufti Syed Muhammad Fayzul Karim.
      The volunteer selected these election duties: ${interests.join(", ")}.
      The tone should be: Patriotic, Determined, and Islamic.
      Keywords to use: Haat Pakha (Hand Fan), Victory, Amanat (Trust), Vote.
      Return ONLY the Bengali text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating welcome message:", error);
    return "হাত পাখার বিজয়ের লক্ষে আপনার এই যোগদানকে আমরা স্বাগত জানাই। আল্লাহ আমাদের সহায় হোন।";
  }
};