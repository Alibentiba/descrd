import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "counter",
    initialState: {movies:[]},
    reducers: {
        addCart: (state, action) => {
            const newCart = [...state.cart, action.payload]
            const ss = state.totale + action.payload.price
            return { ...state, cart: newCart, totale: ss }
        }


     
        


    }
})
export const { addCart} = Slic.actions
export default Slice.reducer