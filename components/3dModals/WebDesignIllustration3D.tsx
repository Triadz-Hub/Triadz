"use client";

import React, { useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Center, Float, OrbitControls } from "@react-three/drei";
import { SVGLoader } from "three-stdlib";
import { ThreeJsIconProps } from "@/lib/types";

// Complete SVG string with paths and fill-rule attributes preserved
const SVG_MARKUP = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2h-2v6h2z"
  />
  <path d="M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1"
  />
</svg>
`;

function IconMesh({
  color,
  depth = 0.5,
  scale = 0.14,
}: {
  color?: string;
  depth?: number;
  scale?: number;
}) {
  const [activeColor, setActiveColor] = useState<string>(color || "#3b82f6");

  // Dynamically resolve the primary color from Next.js / Tailwind CSS variable
  useEffect(() => {
    if (color) {
      setActiveColor(color);
      return;
    }
    const style = getComputedStyle(document.documentElement);
    const primary = style.getPropertyValue("--primary").trim();
    if (primary) {
      setActiveColor(primary.includes(" ") ? `hsl(${primary})` : primary);
    }
  }, [color]);

  // Parse all SVG paths and extract 2D shapes (with cutout holes calculated)
  const shapes = useMemo(() => {
    const loader = new SVGLoader();
    const parsed = loader.parse(SVG_MARKUP);
    return parsed.paths.flatMap((path: any) => SVGLoader.createShapes(path));
  }, []);

  const extrudeSettings = useMemo(
    () => ({
      depth,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.02,
      bevelThickness: 0.02,
    }),
    [depth],
  );

  return (
    // SVGs load inverted along the Y-axis in WebGL space; scale [x, -y, z] flips it upright
    <group scale={[scale, -scale, scale]}>
      <Center>
        {shapes.map((shape, idx) => (
          <mesh key={idx}>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshStandardMaterial
              color={activeColor}
              metalness={0.2}
              roughness={0.35}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </Center>
    </group>
  );
}

export default function WebDesignIllustration3D({
  width = "100%",
  height = "100%",
  color,
  depth = 0.5,
  scale = 0.14,
  autoRotate = true,
}: ThreeJsIconProps) {
  return (
    <div style={{ width, height, position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[10, 10, 6]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} />

        <Float speed={2} rotationIntensity={0.6} floatIntensity={0.3}>
          <IconMesh color={color} depth={depth} scale={scale} />
        </Float>

        <OrbitControls
          enableZoom={false}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
        />
      </Canvas>
    </div>
  );
}
