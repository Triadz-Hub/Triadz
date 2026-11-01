"use client";

import React, { useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Center, Float, OrbitControls } from "@react-three/drei";
import { SVGLoader } from "three-stdlib";
import { ThreeJsIconProps } from "@/lib/types";

const SVG_PATH =
  "M4 21v-4.25L17.175 3.6q.3-.3.675-.45T18.6 3q.4 0 .763.15T20 3.6L21.4 5q.3.275.45.638T22 6.4q0 .375-.15.75t-.45.675L8.25 21zm2-2h1.4l9.825-9.8l-.7-.725l-.725-.7L6 17.6zM20 6.425L18.575 5zm-3.475 2.05l-.725-.7L17.225 9.2zM14 21q1.85 0 3.425-.925T19 17.5q0-.9-.475-1.55t-1.275-1.125L15.775 16.3q.575.25.9.55t.325.65q0 .575-.913 1.038T14 19q-.425 0-.712.288T13 20t.288.713T14 21m-9.425-7.65l1.5-1.5q-.5-.2-.788-.412T5 11q0-.3.45-.6t1.9-.925q2.2-.95 2.925-1.725T11 6q0-1.375-1.1-2.187T7 3q-1.125 0-2.013.4t-1.362.975Q3.35 4.7 3.4 5.1t.375.65q.325.275.725.225t.675-.325q.35-.35.775-.5T7 5q1.025 0 1.513.3T9 6q0 .35-.437.637T6.55 7.65q-2 .875-2.775 1.588T3 11q0 .8.425 1.363t1.15.987";

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

  // Resolve Tailwind/CSS variable --primary
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

  // Parse path into 2D shapes
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
    // Flip Y-axis to match SVG coordinate space
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

export default function GraphicDesignIllustration3D({
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
