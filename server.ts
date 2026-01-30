import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function translateText(text: string) {
  const prompt = `
  You are a Blox Fruits Translator. 
  1. If input is Arabic Script (مرحبا) or Arabizi (hakada, kifach), translate to English.
  2. If input is English, translate to Arabic script.
  3. Analyze trade values if relevant.
  
  Input: "${text}"
  `;
  
  const result = await model.generateContent(prompt);
  return result.response.text();
}
