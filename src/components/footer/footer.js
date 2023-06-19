import './styles/footer.css';
import logo from "./assets/LOGO-BLACK.png"
import phrase from "./assets/Footer-all.png"

function Footer(){
    return(
        <footer>
            <div className='kasa'>
            <img src={logo} alt="logo"/>
            </div>
            <div className='reserved'>
            <img src={phrase} alt="kasa 2020"/>
            </div>

        </footer>
    )
}
export default Footer