"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Model3D({
  modelPath,
  scale = 1,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
  animationSettings = {},
}) {
  const ref = useRef();
  const { nodes, materials } = useGLTF(modelPath);

  // 모델의 첫 번째 메시와 재질을 가져옵니다
  const firstMeshKey = Object.keys(nodes)[0];
  const firstMaterialKey = Object.keys(materials)[0];

  // 애니메이션 설정
  const {
    enableRotation = true,
    enableFloating = true,
    rotationSpeed = 1,
    floatingSpeed = 1,
    rotationAmplitude = 0.2,
    floatingAmplitude = 0.1,
  } = animationSettings;

  useFrame((state) => {
    if (!ref.current) return;

    const t = state.clock.getElapsedTime();

    if (enableRotation) {
      ref.current.rotation.set(
        rotation[0] +
          (Math.cos((t / 4) * rotationSpeed) / 8) * rotationAmplitude,
        rotation[1] +
          (Math.sin((t / 3) * rotationSpeed) / 4) * rotationAmplitude,
        rotation[2] +
          (0.15 + Math.sin((t / 2) * rotationSpeed) / 8) * rotationAmplitude
      );
    }

    if (enableFloating) {
      ref.current.position.y =
        position[1] +
        ((0.5 + Math.cos((t / 2) * floatingSpeed)) / 7) * floatingAmplitude;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {nodes[firstMeshKey] && materials[firstMaterialKey] ? (
        <mesh
          receiveShadow
          castShadow
          geometry={nodes[firstMeshKey].geometry}
          material={materials[firstMaterialKey]}
        />
      ) : (
        // 폴백 메시 (모델이 제대로 로드되지 않은 경우)
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      )}
    </group>
  );
}
