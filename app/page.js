"use client";

import Image from "next/image";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import sectionsData from "../data/sections";
import AnimatedHero from "../components/AnimatedHero";
import ProductViewer3D from "../components/3d/ProductViewer3D";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Header />

      {/* <AnimatedHero /> */}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center snap-start relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            미래를 <span className="text-blue-500">경험</span>하세요
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">
            현실과 가상의 경계를 허무는 메타버스 플랫폼에서 무한한 가능성을
            탐험하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-4 rounded-full text-lg font-medium">
              시작하기
            </button>
            <button className="bg-transparent border border-white hover:bg-white/10 transition-colors px-8 py-4 rounded-full text-lg font-medium">
              데모 보기
            </button>
          </div>
          <div className="absolute bottom- left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-10 h-10 text-white/70"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {sectionsData.map((section) => (
          <Section key={section.id} data={section} />
        ))}
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            메타버스의 혁신을 이끌어갑니다
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { number: "250K+", label: "사용자" },
              { number: "120+", label: "가상 세계" },
              { number: "8M+", label: "디지털 자산" },
              { number: "99.9%", label: "가동 시간" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-blue-400 mb-3">
                  {stat.number}
                </p>
                <p className="text-lg text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <ProductViewer3D
        modelPath="/nike_air_zoom_pegasus_36-transformed.glb"
        productInfo={{
          title: "36",
          subtitle: "NIKE AIR",
          accentText: "PEGASUS",
          description: "Running Shoes",
          price: "$98.97",
          details:
            "최고의 러닝화로 새로운 경험을 만나보세요. 나이키 에어 줌 페가수스는 러너들에게 신뢰받는 스타일로 돌아왔습니다.",
        }}
        animationSettings={{
          rotationSpeed: 1.2,
          floatingAmplitude: 0.15,
        }}
        backgroundColor="#e0e0e0"
        height="100vh"
      /> */}

      <Footer />
    </div>
  );
}
