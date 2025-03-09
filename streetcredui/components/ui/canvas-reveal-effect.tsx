"use client"
import { cn } from "@/lib/utils"
import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from "three"

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[231, 44, 97]], // Default to primary color
  containerClassName,
  dotSize = 3,
  showGradient = true,
}: {
  animationSpeed?: number
  opacities?: number[]
  colors?: number[][]
  containerClassName?: string
  dotSize?: number
  showGradient?: boolean
}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className={cn("h-full relative w-full", containerClassName)}>
        {showGradient && <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f5] to-transparent" />}
      </div>
    )
  }

  return (
    <div className={cn("h-full relative w-full", containerClassName)}>
      <div className="absolute inset-0 opacity-80 mix-blend-screen">
        <Canvas>
          <DotMatrixMesh colors={colors} opacities={opacities} dotSize={dotSize} animationSpeed={animationSpeed} />
        </Canvas>
      </div>
      {showGradient && <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f5] to-transparent" />}
    </div>
  )
}

function DotMatrixMesh({ colors, opacities, dotSize, animationSpeed }) {
  const meshRef = useRef()

  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      u_colors: {
        value: colors.map((c) => new THREE.Vector3(c[0] / 255, c[1] / 255, c[2] / 255)),
      },
      u_opacities: { value: opacities },
      u_dot_size: { value: dotSize },
      u_animation_speed: { value: animationSpeed },
    }),
    [colors, opacities, dotSize, animationSpeed],
  )

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime()
    }
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={`
          varying vec2 vUv;
          
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float u_time;
          uniform vec3 u_colors[${colors.length}];
          uniform float u_opacities[${opacities.length}];
          uniform float u_dot_size;
          uniform float u_animation_speed;
          
          varying vec2 vUv;
          
          float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
          }
          
          void main() {
            vec2 grid = floor(gl_FragCoord.xy / (u_dot_size * 2.0));
            float r = random(grid);
            
            int colorIndex = int(r * ${colors.length}.0);
            colorIndex = min(colorIndex, ${colors.length - 1});
            
            int opacityIndex = int(r * ${opacities.length}.0);
            opacityIndex = min(opacityIndex, ${opacities.length - 1});
            
            vec3 color = u_colors[colorIndex];
            float opacity = u_opacities[opacityIndex];
            
            // Animation
            float dist = length(vUv - 0.5) * 2.0;
            float delay = dist * 0.5 + random(grid) * 0.5;
            float fade = smoothstep(delay, delay + 0.3, u_time * u_animation_speed);
            
            gl_FragColor = vec4(color, opacity * fade);
          }
        `}
        uniforms={uniforms}
        transparent={true}
      />
    </mesh>
  )
}

