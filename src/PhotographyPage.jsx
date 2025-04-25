import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// ――― 1. Import every JPG/PNG in src/assets/images/**  ―――
function importAll(r) {
  return r.keys().map((key) => ({
    path: r(key),                // bundle URL
    file: key.replace('./', ''), // studioshoots/img1.jpg
  }));
}
const allImages = importAll(
  require.context('./assets/images', true, /\.(jpe?g|png)$/)
);

// ――― 2. Group images by their top-level folder ―――
const projects = Object.entries(
  allImages.reduce((map, { path, file }) => {
    const [folder] = file.split('/');
    (map[folder] = map[folder] || []).push(path);
    return map;
  }, {})
).map(([id, images]) => ({
  id,
  title: id                 // “sunset-portraits” → “Sunset Portraits”
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase()),
  cover: images[0],
  images,
}));

// ――― 3. Component ―――
export default function PhotographyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Photography
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            whileHover={{ scale: 1.04 }}
            className="relative cursor-pointer shadow-lg"
            onClick={() => navigate(`/photography/${proj.id}`)}
          >
            {/* square thumbnail */}
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={proj.cover}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* centered title overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-cl-ink text-lg font-serif font-semibold drop-shadow">
                {proj.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

