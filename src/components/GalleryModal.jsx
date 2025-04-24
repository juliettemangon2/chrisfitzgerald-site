// src/components/GalleryModal.jsx
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GalleryModal({ project, onClose }) {
  const { title, images } = project
  const [index, setIndex] = useState(0)

  // Close on Escape
  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft')  setIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [images.length, onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}      // click backdrop to close
      >
        <motion.div
          className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}  // prevent closing when clicking content
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl"
          >
            &times;
          </button>

          {/* Title */}
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold text-primary">{title}</h2>
          </div>

          {/* Main image */}
          <div className="flex items-center justify-center bg-black">
            <img
              src={images[index]}
              alt={`${title} ${index + 1}`}
              className="max-h-[80vh] w-auto object-contain"
            />
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2"
          >
            ‹
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % images.length)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl p-2"
          >
            ›
          </button>

          {/* Thumbnail strip */}
          <div className="flex overflow-x-auto gap-2 p-4 bg-gray-100">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} thumb ${i + 1}`}
                className={`h-20 w-20 object-cover rounded cursor-pointer border-2 ${
                  i === index ? 'border-primary' : 'border-transparent'
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
