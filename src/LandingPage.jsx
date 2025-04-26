import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const fullText = 'Chris Fitzgerald';
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  // looping typewriter effect
  useEffect(() => {
    const t = setTimeout(
      () => {
        if (idx < fullText.length) {
          setDisplayed((prev) => prev + fullText[idx]);
          setIdx(idx + 1);
        } else {
          setDisplayed('');
          setIdx(0);
        }
      },
      idx < fullText.length ? 150 : 2000
    );
    return () => clearTimeout(t);
  }, [idx, fullText]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cl-cream">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-6xl font-serif font-extrabold mb-8 text-cl-ink flex items-center"
      >
        {displayed}
        <span className="border-r-2 border-primary ml-1 animate-blink" />
      </motion.h1>

     <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/about" className="btn-primary font-serif">
            About&nbsp;Me
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/photography" className="btn-primary font-serif">
            Photography
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/contact" className="btn-primary font-serif">
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

