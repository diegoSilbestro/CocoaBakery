import { TYPES } from './Actions/shoppingActions'

export const shoppingInitialState = {
  productos: [
    { id: 1, nombre: "Mousse de Yogurt", precio: 400 },
    { id: 2, nombre: "Mousse de Chocolate", precio: 500 },
    { id: 3, nombre: "carrot Cake", precio: 550 },
    { id: 4, nombre: "Devil Cake", precio: 600 }
  ],
  cart: []
}


export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.productos.find(productos => productos.id === action.payload)

      let itemInCart = state.cart.find(item => item.id === newItem.id)

      return itemInCart
        ? {
          ...state,
          cart: state.cart.map(item =>
            item.id === newItem.id
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          ),
        }
        : {
          ...state,
          cart: [...state.cart, { ...newItem, cantidad: 1 }]
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
          )
        }
        : {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
        }
    }

    case TYPES.REMOVE_ALL_PRODUCTS: {

      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }
    }

    case TYPES.CLEAN_CART: {
      return shoppingInitialState;
    }

    default:
      return state;
  }
}