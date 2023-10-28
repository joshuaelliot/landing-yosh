import React from "react";
import ItemCard from "./item-card";


export default function ContainerItems(){

    const lista =Array.from ({ length : 12 },(e,index)=>index);
    return (
        <div className="container">

      {lista.map((e,index)=>{
        return <ItemCard key={index} />
      })}
     </div>
    )
}