import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const { projectId } = useParams();
  const images = projects[projectId] || [];

  const title = projectId
    ? projectId.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : "";

  const openLightbox = (img) => {
    setLightboxImg(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImg(null);
  };

  if (!images.length) return <p className="p-6 text-[#026ead]">Shoot not found.</p>;

  return (
    <div className="relative min-h-screen bg-[#E7EBFD] text-[#026ead] font-sans overflow-hidden px-6 sm:px-20 py-12">
      {/* Back to all shoots */}
      <Link
        to="/photography"
        className="absolute top-6 left-6 text-sm sm:text-base font-medium text-[#026ead] hover:no-underline z-30 bg-[#D5DAFA] px-4 py-2 rounded"
      >
        ← Back to Photography
      </Link>

      {/* Menu Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <button
          className="text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-full sm:w-72 h-full bg-[#D5DAFA] text-[#026ead] z-30 p-8 flex flex-col items-start gap-10"
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-2xl font-bold"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <Link to="/" className="leading-tight space-y-0">
              <h2 className="text-3xl font-bold">Chris</h2>
              <h2 className="text-3xl font-bold -mt-2">Fitzgerald</h2>
            </Link>
            <div className="flex flex-col gap-6 mt-4">
              <Link to="/about" className="text-2xl font-medium">About</Link>
              <Link to="/photography" className="text-2xl font-medium">Photography</Link>
              <Link to="/contact" className="text-2xl font-medium">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="max-w-6xl mx-auto mt-10 space-y-10">
        <h1 className="text-7xl sm:text-8xl font-extrabold tracking-wide text-center uppercase" style={{ letterSpacing: '0.01em' }}>
          {title}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              className="block transition hover:scale-[1.01] focus:outline-none"
              onClick={() => openLightbox(src)}
              style={{ background: 'none', padding: 0, border: 'none' }}
            >
              <img
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full object-cover"
              />
            </button>
          ))}
          {/* Lightbox Modal */}
          <AnimatePresence>
            {lightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
                onClick={closeLightbox}
              >
                <div
                  className="relative max-w-5xl w-full mx-2 sm:mx-8"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    className="fixed top-4 right-4 sm:top-6 sm:right-6  text-[#026ead] text-3xl font-bold  flex items-center justify-center  z-[60] "
                    onClick={closeLightbox}
                    aria-label="Close lightbox"
                    type="button"
                  >
                    ✕
                  </button>

                  <img
                    src={lightboxImg}
                    alt="Enlarged"
                    className="w-full max-h-[92vh] object-contain  shadow-2xl"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
