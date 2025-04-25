import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-cl-cream p-6">
      <Link to="/" className="btn-primary mb-6">
        Home
      </Link>
      <motion.img
        src={`${process.env.PUBLIC_URL}/chris.jpeg`}   
        alt="Chris Fitzgerald"
        className="w-48 h-48 object-cover rounded-full mb-6 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <motion.div
        className="max-w-xl text-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h1 className="text-4xl font-bold text-primary">About Me</h1><p className="text-lg text-gray-700 mb-4">
    Hello! My name is Chris Fitzgerald. I’m a 19-year-old photographer currently based in New York City, where I study Photography &amp; Imaging at NYU Tisch with a double major in Economics.
  </p>

  <p className="text-lg text-gray-700 mb-4">
    Originally from Boston, I’ve explored a wide range of creative work—spanning street and landscape photography, studio portraiture, actors’ headshots, conceptual photo series, and short films across genres.
  </p>

  <p className="text-lg text-gray-700 mb-4">
    Whether I’m behind the camera or in the editing studio, my focus is on using light, color, and composition to tell compelling, emotionally resonant stories.
  </p>

  <p className="text-lg text-gray-700">
    I’m currently seeking freelance photography work and internships in the media, art, or entertainment industries—especially roles that let me collaborate, sharpen my technical skills, and dive into bold creative storytelling. Feel free to reach out; I’d love to connect!
  </p>
      </motion.div>
    </div>
  )
}
