import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const fullText = 'Chris Fitzgerald';
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cl-cream to-cl-silver relative overflow-hidden p-8">
      <div className="absolute inset-0 bg-noise opacity-10 z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-7xl font-serif font-extrabold text-cl-ink mb-6 tracking-wide"
        >
          {displayed}
          <span className="border-r-2 border-cl-orange ml-1 animate-blink" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl sm:text-2xl font-serif text-cl-ink/80 mb-10"
        >
          Photographer | Artist | Creator
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {['about', 'photography', 'contact'].map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              className="px-6 py-3 rounded-full bg-cl-orange text-cl-cream font-serif text-lg transition hover:bg-cl-ink hover:text-cl-cream shadow-md"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
