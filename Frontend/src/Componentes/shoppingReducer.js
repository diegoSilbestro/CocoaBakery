import { TYPES } from './Actions/shoppingActions'
import axios from 'axios';

export const shoppingInitialState = {

  productos: [],
  cart: [],
}

let options = {},
  cartUpdate = {};
let method;
let endpoint;

export function shoppingReducer(state, action) {
  switch (action.type) {

    case TYPES.READ_STATE: {
      return {
        ...state,
        productos: action.payload[0],
        cart: action.payload[1]
      }
    }

    case TYPES.ADD_TO_CART: {
      let newItem = state.productos.find(productos => productos._id === action.payload)

      let itemInCart = state.cart.find(item => item._id === newItem._id)

      if (itemInCart){
        method= 'PUT';
        endpoint= `http://localhost:8080/cart/editarItem/${itemInCart._id}`;
        cartUpdate= { ...itemInCart, cantidad: itemInCart.cantidad + 1 }
                   
      }
      else {
        method= 'POST';
        endpoint= 'http://localhost:8080/cart/crearItem';
        cartUpdate= { ...newItem, cantidad: 1 }
      }

      options={
        method: method,
        headers: { "content-type": "application/json" },
        data: JSON.stringify(cartUpdate)
      }
      
      const updateCart = async () => {await axios (endpoint, options)}

      updateCart ();

      return itemInCart
        
        ? {
          ...state,
          cart: state.cart.map(item =>
            item.id === newItem.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : { ...item }
          ),
          cartUpdate: { ...itemInCart, cantidad: itemInCart.cantidad + 1 }

        }
        : {
          ...state,
          cart: [...state.cart, { ...newItem, cantidad: 1 }],
          cartUpdate: { ...newItem, cantidad: 1 }
        }

    }


    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find(item => item._id === action.payload)

      if (itemToDelete.cantidad > 1) {
          method = "PUT";
          endpoint = `http://localhost:8080/cart/editarItem/${itemToDelete._id}`;
          cartUpdate = { ...itemToDelete, cantidad: itemToDelete.cantidad - 1 };
      } else {
          method = "DELETE";
          endpoint = `http://localhost:8080/cart/eliminarItem/${itemToDelete._id}`;
      } 
      
      options = {
        method: method,
        headers: { "content-type": "application/json" },
        data: JSON.stringify(cartUpdate)
      };

      const updateCart = async () => {await axios (endpoint, options)}

      updateCart ();



      return itemToDelete.cantidad > 1
        ? {
          ...state,
          cart: state.cart.map(item =>
            item._id === action.payload
              ? { ...item, cantidad: item.cantidad - 1 }
              : item
          ),
          cartUpdate: { ...itemToDelete, cantidad: itemToDelete.cantidad - 1 }
        }
        : {
          ...state,
          cart: state.cart.filter(item => item._id !== action.payload)
        }

    }

    case TYPES.REMOVE_ALL_PRODUCTS: {


      options = {
        method: 'DELETE',
        headers: { "content-type": "application/json" }
      };

      endpoint= `http://localhost:8080/cart/eliminarItem/${action.payload}`

      const updateCart = async () => {await axios (endpoint, options)}

      updateCart ();

      return {
        ...state,
        cart: state.cart.filter(item => item._id !== action.payload),
        method: "DELETE"
      }
    }

    case TYPES.CLEAN_CART: {
      state.cart.map(item => {
        endpoint = `http://localhost:8080/cart/eliminarItem/${item._id}`;
        options = {
          method: "DELETE",
          headers: { "content-type": "application/json" }
          }
        const cleanCart = async () => {await axios (endpoint, options)}
        cleanCart ();
        return null;
      })

      

      return {
        ...state,
        cart: [],

      }

    }

    default:
      return state;
  }

}