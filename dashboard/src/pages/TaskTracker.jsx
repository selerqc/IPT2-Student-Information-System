import React, { useState } from "react";
import "./TaskTracker.css";
import Sidebar from "./Sidebar";
function TaskTracker() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };
  const removeAll = () => {
    setTasks([]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="task-tracker">
      <h1>Task Tracker</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <div className="btn">
          <button onClick={addTask}>Add Task</button>
          <button onClick={removeAll}>Remove All</button>
        </div>
      </div>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} className={t.completed ? "completed" : ""}>
            <span>{t.text}</span>
            <div className="buttons">
              <button onClick={() => toggleComplete(index)}>Toggle</button>
              <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <Sidebar />
    </div>
  );
}

export default TaskTracker;
