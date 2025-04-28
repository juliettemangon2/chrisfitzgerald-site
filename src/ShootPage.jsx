import React from 'react';
import { useParams, Link } from 'react-router-dom';

function importAll(r) {
  return r.keys().map((key) => ({
    path: r(key),
    file: key.replace('./', ''),
  }));
}
const allImages = importAll(
  require.context('./assets/images', true, /\.(jpe?g|png)$/)
);

const projects = allImages.reduce((map, { path, file }) => {
  const [folder] = file.split('/');
  (map[folder] = map[folder] || []).push(path);
  return map;
}, {});

export default function ShootPage() {
  const { projectId } = useParams();
  const images = projects[projectId] || [];

  if (!images.length) return <p className="p-6 text-cl-ink">Shoot not found.</p>;

  const title = projectId
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="relative min-h-screen bg-cl-cream p-6">
      <Link
        to="/photography"
        className="absolute top-4 left-4 bg-cl-orange text-cl-cream px-4 py-2 rounded-full font-serif text-sm hover:bg-cl-ink hover:text-cl-cream transition shadow"
      >
        ← All Shoots
      </Link>

      <h1 className="mt-24 sm:mt-16 text-3xl font-serif font-bold text-cl-ink mb-8 text-center">
        {title}
      </h1>

      <div className="space-y-8">
        {images.map((src, i) => (
          <a key={i} href={src} target="_blank" rel="noopener noreferrer">
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full max-w-4xl mx-auto object-contain rounded-lg shadow-lg transition hover:scale-105"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
