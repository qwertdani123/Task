
import axios from 'axios';
import context from './contexto.js';
import { useReducer } from 'react';
import  reducer  from './reducer.js';

import React from 'react'

export default function UsarContexto(props) { 
    const {children} = props;

    const estadoInicial = {
        productos: [], 
        carrito: [], 
    }
    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    const listameProductos = async () => {
        const res = await axios.get("https://fakestoreapi.com/products?limit=20");
        dispatch({type: "LISTAME_PRODUCTOS", payload: res.data});

    }; 

    const agregarAlCarrito = (item) => {
        console.log(item, " item carrito");
        dispatch({type: "AGREGAR_AL_CARRITO", payload: item});
    };


    const eliminarDelCarrito = (item) => {
        console.log(item, "carrito eliminado");
        dispatch({type: "ELIMINAR_DEL_CARRITO", payload: item});
  
    };

  return (
    <context.Provider value={{
        productos: estado.productos,
        carrito: estado.carrito,

        listameProductos,
        agregarAlCarrito,
        eliminarDelCarrito
    }}>
        {children}
    </context.Provider>
  )
}