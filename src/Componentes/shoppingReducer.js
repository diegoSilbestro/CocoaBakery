import { TYPES } from './Actions/shoppingActions'


export const shoppingInitialState = {

  productos: [],
  cart: [],
  method: "",
  endpoint: "",
  cartUpdate: {}
}

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
      let newItem = state.productos.find(productos => productos.id === action.payload)

      let itemInCart = state.cart.find(item => item.id === newItem.id)

      return itemInCart

        ? {
          ...state,
          method: "PUT",
          endpoint: `http://localhost:5000/cart/${itemInCart.id}`,
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
          method: "POST",
          endpoint: "http://localhost:5000/cart",
          cartUpdate: { ...newItem, cantidad: 1 }
        }

    }


    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find(item => item.id === action.payload)

      return itemToDelete.cantidad > 1
        ? {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload
              ? { ...item, cantidad: item.cantidad - 1 }
              : item
          ),
          method: "PUT",
          endpoint: `http://localhost:5000/cart/${itemToDelete.id}`,
          cartUpdate: { ...itemToDelete, cantidad: itemToDelete.cantidad - 1 }
        }
        : {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload),
          method: "DELETE",
          endpoint: `http://localhost:5000/cart/${itemToDelete.id}`
        }
    }

    case TYPES.REMOVE_ALL_PRODUCTS: {

      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
        method: "DELETE",
        endpoint: `http://localhost:5000/cart/${action.payload}`
      }
    }

    case TYPES.CLEAN_CART: {
      return {
        ...state,
        cart: [],
        
      }

    }

    default:
      return state;
  }

}