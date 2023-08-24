import { createSlice } from '@reduxjs/toolkit'

const initialUIState = { notification: null, cartIsShown: false }

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    },
    toggleIsShown(state) {
      state.cartIsShown = !state.cartIsShown
    },
  },
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer
