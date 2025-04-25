import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const fullText = 'Chris Fitzgerald';
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    let timeout1;
    let timeout2;

    if (idx < fullText.length) {
      timeout1 = setTimeout(() => {
        setDisplayed((prev) => prev + fullText[idx]);
        setIdx(idx + 1);
      }, 150);
    } else {
      timeout2 = setTimeout(() => {
        setDisplayed('');
        setIdx(0);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [idx, fullText]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-6xl font-extrabold mb-8 text-primary flex items-center"
      >
        {displayed}
        <span className="border-r-2 border-primary ml-1 animate-blink" />
      </motion.h1>

      <div className="flex space-x-4">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/about"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg"
          >
            About Me
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/photography"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg"
          >
            Photography
          </Link>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg"
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </div>
  );
}


      </div>
    </div>
  );
}
