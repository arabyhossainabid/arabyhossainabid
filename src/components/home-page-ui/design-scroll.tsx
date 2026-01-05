"use client";

import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import {
  Code,
  Palette,
  Lightbulb,
  Rocket,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const journey = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "I create fast, responsive, and modern web applications using React, Next.js, Tailwind CSS, and TypeScript. My goal is to deliver seamless user experiences while maintaining high performance and clean code architecture.",
    image: "/images/tech_frontend.svg",
    color: "var(--neon-yellow)",
    gradient: "from-[var(--neon-yellow)]/20 to-[var(--neon-yellow)]/5",
    skills: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "Interactive UI & Animations",
    description:
      "I build intricate and visually appealing interfaces with smooth animations and micro-interactions, using GSAP and Framer Motion to create dynamic experiences that captivate users.",
    image: "/images/tech_ui.svg",
    color: "#8b5cf6",
    gradient: "from-purple-500/20 to-purple-500/5",
    skills: ["GSAP Animations", "Framer Motion", "UI Implementation", "Micro-interactions"],
  },
  {
    icon: Lightbulb,
    title: "Problem Solving & Innovation",
    description:
      "I tackle complex frontend challenges with innovative solutions, ensuring every project not only works flawlessly but also pushes the boundaries of modern web development with technical excellence.",
    image: "/images/tech_problem.svg",
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    skills: ["Algorithm Design", "Code Optimization", "Logic Implementation", "Best Practices"],
  },
];

function DesignScroll() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#deff0005,transparent_70%)]" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[var(--neon-yellow)]/5 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--neon-yellow)]/20 to-purple-500/20 border border-[var(--neon-yellow)]/30 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[var(--neon-yellow)]" />
            <span className="text-sm font-semibold text-white">My Expertise</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            My{" "}
            <span className="bg-linear-to-r from-[var(--neon-yellow)] to-yellow-300 bg-clip-text text-transparent">
              Journey
            </span>{" "}
            as a
            <br />
            <br />
            Frontend{" "}
            <span className="bg-linear-to-r from-[var(--neon-yellow)] to-yellow-300 bg-clip-text text-transparent">
              Developer
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Combining technical expertise with creative vision to build exceptional web experiences that
            stand out
          </p>
        </motion.div>

        <div className="space-y-12">
          {journey.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 overflow-hidden hover:border-[var(--neon-yellow)]/40 transition-all duration-500 group backdrop-blur-sm relative">
                {/* Animated Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />

                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  {/* Content Side */}
                  <div
                    className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 ${index % 2 === 1 ? "md:col-start-2" : ""
                      }`}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 border-2 relative group-hover:shadow-2xl transition-all duration-500"
                      style={{
                        backgroundColor: `${item.color}15`,
                        borderColor: `${item.color}40`,
                      }}
                    >
                      <item.icon className="w-10 h-10 relative z-10" style={{ color: item.color }} />
                      <div
                        className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                        style={{ backgroundColor: item.color }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:text-[var(--neon-yellow)] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed text-lg mb-8">{item.description}</p>

                    {/* Skills List */}
                    <div className="space-y-3 mb-6">
                      {item.skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div
                            className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            <CheckCircle2 className="w-4 h-4" style={{ color: item.color }} />
                          </div>
                          <span className="text-gray-300 font-medium">{skill}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex items-center gap-3 text-sm">
                      <TrendingUp className="w-5 h-5 text-[var(--neon-yellow)]" />
                      <span className="text-gray-400">Continuously improving and learning</span>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div
                    className={cn(
                      "relative min-h-[250px] md:min-h-full bg-linear-to-br flex items-center justify-center p-6 md:p-12 overflow-hidden",
                      item.gradient,
                      index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                    )}
                  >
                    {/* Animated Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-shimmer" />
                    </div>

                    {/* Decorative Circles */}
                    <div
                      className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 opacity-20 animate-pulse"
                      style={{ borderColor: item.color }}
                    />
                    <div
                      className="absolute bottom-10 left-10 w-24 h-24 rounded-full border-2 opacity-20 animate-pulse"
                      style={{ borderColor: item.color, animationDelay: "1s" }}
                    />

                    {/* Main Image */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      transition={{ duration: 0.4 }}
                      className="relative z-10"
                    >
                      <div
                        className="absolute inset-0 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                        style={{ backgroundColor: item.color }}
                      />
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={500}
                        className="w-full max-w-md h-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity drop-shadow-2xl relative z-10"
                      />
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-24"
        >
          <Card className="bg-gradient-to-br from-[var(--neon-yellow)]/15 via-purple-500/10 to-blue-500/10 border-[var(--neon-yellow)]/30 backdrop-blur-sm overflow-hidden relative">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[url('/images/cubes.png')]" />
            </div>

            <CardContent className="p-12 md:p-20 relative z-10">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Rocket className="w-24 h-24 text-[var(--neon-yellow)] mx-auto mb-8 drop-shadow-[0_0_20px_var(--neon-yellow)]" />
              </motion.div>

              <h3 className="text-3xl md:text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Build the <span className="text-[var(--neon-yellow)]">Future</span> Together
              </h3>

              <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                Ready to transform your ideas into reality? Let&apos;s create something amazing that stands out
                and makes a lasting impact.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => router.push("/contact")}
                  className="group px-10 py-6 bg-[var(--neon-yellow)] text-black font-bold rounded-full hover:shadow-[0_0_40px_0px_var(--neon-yellow)] transition-all duration-300 text-lg"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => router.push("/projects")}
                  className="px-10 py-6 bg-white/10 text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-[var(--neon-yellow)]/50 transition-all duration-300 text-lg backdrop-blur-sm"
                >
                  View Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -250% 0;
          }
          100% {
            background-position: 250% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default DesignScroll;
