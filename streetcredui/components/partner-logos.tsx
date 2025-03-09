"use client"

import { motion } from "framer-motion"

export function PartnerLogos() {
  // Placeholder for partner logos
  const logos = [
    { name: "Aave", color: "#e72c61" },
    { name: "Compound", color: "#e72c61" },
    { name: "MakerDAO", color: "#e72c61" },
    { name: "Uniswap", color: "#c20f45" },
    { name: "Curve", color: "#c20f45" },
    { name: "dYdX", color: "#c20f45" },
  ]

  return (
    <div className="w-full overflow-hidden">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center h-16 w-40"
            >
              <div className="font-bold text-2xl" style={{ color: logo.color }}>
                {logo.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

