import React from 'react'
import { motion } from 'framer-motion'

export default function GalleryModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white p-4 rounded-lg max-w-3xl w-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <button
          onClick={onClose}
          className="text-gray-600 mb-4"
        >
          Close
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${project.title}-${idx}`}
              className="w-full h-auto rounded-lg"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
