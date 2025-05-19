import { Anthropic } from '@anthropic-ai/sdk';

// Initialize the Claude client
export const claudeClient = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY, // Store API key in environment variables
});

/**
 * Send a message to Claude
 * @param {string} prompt - The user's message
 * @returns {Promise<string>} - Claude's response text
 */
export async function askClaude(prompt) {
  try {
    const message = await claudeClient.messages.create({
      model: 'claude-3-sonnet-20240229', // or your preferred Claude model
      max_tokens: 1000,
      messages: [
        { role: 'user', content: prompt }
      ],
    });
    
    return message.content[0].text;
  } catch (error) {
    console.error('Error calling Claude API:', error);
    throw error;
  }
} 