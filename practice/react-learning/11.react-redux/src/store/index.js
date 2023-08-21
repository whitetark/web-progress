import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {counter: 0, showCounter: true}
const initialAuthState = {isAuth: false} 

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state){
            state.isAuth = true;
        },
        logout(state){
            state.isAuth = false;
        }
    }
})

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter+=action.payload
        },
        decrement(state, action) {
            state.counter-=action.payload
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        },
    }
})

const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store;