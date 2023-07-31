import React, { useState } from 'react';
import "../../style.css"
import logo from '../../datas/LOGO.png'
import {Link, useLocation} from "react-router-dom"

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname); 
  
    const handleLinkClick = (path) => {
      setActiveLink(path);
    };
  
    return (
      <header>
        <img className='logo' src={logo} alt='logo'/>
        <nav>
          <Link className={activeLink === "/" ? "active" : ""}to="/"onClick={() => handleLinkClick("/")}>Accueil</Link>
          <Link className={activeLink === "/a-propos" ? "active" : ""}to="/a-propos"onClick={() => handleLinkClick("/a-propos")}>A Propos</Link>
        </nav>
      </header>
    );
  };
  
  export default Header;