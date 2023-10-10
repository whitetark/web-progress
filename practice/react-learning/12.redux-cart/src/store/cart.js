import { createSlice } from '@reduxjs/toolkit'

const initialCartState = { items: [], totalAmount: 0, changed: false }

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalAmount = action.payload.totalAmount
      state.items = action.payload.items
    },
    addItemToCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalAmount++
      state.changed = true
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
      state.changed = true
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id)
      } else {
        existingItem.amount--
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price
      }
    },
    reset(state) {
      state = initialCartState
      state.changed = true
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
