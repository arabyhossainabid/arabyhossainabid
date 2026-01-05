"use client";

import { Suspense } from "react";
import { motion } from "motion/react";

interface LoadingSpinnerProps {
    fullScreen?: boolean;
    size?: "sm" | "md" | "lg";
}

export default function LoadingSpinner({
    fullScreen = false,
    size = "md"
}: LoadingSpinnerProps) {
    const sizeClasses = {
        sm: "w-8 h-8 border-2",
        md: "w-16 h-16 border-4",
        lg: "w-24 h-24 border-4",
    };

    const spinner = (
        <div className="relative">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className={`${sizeClasses[size]} border-[#deff00]/20 border-t-[#deff00] rounded-full`}
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className={`absolute inset-0 m-auto ${size === "sm" ? "w-4 h-4" : size === "md" ? "w-8 h-8" : "w-12 h-12"
                    } bg-[#deff00] rounded-full blur-sm`}
            />
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d0d]">
                {spinner}
            </div>
        );
    }

    return <div className="flex items-center justify-center p-8">{spinner}</div>;
}

// Suspense wrapper component for lazy-loaded components
export function LoadingSuspense({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<LoadingSpinner fullScreen />}>
            {children}
        </Suspense>
    );
}