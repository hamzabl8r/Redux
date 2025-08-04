import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './features/todos/todosSlice';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const todos = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.isCompleted);
      case 'active':
        return todos.filter(todo => !todo.isCompleted);
      default: 
        return todos;
    }
  };

  return (
    <div className="app-container">
      <h1> Todo App </h1>
      <TodoForm />
      
      <div className="filter-buttons">
        <button onClick={() => dispatch(setFilter('all'))} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => dispatch(setFilter('active'))} className={filter === 'active' ? 'active' : ''}>Active</button>
        <button onClick={() => dispatch(setFilter('completed'))} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      </div>

      <TodoList todos={getFilteredTodos()} />
    </div>
  );
}

export default App;