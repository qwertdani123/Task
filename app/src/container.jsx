import React, { useContext, useEffect } from "react";
import Contexto from "./context.js/contexto";
import Item from './item';

export default function productos() {
  


  useEffect(() => {
    listameProductos();
  }, []);
  const { listameProductos, productos } = useContext(Contexto);
 
  
  return (
    <div className="container">
      <section className="product-grid">
      
          {
            
          productos.map((item) => (
            <Item {...item} key={item.id} />
          ))}

      </section>
    </div>
  );
}


//aca estan los poroductos que se van a mostrar en la pagina principal
// here are the products that will be displayed on the main page