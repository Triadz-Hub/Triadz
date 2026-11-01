"use client";

import React, { useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Center, Float, OrbitControls } from "@react-three/drei";
import { SVGLoader } from "three-stdlib";
import { ThreeJsIconProps } from "@/lib/types";

const SVG_PATH =
  "m4 4l2 4h3L7 4h2l2 4h3l-2-4h2l2 4h3l-2-4h3q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20H4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4m0 6v8h16v-8zm0 0v8z";

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

  // Parse path and generate 2D shapes with cutouts preserved
  const shapes = useMemo(() => {
    const loader = new SVGLoader();
    const parsed = loader.parse(
      `<svg viewBox="0 0 24 24"><path d="${SVG_PATH}" /></svg>`,
    );
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
              metalness={0.25}
              roughness={0.35}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </Center>
    </group>
  );
}

export default function ContentCreationIllution3D({
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
