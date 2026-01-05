"use client";
import React from "react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Zap, Shield, Users, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Zap,
    title: "Lightning Fast Development",
    description: "I build high-performance web applications with optimized code, ensuring blazing-fast load times and smooth interactions.",
    features: ["&lt; 1s Load Time", "SEO Optimized", "Performance First"]
  },
  {
    icon: Shield,
    title: "Secure & Scalable Solutions",
    description: "I develop robust, secure applications using industry best practices, ensuring your project scales seamlessly.",
    features: ["Enterprise Security", "Cloud Ready", "Auto Scaling"]
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "I create intuitive, accessible interfaces that prioritize user experience, combining beautiful design with functionality.",
    features: ["WCAG Compliant", "Mobile First", "Intuitive UX"]
  }
];

function Topnotch() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#deff0008,transparent_50%),radial-gradient(circle_at_70%_80%,#8b5cf608,transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--neon-yellow)]/5 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
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
            <span className="text-sm font-semibold text-white">What I Offer</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Top-<span className="bg-gradient-to-r from-[var(--neon-yellow)] to-yellow-300 bg-clip-text text-transparent">Notch</span> Solutions,
            <br />
            Delivered with <span className="bg-gradient-to-r from-[var(--neon-yellow)] to-yellow-300 bg-clip-text text-transparent">Precision</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            I transform your ideas into modern, responsive, and visually stunning web experiences
            using cutting-edge technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 h-full hover:border-[var(--neon-yellow)]/40 transition-all duration-500 hover:-translate-y-3 group backdrop-blur-sm relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-yellow)]/0 to-[var(--neon-yellow)]/0 group-hover:from-[var(--neon-yellow)]/10 group-hover:to-transparent transition-all duration-500" />

                <CardContent className="p-8 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--neon-yellow)]/20 to-[var(--neon-yellow)]/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-[var(--neon-yellow)]/20">
                    <service.icon className="w-8 h-8 text-[var(--neon-yellow)]" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--neon-yellow)] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--neon-yellow)] flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-gradient-to-br from-[var(--neon-yellow)]/15 via-purple-500/10 to-blue-500/10 border-[var(--neon-yellow)]/30 overflow-hidden relative backdrop-blur-sm">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            </div>

            <CardContent className="p-12 md:p-20 text-center relative z-10">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Build Something <span className="text-[var(--neon-yellow)]">Amazing</span>?
                </h3>
                <p className="text-gray-300 text-xl mb-10 leading-relaxed">
                  Let&apos;s collaborate to create modern, responsive, and engaging web applications
                  that bring your vision to life and exceed expectations.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    onClick={() => router.push('/contact')}
                    className="group px-10 py-6 bg-[var(--neon-yellow)] text-black font-bold rounded-full hover:shadow-[0_0_40px_0px_var(--neon-yellow)] transition-all duration-300 text-lg"
                  >
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    onClick={() => router.push('/projects')}
                    className="px-10 py-6 bg-white/10 text-white font-semibold rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-[var(--neon-yellow)]/50 transition-all duration-300 text-lg backdrop-blur-sm"
                  >
                    View Portfolio
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center mt-12 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--neon-yellow)] mb-1">50+</div>
                    <div className="text-sm text-gray-400">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--neon-yellow)] mb-1">30+</div>
                    <div className="text-sm text-gray-400">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--neon-yellow)] mb-1">100%</div>
                    <div className="text-sm text-gray-400">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Topnotch;
