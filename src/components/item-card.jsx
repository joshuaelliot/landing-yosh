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
          <button className='btn-wasap'><a href={`https://wa.me/${number}?text=oyemegustas%20https://cdn.lovcour.com/wp-content/uploads/2023/03/11075436/children-school-backpack-5-pcs-sets-17-inch-for-teens-girls-boys-43-680x680.jpg`}>Pidelo aqui   <img
            className='logo-wasap' src={LogoWasap} alt="" /></a></button>
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