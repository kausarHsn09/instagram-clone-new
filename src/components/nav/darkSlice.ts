import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open:false
}

const modalSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers:{
        darkmode(state,action){
            state.open = action.payload
        }
    },
  })

export const {darkmode}= modalSlice.actions
export default modalSlice.reducer