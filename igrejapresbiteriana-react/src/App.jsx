import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop/BackToTop';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import EventsBanner from './components/EventsBanner/EventsBanner';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PopupModal from './components/PopupModal/PopupModal';
import './index.css';
import AshbelPage from './pages/AshbelPage';
import CalvinoPage from './pages/CalvinoPage';
import EscalasPage from './pages/EscalasPage';
import Home from './pages/Home';
import LuteroPage from './pages/LuteroPage';
import PastorPage from './pages/PastorPage';
import SobrePage from './pages/SobrePage';

function App() {
  return (
    <Router>
      <div className="App">
        <PopupModal />
        <Header />
        <Breadcrumbs />
        <EventsBanner />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Páginas dos Reformadores */}
            <Route path="/calvino" element={<CalvinoPage />} />
            <Route path="/lutero" element={<LuteroPage />} />
            <Route path="/ashbel" element={<AshbelPage />} />
            {/* Outras páginas em desenvolvimento */}
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/pastor" element={<PastorPage />} />
            <Route path="/escalas" element={<EscalasPage />} />
          </Routes>
        </main>

        <Footer id="footer" />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
