"use client"
import React, { useState } from "react"
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"
import { Button } from "@/components/ui/button"

export default function HeroWithCanvasReveal() {
  const [canvasError, setCanvasError] = useState(false)

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas Reveal Effect Background with fallback */}
      <div className="absolute inset-0">
        {!canvasError ? (
          <React.Suspense fallback={<div className="h-full w-full bg-gradient-to-r from-green-900 to-black" />}>
            <ErrorBoundary onError={() => setCanvasError(true)}>
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
            </ErrorBoundary>
          </React.Suspense>
        ) : (
          <div className="h-full w-full bg-gradient-to-r from-green-900 to-black" />
        )}
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Welcome to the Future
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
          Experience the power of innovation with our cutting-edge solutions. Join us on a journey to transform your
          digital landscape.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-[#e72c61] hover:bg-[#c20f45] text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

// Simple error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Canvas error:", error, errorInfo)
    if (this.props.onError) {
      this.props.onError()
    }
  }

  render() {
    if (this.state.hasError) {
      return null // Return nothing, the fallback will be shown
    }
    return this.props.children
  }
}

