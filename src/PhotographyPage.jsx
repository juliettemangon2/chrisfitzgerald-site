import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

function importAll(r) {
  return r.keys().map((key) => ({
    path: r(key),
    file: key.replace('./', ''),
  }));
}
const allImages = importAll(
  require.context('./assets/images', true, /\.(jpe?g|png)$/)
);

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
    <div className="relative min-h-screen bg-cl-cream p-6 pt-24 sm:pt-12">
      <Link to="/" className="absolute top-4 left-4 bg-cl-orange text-cl-cream px-4 py-2 rounded-full font-serif text-sm shadow hover:bg-cl-ink hover:text-cl-cream transition">
        Home
      </Link>

      <h1 className="text-4xl font-bold text-cl-ink text-center mb-8">
        Photography
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer overflow-hidden shadow-lg"
            onClick={() => navigate(`/photography/${proj.id}`)}
          >
            <div className="aspect-square w-full">
              <img
                src={proj.cover}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition">
              <span className="text-white text-lg font-serif font-semibold tracking-wide">
                {proj.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
