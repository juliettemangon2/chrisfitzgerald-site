import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const fullText = 'Chris Fitzgerald';
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  // looping typewriter effect
  useEffect(() => {
    const t = setTimeout(() => {
      if (idx < fullText.length) {
        setDisplayed(prev => prev + fullText[idx]);
        setIdx(idx + 1);
      } else {
        setDisplayed('');
        setIdx(0);
      }
    }, idx < fullText.length ? 150 : 2500);

    return () => clearTimeout(t);
  }, [idx]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cl-cream to-white relative overflow-hidden p-8">

      {/* Background soft texture */}
      <div className="absolute inset-0 bg-noise opacity-10 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Name with typing effect */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-7xl font-serif font-extrabold text-cl-ink mb-6 tracking-wide"
        >
          {displayed}
          <span className="border-r-2 border-primary ml-1 animate-blink" />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl sm:text-2xl font-serif text-cl-ink/80 mb-10"
        >
          Photographer | Artist | Creator
        </motion.p>

        {/* Button group */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            to="/about"
            className="btn-primary font-serif px-6 py-3 rounded-full text-lg transition hover:scale-105"
          >
            About Me
          </Link>
          <Link
            to="/photography"
            className="btn-primary font-serif px-6 py-3 rounded-full text-lg transition hover:scale-105"
          >
            Photography
          </Link>
          <Link
            to="/contact"
            className="btn-primary font-serif px-6 py-3 rounded-full text-lg transition hover:scale-105"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
