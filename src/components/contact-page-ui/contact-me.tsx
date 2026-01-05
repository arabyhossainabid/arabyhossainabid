"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Facebook, Loader2, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const contactInfo = [
        { icon: Mail, title: "Email", details: "arabyhossainabid@gmail.com", link: "mailto:arabyhossainabid@gmail.com" },
        { icon: Phone, title: "Phone", details: "+880 192 380 7556", link: "tel:+8801923807556" },
        { icon: MapPin, title: "Location", details: "Dhaka,basabo Bangladesh", link: "https://www.google.com/maps/place/Dhaka,basabo+Bangladesh" },
    ];

    const socialLinks = [
        { icon: Github, link: "https://github.com/arabyhossainabid" },
        { icon: Linkedin, link: "https://www.linkedin.com/in/araby-hossain-abid-6790a5318/" },
        { icon: Facebook, link: "https://www.facebook.com/araby.hossain.abid" },
    ];

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const form = e.currentTarget;

        emailjs.sendForm(
            "service_whfm8k9",    // Service ID
            "template_j3h9isf",   // Template ID
            form,
            "ZzCef19tcZkULWCsB"   // Public Key
        )
            .then((response) => {
                setSubmitStatus("success");
                setIsSubmitting(false);

                // Form clear
                if (form) form.reset();

                setTimeout(() => setSubmitStatus("idle"), 5000);
            })
            .catch((error) => {
                setSubmitStatus("error");
                setIsSubmitting(false);

                setTimeout(() => setSubmitStatus("idle"), 5000);
            });
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0d0d0d] py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-96 h-96 bg-[var(--neon-yellow)]/5 rounded-full blur-3xl opacity-30" />
                <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-[var(--neon-yellow)]/5 rounded-full blur-3xl opacity-30" />
            </div>

            <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-center space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Let&apos;s <span className="text-[var(--neon-yellow)]">Connect</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Have a project in mind? I&apos;m always open to discussing new ideas.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {contactInfo.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.link}
                                target={item.title === "Location" ? "_blank" : undefined}
                                rel="noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[var(--neon-yellow)]/50 transition-all group"
                            >
                                <div className="p-3 rounded-full bg-[var(--neon-yellow)]/10 text-[var(--neon-yellow)] group-hover:bg-[var(--neon-yellow)] group-hover:text-black transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-medium text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.details}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[var(--neon-yellow)] hover:text-[var(--neon-yellow)] text-gray-300 transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card className="bg-white/5 backdrop-blur-md border-white/10 shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4" onSubmit={sendEmail}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Name</label>
                                        <Input
                                            required
                                            name="name"
                                            placeholder="Your Name"
                                            className="bg-black/50 border-white/10 focus-visible:ring-[var(--neon-yellow)] text-white"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400">Email</label>
                                        <Input
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="Your Email"
                                            className="bg-black/50 border-white/10 focus-visible:ring-[var(--neon-yellow)] text-white"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Subject</label>
                                    <Input
                                        required
                                        name="subject"
                                        placeholder="Subject"
                                        className="bg-black/50 border-white/10 focus-visible:ring-[var(--neon-yellow)] text-white"
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Message</label>
                                    <Textarea
                                        required
                                        name="message"
                                        placeholder="Your Message"
                                        rows={5}
                                        className="bg-black/50 border-white/10 focus-visible:ring-[var(--neon-yellow)] text-white resize-none"
                                        disabled={isSubmitting}
                                    />
                                </div>

                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        <span className="text-sm font-medium">
                                            Message sent successfully! I&apos;ll get back to you soon.
                                        </span>
                                    </motion.div>
                                )}

                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400"
                                    >
                                        <p className="text-sm font-medium">Oops! Something went wrong.</p>
                                        <p className="text-xs mt-1 text-red-300">
                                            Please check the EmailJS template configuration (remove Bcc or invalid headers) and try again.
                                        </p>
                                    </motion.div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[var(--neon-yellow)] h-14 text-lg text-black hover:bg-[var(--neon-yellow)]/90 font-bold rounded-full shadow-[0_0_0px_0_var(--neon-yellow)] hover:shadow-[0_0_15px_0px_var(--neon-yellow)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactMe;
