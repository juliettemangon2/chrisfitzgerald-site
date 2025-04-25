import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Dynamically load every JPG/PNG under src/assets/images/**
function importAll(r) {
  return r.keys().map((key) => ({
    path: r(key),
    file: key.replace('./', ''), // e.g. studioshoots/photo1.jpg
  }));
}
const allImages = importAll(
  require.context('./assets/images', true, /\.(jpe?g|png)$/)
);

// Group by folder
const projects = Object.entries(
  allImages.reduce((map, { path, file }) => {
    const [folder] = file.split('/');
    (map[folder] = map[folder] || []).push(path);
    return map;
  }, {})
).map(([id, images]) => ({
  id,
  title: id.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
  cover: images[0],
  images,
}));

export default function PhotographyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Photography
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {projects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.04 }}
            className="relative cursor-pointer shadow-lg"
            onClick={() => navigate(`/photography/${p.id}`)}
          >
            {/* square thumbnail */}
            <div className="aspect-square w-full overflow-hidden">
              <img
                src={p.cover}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* centered title overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-black/60 text-white px-3 py-1 rounded text-lg font-semibold">
                {p.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

      )}
    </div>
  )
}
