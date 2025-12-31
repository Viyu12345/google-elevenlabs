
import { GoogleGenAI, Type } from "@google/genai";
import { DocType, AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });



export async function analyzeDocument(
  content: string,
  docType: DocType,
  isImage: boolean = false
): Promise<AnalysisResult> {
  const model = ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: isImage ? [
      {
        text: `Analyze this ${docType} image. Extract and simplify the information.`
      },
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: content
        }
      }
    ] : `Analyze and simplify the following ${docType} content.
    
    CONTENT:
    ${content}
    
    Your goal is to make it readable for a person with no expertise in this field.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING, description: "A high-level 2-sentence summary of the document." },
          simplifiedContent: { type: Type.STRING, description: "The main content rewritten in simple, plain English." },
          keyTerms: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                term: { type: Type.STRING },
                explanation: { type: Type.STRING }
              },
              required: ["term", "explanation"]
            }
          },
          actionItems: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Any immediate steps the user should take based on this document."
          }
        },
        required: ["summary", "simplifiedContent", "keyTerms", "actionItems"]
      }
    }
  });

  const response = await model;
  return JSON.parse(response.text || '{}');
}
