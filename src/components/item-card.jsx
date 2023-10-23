import React from "react";
import { useState } from "react";
import LogoWasap from "../assets/whatssapp.svg"
import LogoClosePopup from "../assets/close-popup.svg"
import {Carousel} from "./slider-popup"
const number = 51910550230;



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
          <img src="https://i.pinimg.com/564x/b4/bd/ee/b4bdee855a004c9181847482f5e4547d.jpg" 
          alt="" />
          </figure>
        <div className='description-article'>
          <div className='name-article'>
            <h3>BOBO</h3>
            <h3>Mochila estilo coreano</h3>
            <h3>s/80</h3>
            <button className='btn-wasap'><a href={`https://wa.me/${number}`}>Pidelo aqui   <img
            className='logo-wasap' src={LogoWasap} alt="" /></a></button>
          </div>
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