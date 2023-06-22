
import './App.css';
import Header from './components/header/header';
import Logements from './components/logement/logement';
import Footer from './components/footer/footer';
import { Routes ,Route } from 'react-router-dom';
import Erreur from './components/erreur/erreur';
import House from './components/house/house'
import Propos from './components/propos/propos'
function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Logements />}/>
          <Route path='/*' element={<Erreur />}/>
          <Route path='/house/:id' element={<House/>}/>
          <Route path='/a-propos' element={<Propos/>}/>
        </Routes>
        <Footer />
     
    </div>
    
  );
}

export default App;
