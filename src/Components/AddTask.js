import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './Redux/Action/ToDoSlice'; 
import './AddTask.css';

function AddTask() {
  const [newTask, setNewTask] = useState({  
    id: Math.floor(Math.random() * 1000000), 
    description: "",
    isDone: false,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTask(prevTask => ({
      ...prevTask, 
      description: e.target.value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (newTask.description.trim() === "") {
      alert("Task description cannot be empty!");
      return;
    }

    const taskToAdd = {
      id: Math.floor(Math.random() * 1000000), 
      description: newTask.description.trim(),
      isDone: false,
    };
    
    dispatch(addTodo(taskToAdd));

    setNewTask({
      id: Math.floor(Math.random() * 1000000), 
      description: "",
      isDone: false,
    });
  };

  return (
    <div className='todoContainer'>
      <form className='form' onSubmit={handleSubmit}> {/* Attach onSubmit to the form */}
        <label htmlFor="taskDescription">
          Description:
        </label>
        <input
          type='text'
          id="taskDescription" // Associate label with input using id
          value={newTask.description} // Control the input with state
          onChange={handleChange}
          placeholder="e.g., Buy groceries"
        />
        <button type="submit">Add Task</button> {/* Specify type="submit" */}
      </form>
    </div>
  );
}

export default AddTask;