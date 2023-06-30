import Baniere from "../../components/baniere/baniere"
import IMG from "../../datas/IMG.png"
import "./home.css"
import datas from "../../datas/datas.json"
import { Link } from 'react-router-dom';
import LogementItem from "../../components/logementcard/logement";

function Home(){
        return (
            <section>
                <Baniere
                photo ={IMG}
                titre ={"Chez vous , partout et ailleurs"}
                alt ={"paysage du rivage avec la mere"} 
                />
                <div className="logement">
                {datas && datas.slice(0, 6).map((data) => (
                <LogementItem
                id={data.id}
                cover={data.cover}
                title={data.title}
                key={data.id}
                />
                ))}
                </div> 
            </section>


        )}
export default Home