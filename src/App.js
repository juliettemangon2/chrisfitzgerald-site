import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import PhotographyPage from './PhotographyPage';
import ShootPage from './ShootPage';
import ContactPage from './ContactPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/photography" element={<PhotographyPage />} />
      <Route path="/photography/:projectId" element={<ShootPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
