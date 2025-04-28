import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-cl-cream p-6">
      <Link
        to="/"
        className="absolute top-4 left-4 bg-cl-orange text-cl-cream px-4 py-2 rounded-full font-serif text-sm shadow hover:bg-cl-ink hover:text-cl-cream transition"
      >
        Home
      </Link>

      <motion.div
        className="bg-cl-silver shadow-xl rounded-xl p-8 w-full max-w-md text-center border-2 border-cl-orange"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-serif font-bold text-cl-ink mb-8">
          Contact
        </h1>

        <div className="space-y-6 text-lg font-serif text-cl-ink">
          {[
            { label: "Personal Email", link: "mailto:christophercagney322@gmail.com", text: "christophercagney322@gmail.com" },
            { label: "NYU Email", link: "mailto:ccf9854@nyu.edu", text: "ccf9854@nyu.edu" },
            { label: "Phone", link: "tel:+16174857367", text: "+1 (617) 485-7367" }
          ].map(({ label, link, text }, i) => (
            <div key={i}>
              <p className="font-bold">{label}</p>
              <a
                href={link}
                className="hover:underline text-cl-ink/90 hover:text-cl-orange transition"
              >
                {text}
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
