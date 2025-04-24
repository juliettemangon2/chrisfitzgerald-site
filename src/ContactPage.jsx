import React from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <motion.h1
        className="text-4xl font-bold text-primary mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h1>

      <motion.div
        className="space-y-4 text-lg text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p>
          Email:{' '}
          <a href="mailto:chris@example.com" className="text-primary underline">
          ccf9854@nyu.edu
          </a>
        </p>
        <p>
          Phone:{' '}
          <a href="tel:+1234567890" className="text-primary underline">
          +1 (617) 485-7367
          </a>
        </p>
      </motion.div>
    </div>
  )
}
