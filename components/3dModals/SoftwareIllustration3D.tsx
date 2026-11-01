"use client";

import React, { useMemo, useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Center, Float, OrbitControls } from "@react-three/drei";
import { SVGLoader } from "three-stdlib";
import { ThreeJsIconProps } from "@/lib/types";

const SVG_PATH =
  "M12.736.064c.52.2.787.805.598 1.353L8.546 15.305c-.19.548-.763.83-1.282.631c-.52-.2-.787-.805-.598-1.353L11.454.695c.19-.548.763-.83 1.282-.631M2.414 8.256L5.95 11.99c.39.412.39 1.08 0 1.492a.963.963 0 0 1-1.414 0L.293 9.003a1.1 1.1 0 0 1 0-1.493l4.243-4.48a.963.963 0 0 1 1.414 0a1.1 1.1 0 0 1 0 1.494zm15.172 0L14.05 4.524a1.1 1.1 0 0 1 0-1.493a.963.963 0 0 1 1.414 0l4.243 4.479c.39.412.39 1.08 0 1.493l-4.243 4.478a.963.963 0 0 1-1.414 0a1.1 1.1 0 0 1 0-1.492z";

function IconMesh({
  color,
  depth = 0.6,
  scale = 0.15,
}: {
  color?: string;
  depth?: number;
  scale?: number;
}) {
  const [activeColor, setActiveColor] = useState<string>(color || "#3b82f6");

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

  const shapes = useMemo(() => {
    const loader = new SVGLoader();
    const parsed = loader.parse(
      `<svg viewBox="0 0 20 20"><path d="${SVG_PATH}" /></svg>`,
    );
    // Collect all shapes across paths without centering individual pieces
    return parsed.paths.flatMap((path: any) => SVGLoader.createShapes(path));
  }, []);

  const extrudeSettings = useMemo(
    () => ({
      depth,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.02, // Kept small to prevent overlapping artifacts on narrow corners
      bevelThickness: 0.02,
    }),
    [depth],
  );

  return (
    // SVGs render inverted along the Y-axis in WebGL space; scale [x, -y, z] flips it upright
    <group scale={[scale, -scale, scale]}>
      {/* <Center> from drei automatically computes the true geometric center of the combined parts */}
      <Center>
        {shapes.map((shape, idx) => (
          <mesh key={idx}>
            <extrudeGeometry args={[shape, extrudeSettings]} />
            <meshStandardMaterial
              color={activeColor}
              metalness={0.2}
              roughness={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        ))}
      </Center>
    </group>
  );
}

export default function SoftwareIllustration3D({
  width = "100%",
  height = "100%",
  color,
  depth = 0.6,
  scale = 0.15,
  autoRotate = true,
}: ThreeJsIconProps) {
  return (
    <div style={{ width, height, position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
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
