import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

// 모델 미리 로드
useGLTF.preload("/models/chair3.glb");

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={8} position={[-1, -1, 0]} />;
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="lightblue" wireframe />
    </mesh>
  );
}

export default function Chair() {
  return (
    <div className="h-[80vh] w-full relative">
      <Canvas>
        <Suspense fallback={<LoadingFallback />}>
          <Model url="/models/chair3.glb" />
          <OrbitControls enableZoom={false} />
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* <p className="text-2xl">3D 모델 자리 (스크롤 테스트용)</p> */}
      </div>
    </div>
  );
}
