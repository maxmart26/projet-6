import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/index.css';
import App from './App';
import Header from './components/header/header';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import { Routes ,Route } from 'react-router-dom';
import Erreur from './pages/erreur/erreur';

import Propos from './pages/a-propos/a-propos';
import Home from './pages/home/home';
import Logement from './pages/logement/logement';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/*' element={<Erreur />}/>
        <Route path='/house/:id' element={<Logement/>}/>
        <Route path='/a-propos' element={<Propos/>}/>
      </Routes>
    <Footer/>
  </BrowserRouter>
);
