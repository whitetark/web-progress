import React, { useReducer } from 'react'

const CartContext = React.createContext({
  items: [],
  onAdd: (item) => {},
  onRemove: (id) => {},
  cartReset: () => {},
  totalPrice: 0,
})

const defaultCartState = {
  items: [],
  totalPrice: 0,
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const newTotalPrice = state.totalPrice + action.item.price * action.item.amount
    let newItems

    const checkIndex = state.items.findIndex((item) => item.id === action.item.id)

    if (checkIndex === -1) {
      newItems = state.items.concat(action.item)
    } else {
      const cartItem = state.items[checkIndex]
      const newItem = {
        ...cartItem,
        amount: cartItem.amount + action.item.amount,
      }
      newItems = [...state.items]
      newItems[checkIndex] = newItem
    }
    return {
      items: newItems,
      totalPrice: newTotalPrice,
    }
  }

  if (action.type === 'REMOVE') {
    const itemIndex = state.items.findIndex((item) => item.id === action.id)
    const item = state.items[itemIndex]
    let newItems = [...state.items]
    if (item.amount > 1) {
      let newItem = {
        ...newItems[itemIndex],
        amount: item.amount - 1,
      }
      newItems[itemIndex] = newItem
    } else {
      newItems.splice(itemIndex, 1)
    }
    const newTotalPrice = state.totalPrice - item.price
    return {
      items: newItems,
      totalPrice: newTotalPrice,
    }
  }

  if (action.type === 'RESET') {
    return defaultCartState
  }

  return defaultCartState
}

export const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const onAddHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item })
  }

  const onRemoveHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }

  const onResetHandler = () => {
    dispatchCartAction({ type: 'RESET' })
  }

  const cartContext = {
    items: cartState.items,
    onAdd: onAddHandler,
    onRemove: onRemoveHandler,
    onReset: onResetHandler,
    totalPrice: cartState.totalPrice,
  }
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartContext
