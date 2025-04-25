import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cl-cream p-6">
      {/* top-right Home button */}
      <Link to="/" className="btn-primary font-serif absolute top-4 right-4">
        ← Home
      </Link>

      <motion.h1
        className="text-4xl font-serif font-bold text-cl-ink mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h1>

      <motion.div
        className="space-y-4 text-lg font-serif text-cl-ink"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p>
          Personal Email:{' '}
          <a
            href="mailto:christophercagney322@gmail.com"
            className="no-underline hover:underline"
          >
            ccf9854@nyu.edu
          </a>
        </p>
        <p>
          NYU Email:{' '}
          <a
            href="mailto:ccf9854@nyu.edu"
            className="no-underline hover:underline"
          >
            ccf9854@nyu.edu
          </a>
        </p>

        <p>
          Phone:{' '}
          <a
            href="tel:+16174857367"
            className="no-underline hover:underline"
          >
            +1&nbsp;(617)&nbsp;485-7367
          </a>
        </p>
      </motion.div>
    </div>
  );
}
