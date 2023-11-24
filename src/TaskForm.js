import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");
  const [timing, setTiming] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTimingChange = (e) => {
    setTiming(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "" || timing.trim() === "") {
      alert("Please provide both task name and timing.");
      return;
    }

    onAddTask({ task, timing });
    setTask("");
    setTiming("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input type='text' value={task} onChange={handleTaskChange} />
      </label>

      <label>
        Timing:
        <input type='text' value={timing} onChange={handleTimingChange} />
      </label>

      <button type='submit'>Add Task</button>
    </form>
  );
};

export default TaskForm;
