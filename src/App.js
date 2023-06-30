
import './App.css';
import Header from './components/header/header';
import Logements from './components/logementcard/logement';
import Footer from './components/footer/footer';
import { Routes ,Route } from 'react-router-dom';



function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Logements />}/>
          
       
          
        </Routes>
        <Footer />
     
    </div>
    
  );
}

export default App;
