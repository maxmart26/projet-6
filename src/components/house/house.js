import datas from "../../datas/datas.json"
import {useParams} from 'react-router-dom'
import './styles/house.css'
//import './scripts/scripts.js'
//import React, { Component } from 'react';


function House(){
    const {id} = useParams();
    for(let data of datas){    
        if(data.id == id){
            return (
                <div className="house">
                    <div className="container">
                        <div className="carrousel">
                            {data.pictures && data.pictures.map((picture) => (
                            <img src={picture}/>
                            ))}
                            <div className="button-carrousel">
                            <button className="bouton" id="g"><i class="fa-solid fa-chevron-up"></i></button>
                            <button className="bouton" id="d"><i class="fa-solid fa-chevron-up"></i></button>
                            </div>
                        </div>
                        
                    </div>
                <section id="proprio">
                <div className="tags">
                    <h1>{data.title}</h1>
                    <h2>{data.location}</h2>
                    <div id="buttons">
                        {data.tags && data.tags.map((tag) => (
                            <button className="tag">{tag}</button>
                        ))}
                    </div>
                    </div>
                    <div id="hosts">
                    <div id="host">
                    <p>{data.host.name}</p>
                    <img src={data.host.picture}/>
                    </div>
                    <div id="stars">
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    <i class="fa-solid fa-star star"></i>
                    </div>
                    </div>
                  </section>
                  <section id="descriptions">
                  <div id="description">
                    <button>description<i class="fa-solid fa-chevron-up"></i></button>
                    <p>{data.description}</p>
                  </div>
                    <div id="equipement">
                        <button>équipements <i class="fa-solid fa-chevron-up"></i></button>
                        <div className="equipment">
                            {data.equipments && data.equipments.map((equipment) => (
                            <p>{equipment}</p>
                            ))}
                        </div>
                    </div>
                    </section>   
                </div>
            )
        }
    }   
}

export default  House