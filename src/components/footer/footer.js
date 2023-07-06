import './styles/footer.css';
import logo from "./assets/LOGO-BLACK.png"
import phrase from "./assets/Footer-all.png"
import phrase_re from "./assets/© 2020 Kasa. All rights reserved (1).png"


function Footer(){
    return(
        <footer>
            <div className='kasa'>
            <img src={logo} alt="logo"/>
            </div>
            <div className='reserved'>
            <img src={phrase} alt="kasa 2020" className='phrase'/>
            <img src={phrase_re} alt='kasa 2020' className='phrase_re'/>
            </div>
        </footer>
    )
}
export default Footer