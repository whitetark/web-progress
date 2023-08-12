import React, { useState, useEffect } from 'react'

const CartContext = React.createContext({
  cart: [
    {
      name: '',
      amount: 0,
    },
  ],
  onAdd: () => {},
  onRemove: () => {},
  getAmount: () => {},
})

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    const localCart = localStorage.getItem('cart')
    if (localCart.length > 0) {
      setCart(localCart)
    }
  }, [])

  const addHandler = (product) => {
    if (cart.some((item) => item.name === product.name)) {
    } else {
      setCart((prevState) => [product, ...prevState])
    }
  }
  const removeHandler = (product) => {}
  const getAmount = () => {
    let result = 0
    cart.forEach((product) => {
      result += product.amount
    })
    return result
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        onAdd: addHandler,
        onRemove: removeHandler,
        getAmount: getAmount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}
