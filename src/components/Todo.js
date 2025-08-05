import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, removeTodo, updateTodo } from '../features/todos/todosSlice';

function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(todo.text);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (!newValue) return;
    dispatch(updateTodo({ id: todo.id, newText: newValue }));
    setIsEditing(false);
  };

  return (
    <div
      className={todo.isCompleted ? "todo":"uncompleted-todo"}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {isEditing ? (
        <div className="todo-editing">
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button onClick={handleUpdate} className="save-btn">Save</button>
          <button onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
        </div>
      ) : (
        <>
          <span>{todo.text}</span>
          <div className="todo-actions">
            <button onClick={() => dispatch(completeTodo(todo.id))} className="done-btn">
              {todo.isCompleted ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => setIsEditing(true)} className="edit-btn">Edit</button>
            <button onClick={() => dispatch(removeTodo(todo.id))} className="delete-btn">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Todo;