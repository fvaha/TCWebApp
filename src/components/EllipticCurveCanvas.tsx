import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

interface Props {
  isDark: boolean;
}

// Flowing documents with clear, smaller transition circle
const FlowingDoc = ({
  delay,
  direction,
  isDark,
  speed = 0.00005,
}: {
  delay: number;
  direction: THREE.Vector3;
  isDark: boolean;
  speed?: number;
}) => {
  const ref = useRef<THREE.Group>(null);
  const start = useRef(performance.now() - delay); // Updated to start immediately

  useFrame(() => {
    if (!ref.current) return;

    const elapsed = performance.now() - start.current;
    const progress = (elapsed * speed) % 1;
    const distanceRange = 50;
    const distance = progress * distanceRange - distanceRange / 2;

    const pos = direction.clone().multiplyScalar(distance);
    ref.current.position.copy(pos);

    const textMesh = ref.current.children[0] as THREE.Mesh & {
      text: string;
      color: string;
    };

    const distToCenter = pos.length();

    // Symbol transitions based on distance to center
    if (distToCenter > 6) {
      textMesh.text = "📄";
      textMesh.color = isDark ? "#888" : "#444";
    } else if (distToCenter > 3) {
      textMesh.text = "🔐";
      textMesh.color = "#00bcd4";
    } else {
      textMesh.text = "🧾";
      textMesh.color = "#4caf50";
    }
  });

  return (
    <group ref={ref}>
      <Text fontSize={0.2} fillOpacity={0.4} anchorX="center" anchorY="middle">
        📄
      </Text>
    </group>
  );
};

// Subtle particle background
const BackgroundParticles = () => {
  const count = 500;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial size={0.015} color="#888888" transparent opacity={0.1} />
    </Points>
  );
};

const EllipticCurveCanvas: React.FC<Props> = ({ isDark }) => {
  const flows = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 120; i++) {
      const angle = Math.random() * Math.PI * 2;
      const direction = new THREE.Vector3(
        Math.cos(angle),
        Math.sin(angle),
        0
      ).normalize();
      arr.push({ delay: i * 200, direction });
    }
    return arr;
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <OrbitControls enablePan={false} zoomSpeed={0.3} />

        <BackgroundParticles />

        {flows.map((f, i) => (
          <FlowingDoc
            key={i}
            delay={f.delay}
            direction={f.direction}
            isDark={isDark}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default EllipticCurveCanvas;
