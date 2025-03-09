import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // In a real app, you would fetch this from your database or configuration
    const products = ['auth', 'transactions'];
    
    return NextResponse.json({
      products,
      isPaymentInitiation: false,
    });
  } catch (error) {
    console.error('Error getting Plaid info:', error);
    return NextResponse.json(
      { error: 'Failed to get Plaid info' },
      { status: 500 }
    );
  }
} 