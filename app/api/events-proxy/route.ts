import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.indoglobaltradefair.com/api/events/');
    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error('Error in fallback proxy route:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: error.response?.status || 500 }
    );
  }
}
