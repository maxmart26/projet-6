import React, { useEffect } from 'react';
import datas from "../../datas/datas.json"
import {useParams , useNavigate} from 'react-router-dom'
import ImageCarrousel from "../../components/carrousel/carrousel";
import TagButton from "../../components/tag/tag";
import EquipmentItem from "../../components/equipements/equipements";
import "./logement.css"
import Rate from "../../components/rate/rate";
import Erreur from '../erreur/erreur';

function Logement(){
    const {id} = useParams();
    const navigate = useNavigate();
    
    for(let data of datas){    
        if(data.id == id){
        let selectedData = data
    return(
        <div className='all'>
            <div className="house">

                        <ImageCarrousel data={selectedData} /> 
                </div>
                <section id="proprio">
                <div className="tags">
                    <h1>{data.title}</h1>
                    <h2>{data.location}</h2>
                    <div id="buttons">
                        {data.tags && data.tags.map((tag) => (
                        <TagButton tag={tag} key={tag} />)
                        )}
                    </div>
                </div>
                <div id="hosts">
                    <div id="host">
                    <p>{data.host.name}</p>
                    <img src={data.host.picture}/>
                    </div>
                    <div id="stars">
                        <Rate score={data.rating}/>
                    </div>
                    </div>
                </section>
                <section >
                  <EquipmentItem data={data}/>
                </section>
            </div>
            
        
    )}
}
return<Erreur/>}
export default Logement