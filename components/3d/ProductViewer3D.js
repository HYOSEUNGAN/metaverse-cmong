"use client";

import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import Selector from "./Selector";
import Model3D from "./Model3D";
import ProductInfo from "./ProductInfo";
import "./ProductViewer3D.css";

export default function ProductViewer3D({
  modelPath,
  modelRotation = [0.3, Math.PI / 1.6, 0],
  modelScale = 1,
  modelPosition = [0, 0, 0],
  animationSettings = {},
  productInfo = {
    title: "36",
    subtitle: "NIKE AIR",
    accentText: "PEGASUS",
    description: "Running Shoes",
    price: "$98.97",
    details:
      "Year after year Pegasus has proven itself on the feet of runners everywhere.",
  },
  backgroundColor = "#d0d0d0",
  height = "100vh",
}) {
  const [domLoaded, setDomLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div
      className="product-viewer-container"
      style={{ backgroundColor, height }}
      ref={containerRef}
    >
      {domLoaded && (
        <Canvas
          eventSource={containerRef.current}
          eventPrefix="client"
          camera={{ position: [0, 0, 4], fov: 40 }}
        >
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, -5]}
            castShadow
          />
          <Environment preset="city" background blur={1} />
          <ContactShadows
            resolution={512}
            position={[0, -0.8, 0]}
            opacity={1}
            scale={10}
            blur={2}
            far={0.8}
          />
          <Selector>
            <Model3D
              modelPath={modelPath}
              rotation={modelRotation}
              scale={modelScale}
              position={modelPosition}
              animationSettings={animationSettings}
            />
          </Selector>
        </Canvas>
      )}

      <div className="overlay">
        <div className="branding">
          <a href="https://example.com/" className="brand-link">
            YOUR BRAND
            <br />
            COLLECTION
          </a>
          {/* <div className="date">{new Date().toLocaleDateString()}</div> */}
        </div>

        <ProductInfo
          title={productInfo.title}
          subtitle={productInfo.subtitle}
          accentText={productInfo.accentText}
          description={productInfo.description}
          price={productInfo.price}
          details={productInfo.details}
          className="info"
        />
      </div>
    </div>
  );
}
