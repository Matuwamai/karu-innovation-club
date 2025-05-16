"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Animation configs
const fadeUp = (delay = 0, y = 30) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8 },
});

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0e7d44] to-[#64ac87] flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative Background Blurs */}
      <DecorativeBackground />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-20">
        <HeroTitle />
        <HeroDescription />
        <HeroActions />
        <HeroImage />
        <HeroQuote />
        <ScrollIndicator />
      </div>
    </section>
  );
}

function DecorativeBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/5 top-[-100px] left-[-100px] blur-3xl" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-white/5 bottom-[-100px] right-[-100px] blur-2xl" />
    </div>
  );
}

function HeroTitle() {
  return (
    <motion.h1
      {...fadeUp(0)}
      className="text-5xl md:text-6xl font-extrabold text-white leading-tight space-y-2"
    >
      <span className="block text-[#FFD700]">Welcome to</span>
      <span className="block">Karatina University</span>
      <span className="block text-[#FFD700]">Innovation Club</span>
    </motion.h1>
  );
}

function HeroDescription() {
  return (
    <motion.p
      {...fadeUp(0.6, 20)}
      className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto"
    >
      Empowering the next generation of tech innovators through collaboration,
      learning, and hands-on projects.
    </motion.p>
  );
}

function HeroActions() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Button className="bg-[#FFD700] text-gray-900 hover:bg-[#ccb000] transition">
        Join a Community
      </Button>
      <Button
        variant="outline"
        className="text-white border-white hover:bg-white/10 transition"
      >
        Upcoming Events
      </Button>
    </div>
  );
}

function HeroImage() {
  return (
    <motion.div {...fadeUp(1, 40)} className="mt-16 relative w-full max-w-3xl mx-auto">
      <Image
        src="/images/hero-character.png"
        alt="Futuristic Innovator"
        width={720}
        height={480}
        className="mx-auto rounded-lg border-2 border-[#FFD700]/30 shadow-xl"
      />
    </motion.div>
  );
}

function HeroQuote() {
  return (
    <motion.blockquote
      {...fadeUp(1.5, 0)}
      className="mt-10 text-gray-200 italic text-base max-w-xl mx-auto"
    >
      "Dream, Create and Inspire for a Better Future."
    </motion.blockquote>
  );
}

function ScrollIndicator() {
  return (
    <div className="mt-10 flex flex-col items-center text-gray-200 animate-bounce">
      <ChevronDown className="w-8 h-8" />
      <span className="text-sm mt-1">Scroll Down</span>
    </div>
  );
}
