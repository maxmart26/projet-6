import React from "react";
import image from "../../datas/404.png"
import {Link} from "react-router-dom"
import "../../style.css"


function Erreur(){
    return(
        <div className="erreur">
            <img src={image} alt="erreur 404" />
            <p className="oups">OUPS! La page que vous demandez n'existe pas</p>
            <Link to="/" className="link">retourner  sur page d'accueil</Link>
        </div>
    )
}
export default Erreur