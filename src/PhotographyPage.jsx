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
    <div className="min-h-screen bg-white text-neutral-800 px-6 py-12 font-sans">
      <Link to="/" className="text-sm text-sky-500 font-light hover:underline mb-10 block">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-light text-center mb-12">Photography</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj.id}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer rounded-lg overflow-hidden border border-neutral-200"
            onClick={() => navigate(`/photography/${proj.id}`)}
          >
            <img
              src={proj.cover}
              alt={proj.title}
              className="w-full h-64 object-cover"
            />
            <div className="bg-white text-sky-600 p-4 text-center font-light text-lg">
              {proj.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
