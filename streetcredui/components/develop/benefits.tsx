"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Clock, CreditCard, Database, Shield, Zap } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: <Database className="h-8 w-8 text-[#e72c61]" />,
      title: "Comprehensive Data Analysis",
      description:
        "Combine traditional financial data with on-chain activity for a complete picture of creditworthiness.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-[#e72c61]" />,
      title: "Enhanced Risk Assessment",
      description: "Reduce default rates by up to 30% with our advanced credit scoring algorithms.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-[#e72c61]" />,
      title: "Expanded Customer Base",
      description:
        "Reach previously underserved customers who have limited traditional credit history but strong on-chain activity.",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#e72c61]" />,
      title: "Faster Decision Making",
      description: "Automated credit assessments reduce approval times from days to minutes.",
    },
    {
      icon: <Shield className="h-8 w-8 text-[#e72c61]" />,
      title: "Fraud Prevention",
      description: "Advanced blockchain analysis helps identify and prevent fraudulent applications.",
    },
    {
      icon: <Zap className="h-8 w-8 text-[#e72c61]" />,
      title: "Easy Integration",
      description: "Simple API integration with your existing lending platform or DeFi protocol.",
    },
  ]

  const testimonials = [
    {
      quote:
        "StreetCred has transformed our lending business. We've been able to approve 25% more loans while maintaining our risk standards.",
      author: "Sarah Johnson",
      position: "CTO, DeFi Lending Co.",
    },
    {
      quote:
        "The integration was seamless, and the results were immediate. Our default rates dropped by 20% in the first quarter after implementation.",
      author: "Michael Chen",
      position: "Head of Risk, BlockFin",
    },
    {
      quote:
        "StreetCred's on-chain credit scoring has allowed us to serve customers who were previously rejected by traditional credit systems.",
      author: "Elena Rodriguez",
      position: "CEO, CryptoCredit",
    },
  ]

  return (
    <div className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-6">Why Partner With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-[#f5f5f5]/80 border-[#363636]/10 h-full hover:border-[#e72c61]/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-[#363636]/80 flex-grow">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-to-r from-[#e72c61]/10 to-[#c20f45]/10 rounded-2xl p-8 border border-[#363636]/10"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Integration Made Simple</h2>
            <p className="text-lg text-[#363636]/80 mb-6">
              Our API is designed to be easy to integrate with your existing systems. Whether you're a traditional
              lender or a DeFi protocol, you can be up and running with StreetCred in just a few days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#e72c61] hover:bg-[#e72c61]">
                Get API Keys
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-[#e72c61] text-[#e72c61] hover:bg-[#e72c61]/10">
                View Documentation
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 bg-[#f5f5f5]/30 rounded-xl p-4 font-mono text-sm text-[#e72c61]">
            <pre className="overflow-x-auto">
              {`// Example API Request
fetch('https://api.streetcred.io/v1/credit-score', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    wallet_address: '0x1234...',
    bank_connection_id: 'plaid_id_123'
  })
})
.then(response => response.json())
.then(data => console.log(data))`}
            </pre>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-6">What Our Partners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-[#f5f5f5]/80 border-[#363636]/10 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-4xl text-[#e72c61] mb-4">"</div>
                  <p className="text-[#363636]/80 mb-6 flex-grow italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
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
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-[#f5f5f5]/80 border border-[#363636]/10 rounded-2xl p-8 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lending Business?</h2>
        <p className="text-lg text-[#363636]/80 mb-6 max-w-3xl mx-auto">
          Join the growing network of lending providers using streetcred to make better lending decisions and reach new
          customers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#e72c61] hover:bg-[#e72c61]">
            Schedule a Demo
          </Button>
          <Button size="lg" variant="outline" className="border-[#e72c61] text-[#e72c61] hover:bg-[#e72c61]/10">
            Contact Sales
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

