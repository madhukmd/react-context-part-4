import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  clearCart: () => {},
  incrementQuality: () => {},
  decrementQuality: () => {},
})

export default CartContext
