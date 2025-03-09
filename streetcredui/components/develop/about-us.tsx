"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, LineChart, ShieldCheck } from "lucide-react"

export function AboutUs() {
  const timeline = [
    {
      year: "2023",
      title: "Founded",
      description: "streetcred was founded with a mission to bridge traditional finance and blockchain technology.",
    },
    {
      year: "2023",
      title: "Seed Funding",
      description:
        "Raised $5M in seed funding from leading venture capital firms specializing in fintech and blockchain.",
    },
    {
      year: "2024",
      title: "Beta Launch",
      description: "Launched beta version of the platform with select lending partners.",
    },
    {
      year: "2024",
      title: "Public Launch",
      description: "Officially launched the platform to the public with full feature set.",
    },
    {
      year: "2025",
      title: "Expansion",
      description: "Expanded to support multiple blockchains and DeFi protocols.",
    },
  ]

  return (
    <div className="space-y-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <Card className="bg-[#f5f5f5]/80 border-[#363636]/10">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed mb-6">
              StreetCred is a pioneering fintech company at the intersection of traditional finance and blockchain
              technology. We're building the future of credit scoring by combining traditional financial data with
              on-chain activity to create a more comprehensive, accurate, and inclusive credit system.
            </p>
            <p className="text-lg leading-relaxed">
              Our team consists of experts from both traditional finance and blockchain technology, bringing together
              decades of experience in credit scoring, data science, and decentralized finance. We're backed by leading
              venture capital firms and strategic partners in the lending industry.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#f5f5f5]/80 border-[#363636]/10">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="mb-4 text-[#e72c61]">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Inclusion</h3>
              <p className="text-[#363636]/80 flex-grow">
                We believe everyone deserves access to fair credit. By incorporating on-chain data, we can provide
                credit scores for the underbanked and those with limited traditional credit history.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f5f5f5]/80 border-[#363636]/10">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="mb-4 text-[#e72c61]">
                <LineChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accurate Assessment</h3>
              <p className="text-[#363636]/80 flex-grow">
                By combining traditional and on-chain data, we create a more complete picture of financial behavior,
                leading to more accurate credit assessments and better lending decisions.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f5f5f5]/80 border-[#363636]/10">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="mb-4 text-[#e72c61]">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">User Control</h3>
              <p className="text-[#363636]/80 flex-grow">
                We believe users should own their data and control who can access it. Our platform puts users in control
                of their financial information while maintaining privacy and security.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#f5f5f5]/80 border-[#363636]/10">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="mb-4 text-[#e72c61]">
                <Building className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Industry Innovation</h3>
              <p className="text-[#363636]/80 flex-grow">
                We're pushing the boundaries of what's possible in credit scoring, creating new standards and
                methodologies that will shape the future of lending in both traditional and decentralized finance.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-[#e72c61] flex items-center justify-center">
                  <span className="text-xs font-bold">{item.year}</span>
                </div>
                <div className="bg-[#f5f5f5]/80 border-[#363636]/10 rounded-lg p-4">
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <p className="text-[#363636]/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

