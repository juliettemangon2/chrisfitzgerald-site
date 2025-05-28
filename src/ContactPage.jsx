import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Photography", path: "/photography" },
  { name: "Contact", path: "/contact" }
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f4e6ff] text-[#026ead] font-sans overflow-hidden px-6 sm:px-20 py-12">
      {/* Sidebar toggle */}
      <div className="absolute top-6 right-6 z-20">
        <button
          className="text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full sm:w-72 h-full bg-[#ffab4a] text-[#026ead] z-30 p-8 flex flex-col items-start gap-10"
          >
            <Link to="/" className="leading-tight space-y-0">
              <h2 className="text-3xl font-bold">Chris</h2>
              <h2 className="text-3xl font-bold -mt-2">Fitzgerald.</h2>
            </Link>
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

      {/* Page content */}
      <div className="max-w-4xl mx-auto mt-20 sm:mt-28 space-y-10">
        <h1 className="text-4xl font-light text-center">About Me</h1>

        <div className="w-full flex justify-center">
          <img
            src="/chris.jpeg"
            alt="Chris Fitzgerald"
            className="w-full sm:w-[320px] h-auto object-cover rounded-md"
          />
        </div>

        <div className="space-y-6">
          {[
            "Hello! My name is Chris Fitzgerald. I’m a 19-year-old photographer currently based in New York City, where I study Photography & Imaging at NYU Tisch with a double major in Economics.",
            "Originally from Boston, I’ve explored a wide range of creative work—spanning street and landscape photography, studio portraiture, actors’ headshots, conceptual photo series, and short films across genres.",
            "Whether I’m behind the camera or in the editing studio, my focus is on using light, color, and composition to tell compelling, emotionally resonant stories.",
            "I’m currently seeking freelance photography work and internships in the media, art, or entertainment industries—especially roles that let me collaborate, sharpen my technical skills, and dive into bold creative storytelling. Feel free to reach out; I’d love to connect!"
          ].map((text, i) => (
            <p key={i} className="text-lg font-light">{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
