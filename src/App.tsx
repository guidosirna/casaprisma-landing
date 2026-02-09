import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyBookButton from './components/StickyBookButton';

// Pages
import HomePage from './pages/HomePage';
import CoworkPage from './pages/CoworkPage';
import MusicStudioPage from './pages/MusicStudioPage';
import WorkshopsPage from './pages/WorkshopsPage';
import EventsPage from './pages/EventsPage';
import ArtGalleryPage from './pages/ArtGalleryPage';
import ProductionPage from './pages/ProductionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cowork" element={<CoworkPage />} />
          <Route path="/estudio-musical" element={<MusicStudioPage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/galeria-arte" element={<ArtGalleryPage />} />
          <Route path="/produccion" element={<ProductionPage />} />
        </Routes>
        <Footer />
        <StickyBookButton />
      </div>
    </Router>
  );
}

export default App;