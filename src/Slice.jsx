import { createSlice } from "@reduxjs/toolkit";

export const Slic = createSlice({
    name: "counter",
    initialState: {user:null},
    reducers: {
login:(state,action)=>{
state.user=action.payload
},
logout:(state)=>{
    state.user=null
    }



    }
      
})
export const {login, logout} = Slic.actions
export default Slic.reducer