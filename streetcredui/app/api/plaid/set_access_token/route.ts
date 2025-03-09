import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';
import { NextResponse } from 'next/server';

const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || 'sandbox';

const configuration = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': PLAID_CLIENT_ID,
      'PLAID-SECRET': PLAID_SECRET,
    },
  },
});

const client = new PlaidApi(configuration);

export async function POST(request: Request) {
  try {
    const { public_token } = await request.json();

    const tokenResponse = await client.itemPublicTokenExchange({
      public_token: public_token,
    });

    const accessToken = tokenResponse.data.access_token;
    const itemId = tokenResponse.data.item_id;

    // Here you would typically store the access_token in your database
    // associated with the user's account

    return NextResponse.json({
      access_token: accessToken,
      item_id: itemId,
    });
  } catch (error) {
    console.error('Error exchanging public token:', error);
    return NextResponse.json(
      { error: 'Failed to exchange public token' },
      { status: 500 }
    );
  }
} 