"use client";
import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, Verified, ThumbsUp } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Araby Hossain Abid",
    role: "Full Stack Web Developer",
    company: "Self-Employed",
    image: "/images/client-1.jpg",
    review:
      "I create responsive and high-performance websites and web applications using React, Next.js, and Tailwind CSS. My focus is on clean code, smooth animations, and enhancing the overall user experience with modern technologies.",
    rating: 5,
    verified: true,
    likes: 42,
  },
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    company: "TechVenture Inc",
    image: "/images/client-2.jpg",
    review:
      "Abid delivered our web application with precision and creativity. The user interface is intuitive, visually appealing, and the site performs flawlessly on all devices. Highly recommended!",
    rating: 5,
    verified: true,
    likes: 38,
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    image: "/images/client-3.jpg",
    review:
      "Working with Abid was seamless. He brought our vision to life with modern frontend technologies, responsive layouts, and interactive elements that truly enhance user engagement.",
    rating: 5,
    verified: true,
    likes: 35,
  },
  {
    name: "Emma Williams",
    role: "Creative Director",
    company: "DesignHub",
    image: "/images/client-4.jpg",
    review:
      "Abid&apos;s frontend expertise is impressive. He perfectly integrates animations, responsive design, and usability into every project. Collaborating with him is always a great experience.",
    rating: 5,
    verified: true,
    likes: 40,
  },
];

export default function Customers() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#deff0008,transparent_50%),radial-gradient(circle_at_80%_70%,#8b5cf608,transparent_50%)]" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[var(--neon-yellow)]/5 rounded-full blur-[120px] opacity-30 animate-pulse" />
        <div
          className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
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
            <ThumbsUp className="w-4 h-4 text-[var(--neon-yellow)]" />
            <span className="text-sm font-semibold text-white">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            What{" "}
            <span className="bg-gradient-to-r from-[var(--neon-yellow)] to-yellow-300 bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
            <br />
            About My{" "}
            <span className="bg-gradient-to-r from-[var(--neon-yellow)] to-yellow-300 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Trusted by clients worldwide to deliver exceptional web experiences
            that exceed expectations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 h-full hover:border-[var(--neon-yellow)]/40 transition-all duration-500 hover:-translate-y-3 group backdrop-blur-sm relative overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-yellow)]/0 to-[var(--neon-yellow)]/0 group-hover:from-[var(--neon-yellow)]/5 group-hover:to-transparent transition-all duration-500" />

                {/* Decorative Quote */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-24 h-24 text-[var(--neon-yellow)]" />
                </div>

                <CardContent className="p-8 flex flex-col h-full relative z-10">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={20}
                        className={
                          idx < testimonial.rating
                            ? "text-[var(--neon-yellow)] fill-[var(--neon-yellow)]"
                            : "text-gray-600"
                        }
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-400">
                      ({testimonial.rating}.0)
                    </span>
                  </div>

                  {/* Review */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow text-base">
                    &quot;{testimonial.review}&quot;
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#deff00]/20 rounded-full blur-md group-hover:blur-lg transition-all" />
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={56}
                          height={56}
                          className="rounded-full object-cover border-2 border-[#deff00]/30 relative z-10"
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#deff00] rounded-full border-2 border-[#0d0d0d] flex items-center justify-center z-20">
                            <Verified className="w-3.5 h-3.5 text-black fill-black" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold text-white group-hover:text-[var(--neon-yellow)] transition-colors flex items-center gap-2">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        <p className="text-gray-500 text-xs">{testimonial.company}</p>
                      </div>
                    </div>

                    {/* Likes */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                      <ThumbsUp className="w-3.5 h-3.5 text-[var(--neon-yellow)]" />
                      <span className="text-sm font-medium text-white">
                        {testimonial.likes}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-br from-[var(--neon-yellow)]/15 via-purple-500/10 to-blue-500/10 border-[var(--neon-yellow)]/30 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "4.9/5", label: "Average Rating" },
                  { value: "30+", label: "Happy Clients" },
                  { value: "155", label: "Total Reviews" },
                  { value: "100%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[var(--neon-yellow)] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
