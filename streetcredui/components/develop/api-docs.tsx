"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Copy, Download, ExternalLink } from "lucide-react"

export function ApiDocs() {
  const endpoints = [
    {
      name: "Get Credit Score",
      method: "POST",
      path: "/v1/credit-score",
      description: "Generate a credit score based on traditional and on-chain data",
      request: `{
  "wallet_address": "0x1234...",
  "bank_connection_id": "plaid_id_123",
  "include_factors": true
}`,
      response: `{
  "score": 742,
  "score_range": {
    "min": 300,
    "max": 850
  },
  "category": "Excellent",
  "factors": [
    {
      "name": "Payment History",
      "score": 95,
      "category": "Excellent"
    },
    {
      "name": "Credit Utilization",
      "score": 75,
      "category": "Good"
    },
    {
      "name": "On-Chain Activity",
      "score": 90,
      "category": "Excellent"
    }
  ]
}`,
    },
    {
      name: "Get Loan Eligibility",
      method: "POST",
      path: "/v1/loan-eligibility",
      description: "Check if a user is eligible for a loan based on their credit score",
      request: `{
  "wallet_address": "0x1234...",
  "bank_connection_id": "plaid_id_123",
  "loan_type": "personal",
  "loan_amount": 10000
}`,
      response: `{
  "eligible": true,
  "max_loan_amount": 15000,
  "interest_rate_range": {
    "min": 5.2,
    "max": 7.5
  },
  "term_options": [12, 24, 36, 48, 60],
  "recommended_term": 36
}`,
    },
    {
      name: "Connect Bank Account",
      method: "POST",
      path: "/v1/connect-bank",
      description: "Generate a link token for Plaid integration",
      request: `{
  "user_id": "user_123",
  "products": ["transactions", "assets"]
}`,
      response: `{
  "link_token": "link-sandbox-12345...",
  "expiration": "2025-03-08T23:59:59Z"
}`,
    },
  ]

  const sdkExamples = {
    javascript: `// Install the SDK
// npm install @streetcred/sdk

import { StreetCred } from '@streetcred/sdk';

// Initialize the client
const streetcred = new StreetCred({
  apiKey: 'YOUR_API_KEY',
  environment: 'production' // or 'sandbox'
});

// Get a credit score
async function getCreditScore() {
  try {
    const score = await streetcred.getCreditScore({
      walletAddress: '0x1234...',
      bankConnectionId: 'plaid_id_123',
      includeFactors: true
    });
    
    console.log('Credit Score:', score.score);
    console.log('Category:', score.category);
    
    // Use the score in your application
    if (score.score > 700) {
      // Approve loan
    } else {
      // Request additional information
    }
  } catch (error) {
    console.error('Error getting credit score:', error);
  }
}

getCreditScore();`,

    python: `# Install the SDK
# pip install streetcred-sdk

from streetcred import StreetCred

# Initialize the client
streetcred = StreetCred(
    api_key='YOUR_API_KEY',
    environment='production'  # or 'sandbox'
)

# Get a credit score
def get_credit_score():
    try:
        score = streetcred.get_credit_score(
            wallet_address='0x1234...',
            bank_connection_id='plaid_id_123',
            include_factors=True
        )
        
        print(f"Credit Score: {score.score}")
        print(f"Category: {score.category}")
        
        # Use the score in your application
        if score.score > 700:
            # Approve loan
            pass
        else:
            # Request additional information
            pass
    except Exception as e:
        print(f"Error getting credit score: {e}")

get_credit_score()`,

    solidity: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IStreetCred {
    function getCreditScore(address user) external view returns (uint256 score);
}

contract LendingProtocol {
    IStreetCred public streetCred;
    uint256 public minimumCreditScore = 700;
    
    constructor(address _streetCredAddress) {
        streetCred = IStreetCred(_streetCredAddress);
    }
    
    function requestLoan(uint256 amount) external returns (bool) {
        // Get the user's credit score from StreetCred
        uint256 creditScore = streetCred.getCreditScore(msg.sender);
        
        // Check if the user meets the minimum credit score requirement
        if (creditScore >= minimumCreditScore) {
            // Approve and process the loan
            _processLoan(msg.sender, amount);
            return true;
        } else {
            // Reject the loan due to insufficient credit score
            return false;
        }
    }
    
    function _processLoan(address borrower, uint256 amount) internal {
        // Loan processing logic
        // ...
    }
}`,
  }

  return (
    <div className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <h2 className="text-3xl font-bold">API Documentation</h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Button variant="outline" className="border-[#363636]/10 text-[#363636]/80">
              <Download className="mr-2 h-4 w-4" />
              Download Docs
            </Button>
            <Button className="bg-[#e72c61] hover:bg-[#e72c61]">Get API Keys</Button>
          </div>
        </div>

        <Card className="bg-[#f5f5f5]/80 border-[#363636]/10 mb-8">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed mb-4">
              The StreetCred API allows you to integrate comprehensive credit scoring into your lending platform. Our
              RESTful API provides endpoints for generating credit scores, checking loan eligibility, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-[#363636]/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Base URL</h3>
                <code className="text-[#e72c61]">https://api.streetcred.io</code>
              </div>
              <div className="bg-[#363636]/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Authentication</h3>
                <code className="text-[#e72c61]">Bearer YOUR_API_KEY</code>
              </div>
              <div className="bg-[#363636]/10 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Content Type</h3>
                <code className="text-[#e72c61]">application/json</code>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6">Endpoints</h2>
        <div className="space-y-6">
          {endpoints.map((endpoint, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-[#f5f5f5]/80 border-[#363636]/10">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span
                      className={`mr-2 px-2 py-1 rounded text-xs font-bold ${
                        endpoint.method === "GET"
                          ? "bg-blue-500/20 text-blue-400"
                          : endpoint.method === "POST"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {endpoint.method}
                    </span>
                    {endpoint.path}
                  </CardTitle>
                  <CardDescription>{endpoint.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Request</h3>
                      <div className="bg-[#363636]/20 rounded-md p-4 relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 h-8 w-8 p-0"
                          onClick={() => navigator.clipboard.writeText(endpoint.request)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="text-[#e72c61] text-sm overflow-x-auto">{endpoint.request}</pre>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Response</h3>
                      <div className="bg-[#363636]/20 rounded-md p-4 relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 h-8 w-8 p-0"
                          onClick={() => navigator.clipboard.writeText(endpoint.response)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="text-[#e72c61] text-sm overflow-x-auto">{endpoint.response}</pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">SDK Examples</h2>
        <Card className="bg-[#f5f5f5]/80 border-[#363636]/10">
          <CardContent className="p-6">
            <Tabs defaultValue="javascript">
              <TabsList className="mb-4">
                <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                <TabsTrigger value="python">Python</TabsTrigger>
                <TabsTrigger value="solidity">Solidity</TabsTrigger>
              </TabsList>

              <TabsContent value="javascript">
                <div className="bg-[#363636]/20 rounded-md p-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-8 w-8 p-0"
                    onClick={() => navigator.clipboard.writeText(sdkExamples.javascript)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="text-[#e72c61] text-sm overflow-x-auto">{sdkExamples.javascript}</pre>
                </div>
              </TabsContent>

              <TabsContent value="python">
                <div className="bg-[#363636]/20 rounded-md p-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-8 w-8 p-0"
                    onClick={() => navigator.clipboard.writeText(sdkExamples.python)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="text-[#e72c61] text-sm overflow-x-auto">{sdkExamples.python}</pre>
                </div>
              </TabsContent>

              <TabsContent value="solidity">
                <div className="bg-[#363636]/20 rounded-md p-4 relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 h-8 w-8 p-0"
                    onClick={() => navigator.clipboard.writeText(sdkExamples.solidity)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  <pre className="text-[#e72c61] text-sm overflow-x-auto">{sdkExamples.solidity}</pre>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gradient-to-r from-[#e72c61]/10 to-[#c20f45]/10 rounded-2xl p-8 border border-[#363636]/10 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
        <p className="text-lg text-[#363636]/80 mb-6 max-w-3xl mx-auto">
          Our developer support team is available to help you integrate StreetCred into your platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#e72c61] hover:bg-[#e72c61]">
            <ExternalLink className="mr-2 h-4 w-4" />
            Developer Discord
          </Button>
          <Button variant="outline" className="border-[#e72c61] text-[#e72c61] hover:bg-[#e72c61]/10">
            Contact Support
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

