"use client"

import { motion } from "framer-motion"
import { NavBar } from "@/components/nav-bar"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, LineChart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <CanvasRevealEffect
            animationSpeed={2}
            containerClassName="bg-[#f5f5f5]"
            colors={[
              [231, 44, 97], // #e72c61
              [194, 15, 69], // #c20f45
            ]}
            dotSize={3}
            opacities={[0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1]}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#363636]">
              Revolutionizing Credit Scoring for Web3
            </h1>
            <p className="text-xl md:text-2xl text-[#363636]/80 mb-8">
              StreetCred bridges traditional finance with blockchain technology to create a more inclusive, accurate,
              and transparent credit system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#363636]">Our Mission</h2>
              <p className="text-lg text-[#363636]/80 mb-6">
                At StreetCred, we believe that credit scoring should evolve with the changing landscape of finance.
                Traditional credit systems often fail to capture the full financial picture of individuals in the
                digital economy, leaving many creditworthy individuals underserved.
              </p>
              <p className="text-lg text-[#363636]/80 mb-6">
                We're building a revolutionary credit scoring system that combines traditional financial data with
                on-chain activity to create a more comprehensive and accurate assessment of creditworthiness. By
                leveraging blockchain technology, we ensure transparency, security, and user control over financial
                data.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#363636]">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-[#e72c61]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#363636]">Financial Inclusion</h3>
              <p className="text-[#363636]/80">
                Making credit accessible to everyone through comprehensive scoring that considers both traditional and
                on-chain activity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <Shield className="h-12 w-12 text-[#e72c61]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#363636]">Data Privacy</h3>
              <p className="text-[#363636]/80">
                Ensuring user data sovereignty and security through blockchain technology and encryption.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <LineChart className="h-12 w-12 text-[#e72c61]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#363636]">Innovation</h3>
              <p className="text-[#363636]/80">
                Continuously evolving our technology to provide the most accurate and comprehensive credit assessment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-[#363636]">Join the Future of Credit</h2>
            <p className="text-lg text-[#363636]/80 mb-8">
              Whether you're an individual looking to leverage your on-chain activity for credit scoring or a business
              wanting to integrate more comprehensive credit assessments, StreetCred is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/check-credit-score">
                <Button size="lg" className="w-full sm:w-auto">
                  Check Your Credit Score
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/develop-with-us">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

