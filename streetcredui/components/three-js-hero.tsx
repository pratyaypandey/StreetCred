"use client"

import React, { useState, useRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text } from "@react-three/drei"
import { motion } from "framer-motion"

// Simplified credit card component with error handling
function CreditCard(props) {
  const ref = useRef()

  return (
    <motion.group
      ref={ref}
      {...props}
      initial={{ scale: 0, rotateX: 0 }}
      animate={{ scale: 1, rotateX: 0 }}
      transition={{ duration: 1.5, delay: 0.5, type: "spring" }}
    >
      {/* Simplified credit card model */}
      <mesh receiveShadow castShadow scale={[3, 2, 0.1]} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Credit card chip */}
      <mesh receiveShadow castShadow scale={[0.5, 0.5, 0.1]} position={[-1, 0.5, 0.06]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#e72c61" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Credit card details */}
      <Text position={[0, -0.5, 0.06]} fontSize={0.2} color="#e72c61" anchorX="center" anchorY="middle">
        STREET CRED
      </Text>
    </motion.group>
  )
}

// Simplified particles
function FloatingParticles() {
  const count = 50

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#e72c61" : "#c20f45"}
            emissive={i % 2 === 0 ? "#e72c61" : "#c20f45"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </>
  )
}

// Fallback component in case 3D rendering fails
function FallbackComponent() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-[#f5f5f5]">
      <div className="text-center">
        <div className="text-4xl font-bold text-[#e72c61] mb-4">StreetCred</div>
        <div className="text-xl text-[#363636]">The Future of Credit is On-Chain</div>
      </div>
    </div>
  )
}

export default function ThreeJSHero() {
  const [hasError, setHasError] = useState(false)

  // Error boundary for Three.js
  if (hasError) {
    return <FallbackComponent />
  }

  return (
    <div className="h-full w-full">
      <ErrorBoundary onError={() => setHasError(true)}>
        <Suspense fallback={<FallbackComponent />}>
          <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
              <CreditCard position={[0, 0, 0]} />
            </Float>

            <FloatingParticles />
            <Environment preset="city" />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Canvas>
        </Suspense>
      </ErrorBoundary>
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
    console.error("Three.js error:", error, errorInfo)
    if (this.props.onError) {
      this.props.onError()
    }
  }

  render() {
    if (this.state.hasError) {
      return <FallbackComponent />
    }
    return this.props.children
  }
}

