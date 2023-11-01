import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open:false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        toggleModal(state,action){
            state.open = action.payload
        }
    },
  })

export const {toggleModal}= modalSlice.actions
export default modalSlice.reducer