import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Erreur from './pages/erreur/erreur';
import Propos from './pages/a-propos/a-propos';
import Home from './pages/home/home';
import Logement from './pages/logement/logement';

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