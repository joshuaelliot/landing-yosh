import React from "react";
import { useState } from "react";
import LogoWasap from "../assets/whatssapp.svg"
import LogoClosePopup from "../assets/close-popup.svg"
import {Carousel} from "./slider-popup"
const number = 51910550230;

let precio = 60;

export default function ItemCard(props){
const [popup,setPopup] = useState(false);
    const showPopPup=(e)=>{
        setPopup(true);
    }
    const closePopup = ()=>{
        setPopup(false);
    }
    return(
        <div className="item" >
        <figure
        onClick={showPopPup}
        >
          <img src={props.imgUrl} 
          alt={props.descriptionProduct} />
          </figure>
        <div className='description-article-container'>
          <div className='data-article'>
            <h3 className="marca-article">{props.marcaProduct}</h3>
            <h3 className="description">{props.descriptionProduct}</h3>
            <h3 className="price-article">{`s/${props.price}`}</h3>
          </div>
          <button className='btn-wasap'><a href={`https://wa.me/${number}?text=Hola%20me%20interesa%20este%20producto%20${props.urlProduct}`}>
            Pidelo aqui   <img className='logo-wasap' src={LogoWasap} alt="" /></a></button>
            <a href="https://wa.me/15551234567?text=I'm%20interested%20in%20your%20car%20for%20sale">
    <meta property="og:title" content="Título de la publicación de Instagram"/>
    <meta property="og:description" content="Descripción de la publicación de Instagram"/>
    <meta property="og:image" content="https://cdn.lovcour.com/wp-content/uploads/2023/10/05182405/173-inch-waterproof-trendy-school-backpack-680x680.jpg"/>
    <meta property="og:url" content="URL de la publicación de Instagram"/> sad
</a>

        </div>
        {popup && (
            <div className="show-poppup">
                
                <button
                className="btn-close-popup"
                onClick={closePopup}>
                    <img src={LogoClosePopup} alt="" />
                </button>
                
                <div className="carousel-container">
                <Carousel/>
                </div>
                
            </div>
        )}
      </div>
    )
}