"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiDocker, SiAmazon } from 'react-icons/si';
import { Sparkles, Download, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#fff" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiAmazon, name: "AWS", color: "#FF9900" },
];

function HeroSection() {
  const router = useRouter();

  const handleViewWork = () => {
    router.push('/projects');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/Abid.pdf';
    link.download = 'Araby_Hossain_Abid_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d] py-10 md:py-20 px-4 relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#deff0008_1px,transparent_1px),linear-gradient(to_bottom,#deff0008_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--neon-yellow)]/10 rounded-full blur-[150px] opacity-40 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--neon-yellow)]/20 to-purple-500/20 border border-[var(--neon-yellow)]/30 mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[var(--neon-yellow)] animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-[var(--neon-yellow)] to-white bg-clip-text text-transparent">
              Full-Stack Developer &amp; Frontend Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1]"
          >
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-[var(--neon-yellow)] via-yellow-300 to-[var(--neon-yellow)] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Masterpieces
            </span>
            <br />
            with Code
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            I&apos;m <span className="text-white font-bold">Araby Hossain Abid</span>, a passionate full-stack developer
            specializing in building exceptional digital experiences with
            <span className="text-[var(--neon-yellow)] font-semibold"> React, Next.js, TypeScript</span>, and modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <Button
              onClick={handleViewWork}
              className="group px-8 py-6 bg-[var(--neon-yellow)] text-black font-bold rounded-full hover:shadow-[0_0_40px_0px_var(--neon-yellow)] transition-all duration-300 text-lg"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleDownloadCV}
              className="group px-8 py-6 bg-white/5 text-white font-semibold rounded-full border-2 border-white/10 hover:bg-white/10 hover:border-[var(--neon-yellow)]/50 transition-all duration-300 text-lg backdrop-blur-sm"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm uppercase tracking-[0.3em] font-bold">Tech Stack Mastery</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 mt-12 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.08 }}
                whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                className="group relative"
              >
                <div className="flex flex-col items-center gap-3 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--neon-yellow)]/40 transition-all backdrop-blur-sm hover:bg-white/10">
                  <div className="relative">
                    <tech.icon
                      className="w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_currentColor]"
                      style={{ color: tech.color }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-xl" />
                  </div>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                    {tech.name}
                  </span>
                </div>

                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap backdrop-blur-md border border-white/10">
                  {tech.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
