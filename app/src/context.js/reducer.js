// Reducer

const LISTAME_PRODUCTOS  = 'LISTAME_PRODUCTOS';
const AGREGAR_AL_CARRITO = 'AGREGAR_AL_CARRITO';
const ELIMINAR_DEL_CARRITO = 'ELIMINAR_DEL_CARRITO';

export default function reducer(state, action) {
    const { type, payload } = action;
    
    switch (type) {
        case LISTAME_PRODUCTOS:
            return {
                ...state,
                productos: payload
            };

        case AGREGAR_AL_CARRITO:
            // Check if the item is already in the cart
            const existingItem = state.carrito.find((item) => item.id === payload.id);
            
            if (existingItem) {
                // If it is, increment the quantity
                return {
                    ...state,
                    carrito: state.carrito.map((item) =>
                        item.id === payload.id
                            ? { ...item, cantidad: item.cantidad + 1 }
                            : item
                    )
                };
            } else {
                // If it is not, add it to the cart with quantity 1
                return {
                    ...state,
                    carrito: [...state.carrito, { ...payload, cantidad: 1 }]
                };
            }
        
        case ELIMINAR_DEL_CARRITO:
            // Remove the item from the cart
            return {
                ...state,
                carrito: state.carrito.filter((item) => item.id !== payload)
            };
        
        default:
            return state;
    }
}
