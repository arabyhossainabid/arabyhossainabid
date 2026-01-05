"use client";

import React, { useMemo, useRef } from "react";
import { FlipWords } from "../ui/flip-words";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const Hyperspeed = dynamic(() => import("../ui/hyperspeed"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />
});

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Terminal, Code2, Cpu, Globe, ChevronDown, Sparkles } from "lucide-react";

function Banner() {
  const router = useRouter();
  const words = ["Full-Stack Developer", "UI/UX Enthusiast", "Problem Solver", "Creative Thinker"];

  const handleContactClick = () => {
    router.push("/contact");
  };

  const handleProjectsClick = () => {
    router.push("/projects");
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/arabyhossainabid", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/araby-hossain-abid-6790a5318/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:arabyhossainabid@gmail.com", label: "Email" },
  ];

  const hyperspeedOptions = useMemo(() => ({
    distortion: "turbulentDistortion",
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xffffff,
      brokenLines: 0xffffff,
      leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
      rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
      sticks: 0x03b3c3,
    },
  }), []);

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  const maskImage = useTransform(
    [mouseX, mouseY],
    ([latestX, latestY]) => `radial-gradient(240px at ${latestX}px ${latestY}px, white, transparent)`
  );

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center perspective-1000">

      <div className="absolute inset-0 -z-10">
        {/* @ts-expect-error - Ignoring strict type check for options */}
        <Hyperspeed effectOptions={hyperspeedOptions} />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full py-8">

        <motion.div
          ref={ref}
          onMouseMove={onMouseMove}
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group rounded-[2.5rem] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] max-w-5xl w-full overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100 z-30"
            style={{ maskImage, WebkitMaskImage: maskImage }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-yellow)]/20 to-purple-500/20 opacity-50 backdrop-blur-3xl" />
          </motion.div>

          <div className="relative z-20 p-8 md:p-12 flex flex-col items-center text-center">

            <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] bg-[var(--neon-yellow)]/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-inner backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[var(--neon-yellow)]" />
                <span className="text-xs font-bold text-gray-200 tracking-widest uppercase">Open to Opportunities</span>
              </div>
            </motion.div>

            <div className="space-y-4 mb-12 relative z-10">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-2xl font-medium text-gray-400"
              >
                Hi, I&apos;m <span className="text-[var(--neon-yellow)]">Araby Hossain</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              >
                <h1 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
                  FULL-STACK
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--neon-yellow)] via-white to-[var(--neon-yellow)] bg-[length:200%_auto] animate-shine">
                    DEVELOPER
                  </span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-3xl font-light text-gray-300 h-12 flex items-center justify-center gap-2 pt-4"
              >
                <span className="hidden md:inline">Specializing in</span>
                <FlipWords words={words} className="text-[var(--neon-yellow)] font-bold" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center mb-12"
            >
              <button
                onClick={handleContactClick}
                className="group relative w-full sm:w-auto px-12 py-5 bg-[var(--neon-yellow)] text-black font-black text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(222,255,0,0.5)] active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  LET&apos;S TALK
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                onClick={handleProjectsClick}
                className="group w-full sm:w-auto px-12 py-5 bg-white/5 text-white font-bold text-lg rounded-full border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-[var(--neon-yellow)]/50 active:scale-95"
              >
                VIEW WORK
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 pt-8 border-t border-white/5 w-full justify-center"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-black hover:bg-[var(--neon-yellow)] transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-sm"
          >
            <ChevronDown className="w-5 h-5 text-[var(--neon-yellow)]" />
          </motion.div>
        </motion.div>

      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingIcon icon={<Code2 />} delay={0} x="5%" y="20%" />
        <FloatingIcon icon={<Terminal />} delay={2} x="90%" y="15%" />
        <FloatingIcon icon={<Cpu />} delay={4} x="10%" y="80%" />
        <FloatingIcon icon={<Globe />} delay={6} x="85%" y="75%" />
      </div>

    </section>
  );
}

function FloatingIcon({ icon, delay, x, y }: { icon: React.ReactNode, delay: number, x: string, y: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.1, 0.4, 0.1],
        y: [0, -40, 0],
        rotate: [0, 20, -20, 0]
      }}
      transition={{
        duration: 8,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute text-white/10 w-20 h-20 md:w-32 md:h-32 blur-[2px]"
      style={{ left: x, top: y }}
    >
      {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-full h-full" })}
    </motion.div>
  );
}

export default Banner;
