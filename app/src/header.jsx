import React from 'react';
import './assets/App.css';
import changos from './assets/changos.png';
import deleteImage from './assets/deleteImage.png';

import Contexto from './context.js/contexto';
import { useContext } from 'react';
import Item from './item.jsx';


export default function Header() {
  const { carrito, eliminarDelCarrito } = useContext(Contexto);

  const handleBorrar = (id) => {
    eliminarDelCarrito(id);
  };

return (
    <header>
        <div className="container">
            <h1>Tienda de Ropa</h1>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            
            <div className="cart-container">
                <div className="cart-dropdown">
                    <img src={changos} alt="Carrito de compras" className="cart-icon" />
                    <span className="product-count">{carrito.length}</span>
                    <div className="cart-dropdown-content">
                        <h2 className="cart-title">Productos</h2>
                        {carrito.length === 0 ? (
                            <p className="empty-cart-message">El carrito está vacío</p>
                        ) : (//aca se muestra el carrito 
                            carrito.map((item) => (
                                <div className="cart-item" key={item.id}>
                                    <Item {...item} />
                                    <span className="item-quantity">Cantidad: {item.cantidad}</span>
                                    <img
                                        src={deleteImage}
                                        alt="Eliminar"
                                        className="delete-icon"
                                        onClick={() => handleBorrar(item.id)}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

        </div>
    </header>
);
}
