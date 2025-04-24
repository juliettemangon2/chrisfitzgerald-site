import React, { useState } from 'react'
import { motion } from 'framer-motion'
import GalleryModal from './GalleryModal'

const projects = [
  {
    id: 1,
    title: 'Project One',
    cover: '/images/project1-cover.jpg',
    images: ['/images/project1-1.jpg', '/images/project1-2.jpg'],
  },
  // add more projects here
]

export default function PhotographyPage() {
  const [modalProject, setModalProject] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Photography
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer"
            onClick={() => setModalProject(project)}
          >
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h2 className="mt-2 text-xl text-gray-800">
              {project.title}
            </h2>
          </motion.div>
        ))}
      </div>

      {modalProject && (
        <GalleryModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  )
}
