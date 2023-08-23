import { createSlice } from '@reduxjs/toolkit'

const initialCartState = { items: [], totalAmount: 0, isShown: false }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalAmount++
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          amount: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        })
      } else {
        existingItem.amount++
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload
      const existingItem = state.items.find((item) => item.id === id)
      state.totalAmount--
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.amount--
      }
    },
    toggleIsShown(state) {
      state.isShown = !state.isShown
    },
    reset(state) {
      state = initialCartState
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
