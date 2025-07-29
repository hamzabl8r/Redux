import { createSlice } from '@reduxjs/toolkit'


const initialToDoState = {
  description: "",
  id: Math.floor(Math.random() * 100) + 1,
  isDone: false,
  todos: [] // Make sure this array exists
}

export const ToDoSlice = createSlice({
  name: 'ToDo',
  initialState: initialToDoState,
  reducers: {
    setDescription: (state, action) => {
      state.description = action.payload
    },
    resetDescription: (state) => {
      state.description = ""
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.isDone = !todo.isDone
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  },
})

export const { setDescription, resetDescription, addTodo, toggleTodo, deleteTodo } = ToDoSlice.actions
export default ToDoSlice.reducer