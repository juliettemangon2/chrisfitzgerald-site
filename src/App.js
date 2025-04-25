import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import AboutPage from './AboutPage'
import PhotographyPage from './PhotographyPage'
import ContactPage from './ContactPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/photography" element={<PhotographyPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/photography/:projectId" element={<ShootPage />} />

    </Routes>
  )
}

export default App
