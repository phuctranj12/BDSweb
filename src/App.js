import React, { useState } from 'react';
import Header from './components/header/header';
import BDSContent from './views/BDSContent';
import TuVanContent from './views/TuVanContent';
import DichVuContent from './views/DichVuContent';
import LienHeContent from './views/LienHeContent';
import TrangChuContent from './views/TrangChuContent';
import Footer from './components/footer/footer';
import BDSDetail from './views/BDSDetail';
import BDSDetail2 from './views/BDSDetail2';
import PolicyContent from './views/PolicyContent';
import Login from './components/login/login';
import DuAn from './components/introDuAn/DuAn';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {



  return (

    <div>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<TrangChuContent />} />
          <Route path="/BDS" element={<BDSContent />} />
          <Route path="/TuVan" element={<TuVanContent />} />
          <Route path="/DichVu" element={<DichVuContent />} />
          <Route path="/LienHe" element={<LienHeContent />} />
          <Route path="/BDS-detail" element={<BDSDetail />} />
          <Route path="/BDS-detail2" element={<BDSDetail2 />} />
          <Route path="/Policy" element={<PolicyContent />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DuAn" element={<DuAn />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
