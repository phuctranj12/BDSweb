import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import CallButton from './components/button/CallButton';
import ZaloButton from './components/button/ZaloButton';

import TrangChuContent from './views/TrangChuContent';
import BDSContent from './views/BDSContent';
import TuVanContent from './views/TuVanContent';
import DichVuContent from './views/DichVuContent';
import LienHeContent from './views/LienHeContent';
import BDSDetail from './views/BDSDetail';
import PolicyContent from './views/PolicyContent';
import Login from './components/login/login';
import DuAnContent from './views/DuAnContent';
import AboutUsContent from './views/AboutUsContent';
import NewsContent from './views/NewsContent';
import NewsDetailContent from './views/NewsDetailContent';

import './App.css';

/**
 * Restores scroll to the top on navigation. Without this, routing to a new page
 * keeps the previous page's scroll offset.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  const { pathname } = useLocation();

  // The home hero runs full-bleed beneath the transparent header; every other
  // page must reserve the header's height so content isn't hidden under it.
  const isHome = pathname === '/';

  return (
    <div className="app-shell">
      <a className="u-skip-link" href="#main">
        Bỏ qua và tới nội dung chính
      </a>

      <ScrollToTop />
      <Header />

      <main id="main" className={isHome ? 'app-main' : 'app-main app-main--offset'}>
        <Routes>
          <Route path="/" element={<TrangChuContent />} />
          <Route path="/BDS" element={<BDSContent />} />
          <Route path="/TuVan" element={<TuVanContent />} />
          <Route path="/DichVu" element={<DichVuContent />} />
          <Route path="/LienHe" element={<LienHeContent />} />
          <Route path="/BDS-detail" element={<BDSDetail />} />
          <Route path="/Policy" element={<PolicyContent />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DuAn" element={<DuAnContent />} />
          <Route path="/AboutUs" element={<AboutUsContent />} />
          <Route path="/News" element={<NewsContent />} />
          <Route path="/NewsDetailContent/:id" element={<NewsDetailContent />} />
        </Routes>
      </main>

      <Footer />

      <div className="app-float-stack">
        <ZaloButton />
        <CallButton />
      </div>
    </div>
  );
}

export default App;
