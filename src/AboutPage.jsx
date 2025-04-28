import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-cl-cream p-6 relative">
      <Link to="/" className="absolute top-4 left-4 bg-cl-orange text-cl-cream px-4 py-2 rounded-full font-serif text-sm hover:bg-cl-ink hover:text-cl-cream transition shadow">
        Home
      </Link>

      <motion.img
        src={`${process.env.PUBLIC_URL}/chris.jpeg`}
        alt="Chris Fitzgerald"
        className="w-48 h-48 object-cover rounded-full mb-6 shadow-lg mt-16"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="max-w-xl text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-4xl font-serif font-bold text-cl-ink mb-4">
          About Me
        </h1>

        {[
          "Hello! My name is Chris Fitzgerald. I’m a 19-year-old photographer currently based in New York City, where I study Photography & Imaging at NYU Tisch with a double major in Economics.",
          "Originally from Boston, I’ve explored a wide range of creative work—spanning street and landscape photography, studio portraiture, actors’ headshots, conceptual photo series, and short films across genres.",
          "Whether I’m behind the camera or in the editing studio, my focus is on using light, color, and composition to tell compelling, emotionally resonant stories.",
          "I’m currently seeking freelance photography work and internships in the media, art, or entertainment industries—especially roles that let me collaborate, sharpen my technical skills, and dive into bold creative storytelling. Feel free to reach out; I’d love to connect!"
        ].map((text, idx) => (
          <p key={idx} className="text-lg font-serif text-cl-ink/90">
            {text}
          </p>
        ))}
      </motion.div>
    </div>
  );
}
