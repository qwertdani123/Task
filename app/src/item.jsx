import { useContext } from 'react';
import Contexto from './context.js/contexto';
import './assets/App.css';



export default function Item(props) {

  const { title, price, description, image, id } = props;
  const { agregarAlCarrito } = useContext(Contexto);


  return (

    <div className="product-card">
      <img className="product-card__image" src={image} alt={title} />
      <div className="product-card__info">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">{price}</p>
        <p className="product-card__description">{description}</p>

      </div>
        <div>{
        <button 
          className="product-card__button" 
          onClick={() => agregarAlCarrito({id,image})}> Agregar al carrito
        </button> }
      
    
        </div>
    </div>
    
  );
  
}


