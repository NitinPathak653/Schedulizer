// Dashboard.js

import React, { useState } from "react";
import TaskForm from "./TaskForm";
import "./Dashboard.css";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className='dashboard-container'>
      <h1>Dashboard</h1>

      {/* Task Form */}
      <TaskForm onAddTask={addTask} />

      <div className='tasks-section'>
        <h2>Upcoming Tasks</h2>
        {/* Display tasks */}
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.task}</strong> - {task.timing}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
