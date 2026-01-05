"use client";
import React from "react";
import { motion } from "motion/react";
import { Sparkles, Code2, Rocket } from "lucide-react";

export default function ProjectsHero() {
    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
                <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-[var(--neon-yellow)]/10 rounded-full blur-[150px] opacity-40 animate-pulse" />
                <div className="absolute bottom-1/4 left-0 w-[700px] h-[700px] bg-purple-500/10 rounded-full blur-[150px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
                        <Sparkles className="w-4 h-4 text-[var(--neon-yellow)]" />
                        <span className="text-sm text-gray-300">My Portfolio</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-tight mb-8"
                >
                    <span className="block">My</span>
                    <span className="text-[var(--neon-yellow)] block">Projects</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    A collection of my best work, showcasing modern web applications built with
                    <span className="text-white font-semibold"> cutting-edge technologies</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                        <Code2 className="w-5 h-5 text-[var(--neon-yellow)]" />
                        <span className="text-white font-medium">50+ Projects</span>
                    </div>
                    <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                        <Rocket className="w-5 h-5 text-[var(--neon-yellow)]" />
                        <span className="text-white font-medium">Modern Stack</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
