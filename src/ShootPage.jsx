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

  if (!images.length) return <p className="p-6 text-neutral-800">Shoot not found.</p>;

  const title = projectId
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="min-h-screen bg-white text-neutral-800 px-6 py-12 font-sans">
      <Link
        to="/photography"
        className="text-sm text-sky-500 font-light mb-10 block hover:underline"
      >
        ← All Shoots
      </Link>

      <h1 className="text-3xl font-light mb-10 text-center">{title}</h1>

      <div className="space-y-10">
        {images.map((src, i) => (
          <a key={i} href={src} target="_blank" rel="noopener noreferrer">
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full max-w-5xl mx-auto object-contain transition hover:scale-[1.01]"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
