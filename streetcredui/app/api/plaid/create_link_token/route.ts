import { Configuration, PlaidApi, PlaidEnvironments, Products } from 'plaid';
import { NextResponse } from 'next/server';
import PlaidLink from '@/components/plaid-link';

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

export async function POST() {
  try {
    const tokenResponse = await client.linkTokenCreate({
      user: { client_user_id: 'user-' + Math.random() },
      client_name: 'StreetCred',
      products: [Products.Auth, Products.Transactions, Products.Liabilities],
      country_codes: ['US'],
      language: 'en',
      webhook: 'https://webhook.example.com',
    });

    return NextResponse.json({ link_token: tokenResponse.data.link_token });
  } catch (error) {
    console.error('Error creating link token:', error);
    return NextResponse.json(
      { error: 'Failed to create link token' },
      { status: 500 }
    );
  }
} 