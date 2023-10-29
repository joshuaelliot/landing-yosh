import React from "react";
import { useState } from "react";
import LogoWasap from "../assets/whatssapp.svg"
import LogoClosePopup from "../assets/close-popup.svg"
import {Carousel} from "./slider-popup"
const number = 51910550230;

let precio = 608966778899;

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
          <button className='btn-wasap'><a href={`https://wa.me/${number}?text=Hola%20me%20interesa%20este%20producto%20imagen&image=${"https%3A%2F%2Fmedia-v4.edamama.ph%2Fproducts%2FDSCF1679_1597934034780.jpg"}`}>
            Pidelo aqui   <img className='logo-wasap' src={LogoWasap} alt="" /></a></button>
            
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