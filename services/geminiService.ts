import { GoogleGenAI, Type } from "@google/genai";
import { PRODUCTS } from "../constants";

export const searchProductsWithGemini = async (query: string): Promise<{ productIds: string[], message: string }> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found");
      return { productIds: [], message: "API Key missing. Showing all products." };
    }

    const ai = new GoogleGenAI({ apiKey });

    const productCatalog = JSON.stringify(PRODUCTS.map(p => ({ id: p.id, name: p.name, description: p.description, tags: p.tags })));

    const prompt = `
      User Query: "${query}"

      You are a helpful camping assistant for an e-commerce store.
      Based on the User Query, recommend the most relevant products from the following catalog:
      ${productCatalog}

      Return a JSON object with two fields:
      1. "recommendedProductIds": an array of matching product IDs.
      2. "reasoning": a short, friendly message explaining why these were chosen (max 20 words).
      
      If no products strongly match, return generic reasoning and top 3 IDs.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedProductIds: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            reasoning: { type: Type.STRING }
          }
        }
      }
    });

    const result = JSON.parse(response.text || "{}");
    return {
      productIds: result.recommendedProductIds || [],
      message: result.reasoning || "Here are some items you might like!"
    };

  } catch (error) {
    console.error("Gemini Search Error:", error);
    return { productIds: [], message: "Sorry, I couldn't reach the camp guide. Here are our top picks." };
  }
};