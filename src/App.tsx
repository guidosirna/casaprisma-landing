import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyBookButton from './components/StickyBookButton';
import CommunityCTA from './components/CommunityCTA';

import HomePage from './pages/HomePage';
import CoworkPage from './pages/CoworkPage';
import MusicStudioPage from './pages/MusicStudioPage';
import WorkshopsPage from './pages/WorkshopsPage';
import EventsPage from './pages/EventsPage';
import ArtGalleryPage from './pages/ArtGalleryPage';
import ProductionPage from './pages/ProductionPage';
import CommunityPage from './pages/CommunityPage';

function MainLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-prisma-cream">
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
      {!isHome && <CommunityCTA />}
      {!isHome && <Footer />}
      <StickyBookButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
