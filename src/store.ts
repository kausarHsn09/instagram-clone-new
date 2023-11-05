import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './components/modal/modalSlice'
import darkSlice from './components/nav/darkSlice'

export default configureStore({
  reducer: {
    modal: modalSlice,
    darkmode:darkSlice,
  },
})