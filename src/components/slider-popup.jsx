import React from "react";
import { useState } from "react";

function SliderPopup(){
    <>
    <div className="slider-container">
        

    </div>
    </>
}


 export const Carousel = () => {
    const images = [
      'https://th.bing.com/th/id/OIP.Gjf_4o4YxUD1pTrRSe9NCQHaF7?pid=ImgDet&rs=1',
      'https://www.eldiario24.com/d24ar/fotos/uploads/editorial/2014/02/20/imagenes/50593_estrellas.jpg',
      'https://okdiario.com/img/2018/03/01/detectan-la-luz-de-las-primeras-estrellas-del-universo-3.jpg',
      'https://c.files.bbci.co.uk/7A53/production/_102651313_gettyimages-651540162.jpg',
      'https://i0.wp.com/www.granuniverso.com/wp-content/uploads/2017/06/universo.jpg?fit=898%2C701&ssl=1',
    ];
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };
  
    return (
      <div className="carousel">
        <img 
        
        src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <button  className ={"btn-prev"} onClick={prevImage}>Previous</button>
        <button className="btn-next" onClick={nextImage}>Next</button>
      </div>
    );
  };
  