import { json } from "@remix-run/node";

export async function action({ request }) {
  const formData = await request.formData();
  const text = formData.get("text");
  const newsId = formData.get("newsId");
  
  if (!text) {
    return json({ error: "No text provided" }, { status: 400 });
  }
  
  try {
    // In a real implementation, this would call an AI or NLP API
    // Example: OpenAI, Google Cloud NL API, etc.
    // For demo purposes, we'll simulate an API call with a timeout
    
    // Simulated API call
    const explanation = await simulateExplanationAPI(text);
    
    return json({ 
      success: true, 
      newsId,
      explanation 
    });
  } catch (error) {
    console.error("Error getting explanation:", error);
    return json({ 
      error: "Failed to get explanation" 
    }, { status: 500 });
  }
}

// Simulated API function - replace with actual API call in production
async function simulateExplanationAPI(text) {
  // Simulate a more realistic network delay (3-5 seconds)
  const randomDelay = Math.floor(Math.random() * 2000) + 3000; // 3-5 seconds
  await new Promise(resolve => setTimeout(resolve, randomDelay));
  
  // For demo: generate a simple explanation based on the text
  // In production, use a real AI/NLP API here
  const terms = extractKeyTerms(text);
  
  // Build a more detailed response
  const explanation = `
This text discusses ${terms.join(", ")}. The key point is about ${terms[0] || "the market"}.

${generateRandomInsight(terms)}

${generateRandomContext(terms)}

This explanation provides additional context to help understand the original news article.
`.trim();
  
  return explanation;
}

// Generate a random insight based on the identified terms
function generateRandomInsight(terms) {
  if (terms.length === 0) return "";
  
  const insights = [
    `Analysts have been closely monitoring developments in ${terms[0]} recently.`,
    `This relates to broader trends we're seeing in the ${terms[0]} sector.`,
    `Investors should note that ${terms[0]} has been showing significant movement lately.`,
    `This information could impact decisions related to ${terms[0]} investments.`
  ];
  
  return insights[Math.floor(Math.random() * insights.length)];
}

// Generate random contextual information
function generateRandomContext(terms) {
  if (terms.length === 0) return "";
  
  const contexts = [
    `Historical data suggests that such developments in ${terms[0]} often lead to market adjustments.`,
    `Similar patterns in ${terms[0]} have been observed in previous economic cycles.`,
    `Industry experts recommend careful analysis of ${terms[0]} metrics before making decisions.`,
    `The relationship between ${terms[0]} and other economic indicators should be considered.`
  ];
  
  return contexts[Math.floor(Math.random() * contexts.length)];
}

// Extract some key terms for the demo explanation
function extractKeyTerms(text) {
  const terms = [];
  const words = text.toLowerCase().split(/\W+/);
  
  // List of business/finance keywords to look for
  const keywords = [
    "market", "stock", "investment", "revenue", "profit", "earnings", 
    "growth", "decline", "forecast", "financial", "company", "business",
    "economy", "industry", "sector", "shares", "investors", "trading",
    "analyst", "report", "quarter", "fiscal", "performance", "strategy"
  ];
  
  // Find keywords in the text
  keywords.forEach(keyword => {
    if (words.includes(keyword)) {
      terms.push(keyword);
    }
  });
  
  // If no keywords found, use some generic terms
  if (terms.length === 0) {
    const randomTerms = ["market trends", "business developments", "financial news"];
    terms.push(randomTerms[Math.floor(Math.random() * randomTerms.length)]);
  }
  
  return terms;
} 