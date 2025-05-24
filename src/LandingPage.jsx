import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Photography", path: "/photography" },
  { name: "Contact", path: "/contact" }
];

const wordVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const words = ["Photographer.", "Storyteller.", "Creative Thinker."];

  return (
    <div className="relative min-h-screen bg-[#0e9fe3] text-[#f4e6ff] font-sans overflow-hidden">
      <div className="absolute top-6 right-6 z-20">
        <button
          className="text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full sm:w-72 h-full bg-[#ffab4a] text-[#0e9fe3] z-30 p-8 flex flex-col items-start gap-10"
          >
            <h2 className="text-3xl font-bold">Chris</h2>
            <h2 className="text-3xl font-bold">Fitzgerald.</h2>
            <div className="flex flex-col gap-6 mt-4">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="text-2xl font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col justify-center items-start h-screen px-8 sm:px-24">
        {words.map((word, i) => (
          <motion.h1
            key={word}
            custom={i}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-7xl font-bold leading-tight"
          >
            {word}
          </motion.h1>
        ))}
      </div>
    </div>
  );
}
