"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { AboutUs } from "@/components/develop/about-us"
import { Benefits } from "@/components/develop/benefits"
import { ApiDocs } from "@/components/develop/api-docs"

export default function DevelopWithUs() {
  const [activeTab, setActiveTab] = useState("about")

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#363636]">
      <NavBar />

      <div className="container mx-auto px-4 pt-24 pb-16 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Develop With streetcred</h1>
          <p className="text-xl text-[#363636]/80">
            Integrate comprehensive on-chain credit scoring into your lending platform and unlock new possibilities.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-48 shrink-0"
          >
            <div className="bg-[#f5f5f5]/80 backdrop-blur-sm p-4 rounded-lg border border-[#363636]/10 sticky top-24">
              <h3 className="text-sm font-medium mb-4">Navigation</h3>
              <div className="flex flex-col space-y-2">
                <Button
                  variant={activeTab === "about" ? "default" : "ghost"}
                  className={`text-sm ${activeTab === "about" ? "bg-[#e72c61] hover:bg-[#e72c61]" : ""}`}
                  onClick={() => setActiveTab("about")}
                >
                  About Us
                </Button>
                <Button
                  variant={activeTab === "benefits" ? "default" : "ghost"}
                  className={`text-sm ${activeTab === "benefits" ? "bg-[#e72c61] hover:bg-[#e72c61]" : ""}`}
                  onClick={() => setActiveTab("benefits")}
                >
                  Benefits
                </Button>
                <Button
                  variant={activeTab === "api" ? "default" : "ghost"}
                  className={`text-sm ${activeTab === "api" ? "bg-[#e72c61] hover:bg-[#e72c61]" : ""}`}
                  onClick={() => setActiveTab("api")}
                >
                  API Documentation
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-1 min-w-0"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsContent value="about">
                <AboutUs />
              </TabsContent>
              <TabsContent value="benefits">
                <Benefits />
              </TabsContent>
              <TabsContent value="api">
                <ApiDocs />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

