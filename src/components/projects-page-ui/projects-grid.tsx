"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = ["All", "React", "Next.js", "GSAP", "Full-Stack"];

const projects = [
    {
        id: 1,
        title: "Mojito - GSAP Portfolio",
        description: "A stunning portfolio website featuring advanced GSAP animations, smooth scroll effects, and interactive transitions that create an immersive user experience.",
        image: "/images/project-gsap-portfolio.png",
        link: "https://mojito-ecru.vercel.app/",
        github: "https://github.com/arabyhossainabid/jsm_gsap_landing",
        category: "GSAP",
        tags: ["GSAP", "React", "Animation", "ScrollTrigger"]
    },
    {
        id: 2,
        title: "Career Hub Platform",
        description: "A comprehensive job search platform with advanced filtering, application tracking, and responsive UI built with React and modern design patterns.",
        image: "/images/project-career-hub.png",
        link: "https://react-career-hub-three.vercel.app/",
        github: "https://github.com/arabyhossainabid/react-career-hub",
        category: "React",
        tags: ["React", "UI/UX", "Platform", "Responsive"]
    },
    {
        id: 3,
        title: "Medical Service Portal",
        description: "Healthcare platform featuring appointment booking, patient management, form validation, and secure data handling with Next.js and Tailwind CSS.",
        image: "/images/project-medical-service.png",
        link: "/",
        github: "#",
        category: "Next.js",
        tags: ["Next.js", "Healthcare", "Forms", "Validation"]
    },
    {
        id: 4,
        title: "Personal Portfolio V2",
        description: "Modern portfolio website showcasing projects and skills with smooth animations, dark mode, and optimized performance using Next.js.",
        image: "/images/project-portfolio-v2.png",
        link: "https://my-portfolio-sage-two.vercel.app/",
        github: "https://github.com/arabyhossainabid/my-portfolio",
        category: "Next.js",
        tags: ["Portfolio", "Next.js", "Design", "Framer Motion"]
    },
    {
        id: 5,
        title: "Spylt Landing Page",
        description: "Creative landing page with interactive GSAP animations, parallax effects, and engaging micro-interactions for enhanced user engagement.",
        image: "/images/project-spylt-landing.png",
        link: "https://spylt-bay.vercel.app/",
        github: "https://github.com/arabyhossainabid/gsap-spylt",
        category: "GSAP",
        tags: ["GSAP", "Landing Page", "Animations", "Creative"]
    },
    {
        id: 6,
        title: "E-Commerce Dashboard",
        description: "Full-stack e-commerce admin dashboard with real-time analytics, inventory management, and order tracking built with Next.js and PostgreSQL.",
        image: "/images/Thumbnail.svg",
        link: "https://fayrashop.vercel.app/",
        github: "https://github.com/mdasif-me/fayrashop",
        category: "Full-Stack",
        tags: ["Next.js", "PostgreSQL", "Dashboard", "Analytics"]
    }
];

export default function ProjectsGrid() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <section className="bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--neon-yellow)]/5 rounded-full blur-[100px] opacity-30" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Featured <span className="text-[var(--neon-yellow)]">Work</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
                        Explore my latest projects showcasing modern web development
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-[var(--neon-yellow)] text-black shadow-[0_0_20px_0px_var(--neon-yellow)]"
                                    : "bg-white/5 text-gray-300 border border-white/10 hover:border-[var(--neon-yellow)]/50"
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                onHoverStart={() => setHoveredId(project.id)}
                                onHoverEnd={() => setHoveredId(null)}
                            >
                                <Card className="bg-white/5 border-white/10 overflow-hidden hover:border-[var(--neon-yellow)]/30 transition-all duration-300 group h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={500}
                                            height={300}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                                            className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex items-end justify-center gap-3 pb-6"
                                        >
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" className="bg-[var(--neon-yellow)] text-black hover:bg-[var(--neon-yellow)]/90">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </Button>
                                            </a>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </Button>
                                            </a>
                                        </motion.div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <CardContent className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--neon-yellow)] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                                            {project.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 3).map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 rounded-full bg-[var(--neon-yellow)]/10 text-[var(--neon-yellow)] text-xs font-medium border border-[var(--neon-yellow)]/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-medium border border-white/10">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 mb-6">Want to see more projects?</p>
                    <Button className="bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-[var(--neon-yellow)]/50 px-8 py-6 text-lg rounded-full">
                        <Filter className="w-5 h-5 mr-2" />
                        View All Projects
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
