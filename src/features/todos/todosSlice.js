import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    { id: '1', text: 'Learn React', isCompleted: false },
    { id: '2', text: 'Build a Redux Todo App', isCompleted: false },
    { id: '3', text: 'Deploy the app', isCompleted: true },
  ],
  filter: 'all', 
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload,
        isCompleted: false,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, removeTodo, completeTodo, updateTodo, setFilter } = todosSlice.actions;

export default todosSlice.reducer;