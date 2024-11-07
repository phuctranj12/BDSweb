import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Slide from './components/slide/slide';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import BodyIntro from './components/bdsIntroBody/body';
import Footer from './components/footer/footer';
import Input from './components/tuVan/tuVan';
import BDSDetail from './views/BDSDetail';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
