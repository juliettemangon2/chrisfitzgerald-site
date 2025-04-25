// src/PhotographyPage.jsx
import React, { useState } from 'react'
import { motion }        from 'framer-motion'
import GalleryModal      from './components/GalleryModal'
function importAll(r) {
  return r.keys().map((key) => ({
    path: r(key),
    file: key.replace('./', ''), // "studioshoots/fitzgerald_chris-001.jpg"
  }))
}
const allImages = importAll(
  require.context('./assets/images', true, /\.(jpe?g|png)$/)
)

// 2. Group by folder name
const projectsMap = allImages.reduce((map, { path, file }) => {
  const [folder] = file.split('/')           // "studioshoots"
  if (!map[folder]) map[folder] = []
  map[folder].push(path)
  return map
}, {})

// 3. Build a projects array
function formatTitle(id) {
  return id
    .split(/[-_]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}
const projects = Object.entries(projectsMap).map(([id, images]) => ({
  id,
  title: formatTitle(id),   // "studioshoots" → "Studioshoots" (or tweak)
  cover: images[0],
  images,
}))

export default function PhotographyPage() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Photography
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {projects.map(proj => (
          <motion.div
            key={proj.id}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(proj)}
          >
            {/* square thumbnail */}
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={proj.cover}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-2 text-center text-lg font-semibold text-gray-800">
              {proj.title}
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <GalleryModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  )
}
