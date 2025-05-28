import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Photography", path: "/photography" },
  { name: "Contact", path: "/contact" }
];

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const contacts = [
    {
      label: "Personal Email",
      href: "mailto:christophercagney322@gmail.com",
      text: "christophercagney322@gmail.com"
    },
    {
      label: "NYU Email",
      href: "mailto:ccf9854@nyu.edu",
      text: "ccf9854@nyu.edu"
    },
    {
      label: "Phone",
      href: "tel:+16174857367",
      text: "+1 (617) 485-7367"
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#f4e6ff] text-[#026ead] font-sans overflow-hidden px-6 sm:px-20 py-12">
      {/* Toggle button */}
      <div className="absolute top-6 right-6 z-20">
        <button
          className="text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full sm:w-72 h-full bg-[#ffab4a] text-[#026ead] z-30 p-8 flex flex-col items-start gap-10"
          >
            <Link to="/" className="leading-tight space-y-0">
              <h2 className="text-3xl font-bold">Chris</h2>
              <h2 className="text-3xl font-bold -mt-2">Fitzgerald.</h2>
            </Link>
            <div className="flex flex-col gap-6 mt-4">
              {navItems.map(({ name, path }) => (
                <Link
                  key={name}
                  to={path}
                  className="text-2xl font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Content */}
      <div className="max-w-3xl mx-auto mt-20 sm:mt-28">
        <h1 className="text-4xl font-light text-center mb-12">Contact</h1>
        <div className="grid gap-8">
          {contacts.map(({ label, href, text }, i) => (
            <a
              key={i}
              href={href}
              className="block border border-[#026ead] hover:bg-[#026ead] hover:text-white transition-all duration-300 px-6 py-5 rounded-lg shadow-sm"
            >
              <p className="text-md font-semibold mb-1">{label}</p>
              <p className="text-lg font-light">{text}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
