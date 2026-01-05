"use client";

import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Sparkles, ArrowRight, Code2, Rocket } from "lucide-react";

function SomthingSection() {
  const router = useRouter();

  const handleProjectClick = () => {
    router.push("/projects");
  };

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section className="min-h-screen bg-[#0d0d0d] py-20 px-4 relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--neon-yellow)]/10 rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-[var(--neon-yellow)]" />
            <span className="text-sm text-gray-300">Available for new projects</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8"
        >
          Hi, I&apos;m{" "}
          <span className="text-[var(--neon-yellow)] inline-block">
            Araby Hossain Abid
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto"
        >
          I build <span className="text-white font-semibold">fast</span>, <span className="text-white font-semibold">modern</span>, and{" "}
          <span className="text-white font-semibold">responsive</span> web applications
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Using React, Next.js, TypeScript, Tailwind CSS, and modern backend technologies to create amazing digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={handleProjectClick}
            className="group px-8 py-4 bg-[var(--neon-yellow)] text-black font-bold rounded-full hover:shadow-[0_0_30px_0px_var(--neon-yellow)] transition-all duration-300 flex items-center gap-2"
          >
            <Rocket className="w-5 h-5" />
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleContactClick}
            className="group px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 hover:border-[var(--neon-yellow)]/50 transition-all duration-300 flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            Let&apos;s Talk
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-20 max-w-3xl mx-auto"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "2+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--neon-yellow)] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SomthingSection;
