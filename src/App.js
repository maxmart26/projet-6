import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Erreur from './pages/error/error';
import Propos from './pages/about/about';
import Home from './pages/home/home';
import Logement from './pages/housing/housing';

export default function App() {
  return (
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/*' element={<Erreur />}/>
          <Route path='/house/:id' element={<Logement/>}/>
          <Route path='/a-propos' element={<Propos/>}/>
        </Routes>
  );
}