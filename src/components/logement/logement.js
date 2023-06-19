import './styles/logement.css';
import datas from "./../../datas/datas.json"
import image from "./assets/IMG.png"
import { Link } from 'react-router-dom';

function Logements(){
    let i = 1
    console.log(datas);

        return (
            <div>
            <div className='banner'>
            <img className="image-Banner" src={image} alt="paysage du rivage avec la mere"/>
            <span className='text'>Chez vous, partout et ailleurs</span>
            </div>
           <div className="logement">
           {datas && datas.slice(0,6).map((data => {
                    return(
                        <Link to={"/house/"+data.id} className="box" key={data.id}>
                            <figure><img src={data.cover}/>
                            <figcaption>{data.title}</figcaption></figure>
                        </Link>
                    ) 
                }))
            }
           </div> 
           </div>
        )
}
export default Logements