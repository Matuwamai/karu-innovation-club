'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, useGLTF } from '@react-three/drei';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';

// 3D Model Component
function BulbModel() {
  const { scene } = useGLTF('/glowgrow_bulb.glb');
  return <primitive object={scene} scale={3.5} position={[0, -1.5, 0]} />;
}

// Background Layers Component
function BackgroundLayers() {
  const layers = [
    { src: '/images/hero-1.png', alt: "Layer 1", className: "opacity-40" },
    { src: '/images/hero-3.png', alt: "Layer 2", className: "opacity-25 mix-blend-overlay" },
    { src: '/images/hero-2.png', alt: "Layer 3", className: "opacity-15 mix-blend-soft-light" },
    { src: '/images/primary.png', alt: "Layer 4", className: "opacity-30 mix-blend-screen" },
  ];

  return (
    <>
      {layers.map((layer, index) => (
        <div key={index} className={`absolute inset-0 w-full h-full z-0 ${layer.className}`}>
          <Image
            src={layer.src}
            alt={layer.alt}
            fill
            className="object-cover"
            quality={80}
            priority
            draggable={false}
          />
        </div>
      ))}
    </>
  );
}

// Hero Content Component
function HeroContent() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none gap-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight pointer-events-auto"
      >
        Powering the <span className="text-green-400">Green Future</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="text-lg md:text-xl max-w-2xl text-white/80 pointer-events-auto"
      >
        Revolutionizing sustainability with cutting-edge clean technology.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="mt-4 pointer-events-auto"
      >
        <Link to="about" smooth duration={700} offset={-70}>
          <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-green-500/30">
            Get Started
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

// Scroll Indicator Component
function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 pointer-events-auto">
      <Link to="about" smooth duration={700}>
        <div className="animate-bounce text-white text-4xl cursor-pointer hover:text-green-400 transition-colors">
          ↓
        </div>
      </Link>
    </div>
  );
}

// Main Hero Section Component
export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Elements */}
      <BackgroundLayers />
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-black/50 via-black/30 to-black/40" />

      {/* 3D Model Canvas */}
      <div className="absolute top-0 left-0 w-full h-[75%] z-10">
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <Environment preset="sunset" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
          <Float floatIntensity={2} rotationIntensity={1.3}>
            <BulbModel />
          </Float>
        </Canvas>
      </div>

      {/* Content */}
      <HeroContent />
      <ScrollIndicator />

      {/* About Section */}
      <div
        id="about"
        className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center text-white text-3xl font-semibold"
      >
        Welcome to Our Sustainable World
      </div>
    </div>
  );
}