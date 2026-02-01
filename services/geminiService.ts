
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI exclusively with process.env.API_KEY
// We wrap this in a safe accessor to prevent app-crash if key is missing
let aiInstance: any = null;

const getAI = () => {
  if (aiInstance) return aiInstance;

  // Safety check for empty key to prevent immediate throw
  const key = process.env.API_KEY;
  if (!key || key === 'undefined') {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
    return null;
  }

  try {
    aiInstance = new GoogleGenAI({ apiKey: key });
    return aiInstance;
  } catch (e) {
    console.error("Failed to initialize Gemini:", e);
    return null;
  }
};

export const getAnimalFact = async (animalName: string): Promise<string> => {
  try {
    const ai = getAI();
    if (!ai) return "You completed the puzzle!";

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Give me one interesting, short, and surprising fact about a ${animalName} for a puzzle game reward. Max 20 words.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text || "You completed the puzzle!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Great job assembling this amazing creature!";
  }
};

export const getHint = async (levelTitle: string, remainingPartsCount: number): Promise<string> => {
  try {
    const ai = getAI();
    if (!ai) return "Keep going, you're doing great!";

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `A user is playing a 3D puzzle game. They are working on "${levelTitle}". They have ${remainingPartsCount} pieces left. Give them a quick encouraging hint. Max 15 words.`,
      config: {
        temperature: 1,
      },
    });
    return response.text || "Keep going, you're doing great!";
  } catch (error) {
    return "Try matching the shapes to the ghost outline!";
  }
};
