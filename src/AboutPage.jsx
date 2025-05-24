import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-800 px-6 sm:px-20 py-12 font-sans">
      <Link
        to="/"
        className="text-sm text-sky-500 font-light mb-10 hover:underline inline-block"
      >
        ← Back to Home
      </Link>

      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.img
          src={process.env.PUBLIC_URL + "/chris.jpeg"}
          alt="Chris Fitzgerald"
          className="w-60 h-60 object-cover rounded-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="space-y-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-light">About Me</h1>
          {[
            "Hello! My name is Chris Fitzgerald. I’m a 19-year-old photographer currently based in New York City, where I study Photography & Imaging at NYU Tisch with a double major in Economics.",
            "Originally from Boston, I’ve explored a wide range of creative work—spanning street and landscape photography, studio portraiture, actors’ headshots, conceptual photo series, and short films across genres.",
            "Whether I’m behind the camera or in the editing studio, my focus is on using light, color, and composition to tell compelling, emotionally resonant stories.",
            "I’m currently seeking freelance photography work and internships in the media, art, or entertainment industries—especially roles that let me collaborate, sharpen my technical skills, and dive into bold creative storytelling. Feel free to reach out; I’d love to connect!"
          ].map((text, idx) => (
            <p key={idx} className="text-lg font-light text-neutral-700">
              {text}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
