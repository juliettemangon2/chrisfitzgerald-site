import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Photography", href: "/photography" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-cl-ink text-cl-cream px-6 py-12 flex flex-col items-center justify-center">
      <motion.h1
        className="text-6xl sm:text-8xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Chris Fitzgerald
      </motion.h1>

      <motion.p
        className="text-xl sm:text-2xl text-cl-silver mb-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Photographer. Visual storyteller. Creator based in NYC.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        {navItems.map(({ label, href }, index) => (
          <motion.div
            key={label}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl bg-cl-orange text-cl-cream font-bold py-6 px-4 text-center transition-all shadow-lg hover:bg-white hover:text-cl-ink"
          >
            <Link to={href} className="text-xl block">{label}</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
