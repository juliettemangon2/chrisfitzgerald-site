import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cl-cream p-6">
      {/* Top-left Home button */}
      <Link
        to="/"
        className="btn-primary font-serif absolute top-4 left-4 bg-cl-ink text-cl-cream px-4 py-2 rounded-md hover:bg-cl-ink/80 transition"
      >
        Home
      </Link>

      {/* Business Card Container */}
      <motion.div
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center border-2 border-cl-ink"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-bold text-cl-ink mb-6">Contact</h1>

        <div className="space-y-6 text-lg font-serif text-cl-ink">
          <div>
            <p className="font-bold">Personal Email</p>
            <a
              href="mailto:christophercagney322@gmail.com"
              className="underline hover:opacity-80"
            >
              christophercagney322@gmail.com
            </a>
          </div>

          <div>
            <p className="font-bold">NYU Email</p>
            <a
              href="mailto:ccf9854@nyu.edu"
              className="underline hover:opacity-80"
            >
              ccf9854@nyu.edu
            </a>
          </div>

          <div>
            <p className="font-bold">Phone</p>
            <a
              href="tel:+16174857367"
              className="underline hover:opacity-80"
            >
              +1 (617) 485-7367
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
