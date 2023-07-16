import "../../style.css"
import logo from '../../datas/LOGO.png'
import {Link} from "react-router-dom"

function Header(){
    return (
        <header>
            <img className='logo' src={logo} alt='logo'/>
            <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/a-propos">A Propos</Link>
            </nav>
        </header>
    )
}
export default Header