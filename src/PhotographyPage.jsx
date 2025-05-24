import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function importAll(r) {
  return r.keys().map((key) => ({
    path: r(key),
    file: key.replace('./', ''),
  }));
}
const allImages = importAll(
  require.context('./assets/images', true, /\.(jpe?g|png)$/)
);

const projects = Object.entries(
  allImages.reduce((map, { path, file }) => {
    const [folder] = file.split('/');
    (map[folder] = map[folder] || []).push(path);
    return map;
  }, {})
).map(([id, images]) => ({
  id,
  title: id.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) + ".",
  cover: images[0],
  images,
}));

export default function PhotographyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#f4e6ff] text-[#0e9fe3] font-sans overflow-hidden px-6 sm:px-20 py-12">
      {/* Menu Button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          className="text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full sm:w-72 h-full bg-[#ffab4a] text-[#0e9fe3] z-30 p-8 flex flex-col items-start gap-10"
          >
            <div>
              <h2 className="text-3xl font-bold">Chris</h2>
              <h2 className="text-3xl font-bold">Fitzgerald.</h2>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <Link to="/about" className="text-2xl font-medium">About</Link>
              <Link to="/photography" className="text-2xl font-medium">Photography</Link>
              <Link to="/contact" className="text-2xl font-medium">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto mt-20 sm:mt-28 space-y-8">
        <h1 className="text-4xl font-light text-center mb-12">Photography</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="cursor-pointer"
              onClick={() => navigate(`/photography/${proj.id}`)}
            >
              <img
                src={proj.cover}
                alt={proj.title}
                className="w-full h-64 object-cover"
              />
              <p className="mt-2 text-center text-lg font-light">{proj.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
