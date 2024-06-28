import { createContext, useReducer, useState } from 'react'

export const CartContext = createContext()

const initialState = {
    cartItem: 0,
    addToCart: false, 
    cart: [],
    product: [],
    status: 'loading'
  }
  
function reducer (state, action) {
    switch (action.type) {
      case 'cart': 
      return {
        ...state, cart: [...state.product, action.payload]
      }
      case 'toCart' : 
      return{
        ...state, addToCart: state.addToCart = true 
      }

      case 'product' : 
      return {
       ...state, product: [...state.product, action.payload], cartItem: state.cartItem++
      }
      case 'closeCart':
        return {
          ...state, closeCart: state.addToCart = false
        }

        case 'dataReceived':
        return {
          ...state, status: 'ready', product: action.payload
        }
        case 'dataFailed':
        return {
          ...state, status: 'error'
        }
      default: throw new Error('Action Unknow')
    }

  }
  
  
export const CartContextProvider = ({children}) => {
const [cartProduct, setCartProduct] = useState([])
const [{cartItem, addToCart, status, product, cart}, dispatch] = useReducer(reducer, initialState)
 
const cartValue = {dispatch, cartItem, addToCart, status, product, cart, cartProduct, setCartProduct} 
return (
    <CartContext.Provider value={cartValue}>
        {children}
    </CartContext.Provider>
)

} 