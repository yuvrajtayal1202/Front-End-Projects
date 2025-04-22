import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
    console.log(todos);
  };

  function handleDelete(indexToDelete) {
    const newTodos = todos.filter((item, index) => index !== indexToDelete);
    setTodos(newTodos);
  }

  function toggleComplete(indexToToggle) {
    const newTodos = todos.map((item, index) => {
      if (index === indexToToggle) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(newTodos);
  }
  function clearCompleted() {
    const newTodos = todos.filter((item) => !item.completed);
    setTodos(newTodos);
  }
  
  return (
    <div className="container">
      <h1>📃 To Do App</h1>
      <div className="con">
        <input
          type="text"
          value={task}
          placeholder="Enter your Task"
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
        />
        <button onClick={handleAdd}>Add Task</button>
      </div>

      <ul>
      {/* <button onClick={clearCompleted}>Clear Completed</button> */}

        {todos.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleComplete(index)}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              color: item.completed ? "grey" : "black",
              cursor: "pointer",
            }}
          >
            {item.text}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent triggering toggleComplete
                handleDelete(index);
              }}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
