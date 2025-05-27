import { NextResponse } from 'next/server';
import { askClaude } from '../../../lib/claude';

export async function POST(request) {
  try {
    // Parse request body
    const { prompt } = await request.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }
    
    // Call Claude API
    const response = await askClaude(prompt);
    
    // Return the response
    return NextResponse.json({ response });
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to communicate with Claude' },
      { status: 500 }
    );
  }
} 