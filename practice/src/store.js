import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  },
})