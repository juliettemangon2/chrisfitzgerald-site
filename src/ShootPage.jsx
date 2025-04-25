import React from 'react';
import { useParams, Link } from 'react-router-dom';

// ── dynamic import ───────────────────────────────────────
function importAll(r) {
  return r.keys().map((key) => ({
    path: r(key),
    file: key.replace('./', ''),
  }));
}
const allImages = importAll(
  require.context('./assets/images', true, /\.(jpe?g|png)$/)
);

// group by folder
const projects = allImages.reduce((map, { path, file }) => {
  const [folder] = file.split('/');
  (map[folder] = map[folder] || []).push(path);
  return map;
}, {});

// ── component ────────────────────────────────────────────
export default function ShootPage() {
  const { projectId } = useParams();
  const images = projects[projectId] || [];

  if (!images.length) return <p className="p-6">Shoot not found.</p>;

  const title = projectId
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="relative min-h-screen bg-cl-cream p-6">
      {/* back button */}
      <Link
        to="/photography"
        className="btn-primary font-serif absolute top-4 left-4"
      >
        ← All Shoots
      </Link>

      {/* title pushed below the button */}
      <h1 className="mt-16 text-3xl font-bold font-serif text-cl-ink mb-6">
        {title}
      </h1>

      {/* vertical gallery */}
      <div className="space-y-6">
        {images.map((src, i) => (
          <a key={i} href={src} target="_blank" rel="noopener noreferrer">
            <img
              src={src}
              alt={`${title} ${i + 1}`}
              className="w-full max-w-4xl mx-auto object-contain shadow"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
