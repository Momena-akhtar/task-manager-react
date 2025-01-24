import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDeleteTask, darkMode }) => {
  return (
    <div className="task-list-container" style={{ backgroundColor: darkMode ? "#121212" : "transparent" }}>
      {tasks.length === 0 ? (
        <p className="no-tasks-message">No tasks available. Add a task to get started!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} 
            className="task-item"
            style={{
              backgroundColor: darkMode ? "#1e1e1e" : "#f9f9f9",
              color: darkMode ? "#e0e0e0" : "#000",
              borderColor: darkMode ? "#333" : "#ddd",
            }}
            >
              <div className="task-details">
                <span className="task-description">{task.description}</span>
                <span className={`task-priority priority-${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
              </div>
              <button
                className="delete-task-button"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
