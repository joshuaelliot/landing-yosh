import React from "react";
import ItemCard from "./item-card";
import ListProduct from "../json/products.json";

export default function ContainerItems() {

 // const lista = Array.from({ length: 12 }, (e, index) => index);

  return (
    <div className="container">

      {ListProduct.map((e, index) => {
        return <ItemCard key={index}
          imgUrl={e.imgUrl}
          marcaProduct={e.marcaProduct}
          descriptionProduct={e.descriptionProduct}
          price={e.price}
        />
      })}
    </div>
  )
}