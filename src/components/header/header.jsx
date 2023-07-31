import "../../style.css"
import logo from '../../datas/LOGO.png'
import {Link, useLocation} from "react-router-dom"

function Header(){
    const location = useLocation();
    return (
        <header>
            <img className='logo' src={logo} alt='logo'/>
            <nav>
                    <Link to="/">Accueil</Link>
                    <Link className={location.pathname === "/a-propos" ? "active" : ""} to="/a-propos">A Propos</Link>
            </nav>
        </header>
    )
}
export default Header