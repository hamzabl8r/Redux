import { configureStore } from '@reduxjs/toolkit'
import ToDoReducer from '../Action/ToDoSlice' 

export const store = configureStore({
  reducer: {
    ToDo: ToDoReducer 
  },
})