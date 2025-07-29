import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from './Redux/Action/ToDoSlice'; // Fix: corrected import path
import './ListTask.css'; 

function ListTask() {
  const todos = useSelector(state => state.ToDo.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  if (todos.length === 0) {
    return (
      <div className="list-container">
        <h2>Your Tasks</h2>
        <div className="empty-state">
          <p>No tasks yet! Add your first task above.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h2>Your Tasks ({todos.length})</h2>
      <div className="tasks-list">
        {todos.map((todo) => (
          <div key={todo.id} className={`task-item ${todo.isDone ? 'completed' : ''}`}>
            <div className="task-content">
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => handleToggle(todo.id)}
                className="task-checkbox"
              />
              <span className={`task-description ${todo.isDone ? 'strikethrough' : ''}`}>
                {todo.description}
              </span>
            </div>
            <div className="task-actions">
              <button
                onClick={() => handleToggle(todo.id)}
                className={`toggle-btn ${todo.isDone ? 'mark-pending' : 'mark-done'}`}
              >
                {todo.isDone ? 'Mark Pending' : 'Mark Done'}
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="task-summary">
        <p>
          Completed: {todos.filter(todo => todo.isDone).length} | 
          Pending: {todos.filter(todo => !todo.isDone).length}
        </p>
      </div>
    </div>
  );
}

export default ListTask;