"use client";
import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Mojito",
    subtitle: "Dynamic About Page / Motion Effects",
    img: "/images/gsap.svg",
    link: "https://mojito-ecru.vercel.app/",
    github: "#",
    tags: ["GSAP", "React", "Animation"]
  },
  {
    id: 2,
    title: "Career Hub",
    subtitle: "Job Search Platform / Responsive UI",
    img: "/images/dream-job.svg",
    link: "https://react-career-hub-three.vercel.app/",
    github: "#",
    tags: ["React", "UI/UX", "Platform"]
  },
  {
    id: 3,
    title: "Medical Service",
    subtitle: "NextUI / Tailwind / Validation",
    img: "/images/medical-service.svg",
    link: "/",
    github: "#",
    tags: ["Next.js", "Healthcare", "Forms"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    subtitle: "Next.js / Tailwind / Animation",
    img: "/images/cover.svg",
    link: "https://my-portfolio-sage-two.vercel.app/",
    github: "#",
    tags: ["Portfolio", "Next.js", "Design"]
  },
];

function Work() {
  return (
    <section className="bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[var(--neon-yellow)]/5 rounded-full blur-[100px] opacity-30" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-[var(--neon-yellow)]" />
            <span className="text-sm text-gray-300">Portfolio</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Take <span className="text-[var(--neon-yellow)]">a Look</span> at
            <br />
            My <span className="text-[var(--neon-yellow)]">Past</span> Work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 overflow-hidden hover:border-[var(--neon-yellow)]/30 transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.img}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-3 pb-6">
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
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--neon-yellow)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[var(--neon-yellow)]/10 text-[var(--neon-yellow)] text-xs font-medium border border-[var(--neon-yellow)]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
