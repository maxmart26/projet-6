import './styles/header.css';
import logo from './assets/LOGO.png'
import {Link} from "react-router-dom"

function Header(){
    return (
        <header>
            <img className='logo' src={logo} alt='logo'/>
            <nav>
                    <Link to="/">accueil</Link>
                    <Link to="#">A Propos</Link>
            </nav>
        </header>
    )
}
export default Header