import { createSlice } from "@reduxjs/toolkit";
export const Slice = createSlice({
    name: "counter",
    initialState: {movies:[]},
    reducers: {
        
        addmovies: (state, action) => {
            state.movies=action.payload
        }


     
        


    }
})
export const { addmovies} = Slice.actions
export default Slice.reducer