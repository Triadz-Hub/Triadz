"use client";

import React, { useMemo, useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, Float, OrbitControls } from "@react-three/drei";
import { ThreeJsIconProps } from "@/lib/types";

interface ThreeCubeIconProps {
  /** Canvas width/height (e.g. 200, "100%", "280px") */
  width?: number | string;
  height?: number | string;
  /** Explicit color override; defaults to CSS variable `--primary` */
  color?: string;
  /** Radius/thickness of the frame struts */
  strutRadius?: number;
  /** Size factor of the cube in 3D space */
  size?: number;
  /** Automatically rotate the cube */
  autoRotate?: boolean;
}

// 1. True 3D coordinates for all 8 vertices of a cube centered at (0, 0, 0)
const CUBE_VERTICES: THREE.Vector3[] = [
  new THREE.Vector3(-1, -1, -1), // 0: bottom-left-back
  new THREE.Vector3(1, -1, -1), // 1: bottom-right-back
  new THREE.Vector3(1, 1, -1), // 2: top-right-back
  new THREE.Vector3(-1, 1, -1), // 3: top-left-back
  new THREE.Vector3(-1, -1, 1), // 4: bottom-left-front
  new THREE.Vector3(1, -1, 1), // 5: bottom-right-front
  new THREE.Vector3(1, 1, 1), // 6: top-right-front
  new THREE.Vector3(-1, 1, 1), // 7: top-left-front
];

// 2. All 12 edges connecting the 8 vertices
const CUBE_EDGES: [number, number][] = [
  // Back face
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  // Front face
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  // Connecting struts (front to back)
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

function VolumetricCube({
  color,
  strutRadius = 0.05,
  size = 1.1,
  autoRotate = true,
}: {
  color?: string;
  strutRadius?: number;
  size?: number;
  autoRotate?: boolean;
}) {
  const [activeColor, setActiveColor] = useState<string>(color || "#3b82f6");
  const groupRef = useRef<THREE.Group>(null);

  // Read Tailwind / CSS variable --primary
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

  // Generate 3D cylinders for all 12 edges + spheres at 8 corners
  const { struts, corners } = useMemo(() => {
    const half = size / 2;
    const scaledVertices = CUBE_VERTICES.map((v) =>
      v.clone().multiplyScalar(half),
    );

    const edgeData: {
      position: THREE.Vector3;
      quaternion: THREE.Quaternion;
      length: number;
    }[] = [];

    CUBE_EDGES.forEach(([fromIdx, toIdx]) => {
      const vFrom = scaledVertices[fromIdx];
      const vTo = scaledVertices[toIdx];

      const dir = new THREE.Vector3().subVectors(vTo, vFrom);
      const len = dir.length();
      const mid = new THREE.Vector3()
        .addVectors(vFrom, vTo)
        .multiplyScalar(0.5);

      const orientation = new THREE.Quaternion();
      orientation.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        dir.clone().normalize(),
      );

      edgeData.push({
        position: mid,
        quaternion: orientation,
        length: len,
      });
    });

    return {
      struts: edgeData,
      corners: scaledVertices,
    };
  }, [size]);

  // Smooth continuous rotation in 3D space
  useFrame((_, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.8;
      groupRef.current.rotation.x += delta * 0.3;
    }
  });

  return (
    // Initial isometric resting pose (matching your 2D SVG icon angle)
    <group
      ref={groupRef}
      rotation={[Math.atan(1 / Math.sqrt(2)), Math.PI / 4, 0]}
    >
      {/* 12 Frame Struts */}
      {struts.map((strut, i) => (
        <mesh
          key={`strut-${i}`}
          position={strut.position}
          quaternion={strut.quaternion}
        >
          <cylinderGeometry
            args={[strutRadius, strutRadius, strut.length, 16]}
          />
          <meshStandardMaterial
            color={activeColor}
            metalness={0.25}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* 8 Rounded Corner Joints */}
      {corners.map((pos, j) => (
        <mesh key={`corner-${j}`} position={pos}>
          <sphereGeometry args={[strutRadius, 16, 16]} />
          <meshStandardMaterial
            color={activeColor}
            metalness={0.25}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeDDesignIllution3D({
  width = "100%",
  height = "100%",
  color,
  strutRadius = 0.1,
  size = 1.4,
  autoRotate = true,
}: ThreeJsIconProps) {
  return (
    <div style={{ width, height, position: "relative" }}>
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[10, 10, 8]} intensity={1.6} />
        <directionalLight position={[-10, -10, -6]} intensity={0.5} />

        <Center>
          <Float speed={2} rotationIntensity={0.4} floatIntensity={0.25}>
            <VolumetricCube
              color={color}
              strutRadius={strutRadius}
              size={size}
              autoRotate={autoRotate}
            />
          </Float>
        </Center>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
