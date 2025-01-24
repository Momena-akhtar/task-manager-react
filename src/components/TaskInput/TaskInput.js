import React, { useState } from 'react';
import './TaskInput.css';

const TaskInput = ({ onAddTask, darkMode }) => {
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Medium');

  const handleAddTask = () => {
    // Validate input
    if (taskDescription.trim() === '') {
      alert('Please enter a task description.');
      return;
    }

    // Pass the task object to the parent component
    const newTask = {
      id: Date.now(), // Unique ID for the task
      description: taskDescription,
      priority: taskPriority,
    };
    onAddTask(newTask);

    // Clear input fields
    setTaskDescription('');
    setTaskPriority('Medium');
  };

  return (
    <div className="task-input-container"
    style={{
      backgroundColor: darkMode ? '#1e1e1e' : 'transparent',
      color: darkMode ? '#e0e0e0' : '#000',
      borderColor: darkMode ? '#333' : '#ccc',
    }}>
      <input
        type="text"
        className="task-input-field"
        placeholder="Enter a task..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        style={{
          backgroundColor: darkMode ? '#2e2e2e' : '#fff',
          color: darkMode ? '#e0e0e0' : '#000',
          borderColor: darkMode ? '#444' : '#ccc',
        }}
      />

      <select
        className="task-priority-select m-2"
        value={taskPriority}
        onChange={(e) => setTaskPriority(e.target.value)}
        style={{
          backgroundColor: darkMode ? '#2e2e2e' : '#fff',
          color: darkMode ? '#e0e0e0' : '#000',
          borderColor: darkMode ? '#444' : '#ccc',
        }}
      >
        <option value="High">High</option>
        <option value="Medium">Medium </option>
        <option value="Low">Low</option>
      </select>

      <button className="add-task-button m-3"
       onClick={handleAddTask}
       style={{
        backgroundColor: darkMode ? '#123357' : '#123357f5',
        boxShadow: darkMode ? '0 0 10px rgba(255, 255, 255, 0.2)' : '0 0 10px rgba(0, 0, 0, 0.575)',
      }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;
