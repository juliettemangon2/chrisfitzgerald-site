"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AuroraBackground } from "./ui/aurora-background";

export default function LandingPage() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-32"
      >
        {/* Name */}
        <h1 className="text-5xl sm:text-7xl font-serif font-extrabold text-cl-ink tracking-wide mb-6">
          Chris Fitzgerald
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl font-serif text-cl-ink/80 mb-10">
          Photographer | Artist | Creator
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {["about", "photography", "contact"].map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              className="px-6 py-3 rounded-full bg-cl-orange text-cl-cream font-serif text-lg transition hover:bg-cl-ink hover:text-cl-cream shadow-md"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
