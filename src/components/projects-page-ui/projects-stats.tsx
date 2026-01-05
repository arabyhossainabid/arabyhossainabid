"use client";
import React from "react";
import { motion } from "motion/react";
import { Code, Zap, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
    {
        icon: Code,
        value: "50+",
        label: "Projects Completed",
        description: "Successfully delivered"
    },
    {
        icon: Users,
        value: "30+",
        label: "Happy Clients",
        description: "Worldwide satisfaction"
    },
    {
        icon: Zap,
        value: "100%",
        label: "Success Rate",
        description: "On-time delivery"
    },
    {
        icon: Award,
        value: "2+",
        label: "Years Experience",
        description: "In web development"
    }
];

export default function ProjectsStats() {
    return (
        <section className="bg-[#0d0d0d] py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Proven Track <span className="text-[var(--neon-yellow)]">Record</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Numbers that speak for themselves
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="bg-white/5 border-white/10 hover:border-[var(--neon-yellow)]/30 transition-all duration-300 hover:-translate-y-2 group h-full">
                                <CardContent className="p-6 text-center">
                                    <div className="w-14 h-14 rounded-full bg-[var(--neon-yellow)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--neon-yellow)] transition-colors">
                                        <stat.icon className="w-7 h-7 text-[var(--neon-yellow)] group-hover:text-black transition-colors" />
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold text-[var(--neon-yellow)] mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-white font-semibold mb-1">{stat.label}</p>
                                    <p className="text-gray-500 text-sm">{stat.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
