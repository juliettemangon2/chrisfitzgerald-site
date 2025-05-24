import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const contacts = [
  { label: "Personal Email", href: "mailto:christophercagney322@gmail.com", text: "christophercagney322@gmail.com" },
  { label: "NYU Email", href: "mailto:ccf9854@nyu.edu", text: "ccf9854@nyu.edu" },
  { label: "Phone", href: "tel:+16174857367", text: "+1 (617) 485-7367" }
];

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f4e6ff] text-[#0e9fe3] font-sans overflow-hidden px-6 sm:px-20 py-12">
      <div className="absolute top-6 right-6 z-20">
        <button
          className="text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full sm:w-72 h-full bg-[#ffab4a] text-[#0e9fe3] z-30 p-8 flex flex-col items-start gap-10"
          >
            <div>
              <h2 className="text-3xl font-bold">Chris</h2>
              <h2 className="text-3xl font-bold">Fitzgerald.</h2>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <Link to="/about" className="text-2xl font-medium">About</Link>
              <Link to="/photography" className="text-2xl font-medium">Photography</Link>
              <Link to="/contact" className="text-2xl font-medium">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-xl mx-auto mt-20 sm:mt-28 space-y-8">
        <h1 className="text-3xl font-light text-center">Contact</h1>
        <div className="space-y-6 text-lg font-light">
          {contacts.map(({ label, href, text }, i) => (
            <div key={i}>
              <p className="font-semibold">{label}</p>
              <a href={href} className="hover:underline text-[#0e9fe3]">
                {text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
