"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Sparkles, Html, Loader, useProgress } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Button } from "@/components/ui/button";
import { ChevronDown, Rocket, Users, Code2 } from "lucide-react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Types for type safety
interface FloatingTextProps {
    text: string;
    position: [number, number, number];
    speed?: number;
    delay?: number;
}

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    index: number;
}

// Dynamic 3D Logo Component
const ClubLogo3D = () => {
    const gltf = useGLTF("/glowgrow_bulb.glb");
    const ref = useRef<THREE.Group>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((_, delta) => {
        if (ref.current) {
            const speed = hovered ? 0.5 : 0.3;
            ref.current.rotation.y += delta * speed;
            ref.current.position.y = 1 + Math.sin(performance.now() * 0.001) * 0.1;
        }
    });

    return (
        <group ref={ref}>
            <primitive
                object={gltf.scene}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            />
        </group>
    );
};

// Enhanced Floating Text with parallax effect
const FloatingText = ({ text, position, speed = 0.5, delay = 0 }: FloatingTextProps) => {
    const ref = useRef<THREE.Group>(null);
    const { viewport } = useThree();
    const { scrollYProgress } = useScroll();

    const yPos = useTransform(
        scrollYProgress,
        [0, 1],
        [position[1], position[1] - 2]
    );

    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y = yPos.get() + Math.sin(state.clock.elapsedTime * speed) * 0.2;
            ref.current.position.x = position[0] + (state.mouse.x * viewport.width) * 0.05;
        }
    });

    return (
        <group ref={ref} position={position}>
            <Html center>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + delay, duration: 0.8 }}
                    className="text-white font-bold text-xl md:text-2xl lg:text-3xl whitespace-nowrap"
                    style={{
                        textShadow: "0 2px 12px rgba(0,0,0,0.8)",
                        background: "linear-gradient(90deg, #FFD700, #FFFFFF)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    {text}
                </motion.div>
            </Html>
        </group>
    );
};

// Dynamic Feature Card Component
const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 flex flex-col items-center text-center"
        >
            <div className="bg-[#FFD700]/20 p-4 rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-200">{description}</p>
        </motion.div>
    );
};

// Dynamic Loading Screen
const LoadingScreen = () => {
    const { progress } = useProgress();

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a5a32]">
            <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mb-4">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    className="h-full bg-[#FFD700]"
                />
            </div>
            <p className="text-white text-lg">
                Loading immersive experience {Math.round(progress)}%
            </p>
        </div>
    );
};

// Main Hero Section Component
export default function HeroSection() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const timer = setTimeout(() => setIsLoading(false), 3000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    const floatingTexts: FloatingTextProps[] = [
        { text: "Innovate", position: [-2, 3, 0], speed: 0.4, delay: 0 },
        { text: "Collaborate", position: [2, 2.5, -1], speed: 0.6, delay: 0.2 },
        { text: "Create", position: [0, 2, -2], speed: 0.8, delay: 0.4 },
    ];

    const features = [
        {
            icon: <Rocket className="w-6 h-6 text-[#FFD700]" />,
            title: "Cutting-edge Projects",
            description: "Work on real-world tech projects with industry mentors"
        },
        {
            icon: <Users className="w-6 h-6 text-[#FFD700]" />,
            title: "Vibrant Community",
            description: "Connect with like-minded innovators and creators"
        },
        {
            icon: <Code2 className="w-6 h-6 text-[#FFD700]" />,
            title: "Hands-on Learning",
            description: "Gain practical skills through workshops and hackathons"
        }
    ];

    return (
        <>
            {isLoading && <LoadingScreen />}

            <section className="relative w-full min-h-screen bg-gradient-to-b from-[#0a5a32] to-[#0d281c] flex flex-col items-center justify-center overflow-hidden">
                {/* Dynamic 3D Background */}
                <Canvas
                    className="absolute inset-0 z-0"
                    camera={{ position: [0, 0, isMobile ? 10 : 8], fov: isMobile ? 55 : 45 }}
                    gl={{ antialias: true, alpha: true }}
                    dpr={[1, 2]}
                >
                    <ambientLight intensity={0.7} color="#ffffff" />
                    <directionalLight
                        position={[5, 10, 7]}
                        intensity={1.8}
                        color="#ffeedd"
                        castShadow
                        shadow-mapSize={[2048, 2048]}
                    />

                    <Suspense fallback={null}>
                        <ClubLogo3D />

                        <Sparkles
                            count={isMobile ? 100 : 200}
                            scale={isMobile ? 8 : 12}
                            position={[0, 2, -3]}
                            speed={0.4}
                            size={isMobile ? 1.5 : 2}
                            color="#FFD700"
                            noise={0.3}
                        />

                        {!isMobile && floatingTexts.map((item, index) => (
                            <FloatingText key={`floating-text-${index}`} {...item} />
                        ))}

                        <EffectComposer>
                            <Bloom
                                intensity={1.5}
                                kernelSize={2}
                                luminanceThreshold={0.1}
                                luminanceSmoothing={0.9}
                            />
                        </EffectComposer>
                    </Suspense>

                    <OrbitControls
                        enableZoom={false}
                        autoRotate
                        autoRotateSpeed={0.25}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 1.8}
                        enablePan={false}
                        enabled={!isMobile}
                    />
                </Canvas>

                {/* Dynamic Content Overlay */}
                <div className="relative z-10 w-full max-w-7xl px-6 py-24 md:py-32 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="w-full flex flex-col items-center space-y-8 md:space-y-12"
                    >
                        <div className="text-center space-y-4 md:space-y-6">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-[#FFD700] font-semibold tracking-widest text-sm md:text-base"
                            >
                                WELCOME TO THE FUTURE
                            </motion.p>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight tracking-tight">
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFFFFF]">
                                    Karatina University
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#FFD700]">
                                    Innovation Club
                                </span>
                            </h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
                            >
                                Where brilliant minds converge to create, innovate, and shape the future through cutting-edge technology.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex flex-wrap justify-center gap-4 sm:gap-6"
                        >
                            <Button
                                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] hover:from-[#FFA500] hover:to-[#FFD700] 
                          text-gray-900 font-bold px-8 py-4 text-base md:text-lg transition-all transform 
                          hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent 
                          hover:border-[#ffffff80] flex items-center gap-2"
                            >
                                <Rocket className="w-5 h-5" />
                                Join Now
                            </Button>
                            <Button
                                variant="outline"
                                className="text-white border-2 border-white hover:bg-white/10 px-8 py-4 
                          text-base md:text-lg transition-all transform hover:scale-105 backdrop-blur-sm"
                            >
                                Our Projects
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Dynamic Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24 w-full max-w-5xl"
                    >
                        {features.map((feature, index) => (
                            <FeatureCard key={index} index={index} {...feature} />
                        ))}
                    </motion.div>

                    {/* Dynamic Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                        className="flex flex-col items-center text-white/80 mt-16 md:mt-24"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="flex flex-col items-center"
                        >
                            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
                            <span className="text-xs md:text-sm mt-2 tracking-wider">SCROLL TO EXPLORE</span>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Dynamic Background Elements */}
                <motion.div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        background: `
              radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 20%),
              radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 20%)
            `,
                        opacity: scrollYProgress,
                    }}
                />
            </section>
        </>
    );
}
