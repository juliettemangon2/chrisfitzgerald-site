import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", path: "/about", color: "text-blue-500" },
  { name: "Photography", path: "/photography", color: "text-pink-500" },
  { name: "Contact", path: "/contact", color: "text-green-500" }
];

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900">
      {/* Top bar */}
      <div className="absolute top-6 left-6 z-20">
        <button
          className="text-xl font-light tracking-wide text-red-500 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </button>
      </div>

      {/* Sidebar menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-64 h-full bg-gray-50 shadow-xl z-30 p-8 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-semibold mb-4 text-black">Navigation</h2>
            {navItems.map(({ name, path, color }) => (
              <Link
                key={name}
                to={path}
                className={`text-xl font-light hover:underline ${color}`}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="h-screen flex items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-6xl sm:text-8xl font-extralight tracking-tight">
            Chris Fitzgerald
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
