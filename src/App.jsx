import { useState } from "react";
import "./style.css";

export default function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    if (input.trim() === "") {
      alert("Empty space not allowed");
      return;
    }
    setTodoList([...todoList, { id: Date.now(), text: input }]);
    setInput("");
  };

  const editItem = (id, oldText) => {
    const value = prompt("edit this", oldText);
    if (value === null || value.trim() === "") return;

    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, text: value } : item))
    );
  };

  const removeItem = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <>

      <div id="contanior">
      <h1 className="title">Taskr</h1>
        <div id="space">
          <input
            type="text"
            placeholder="Enter your task here"
            id="inp"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem()}
          />
          <button id="Addbtn" className="allBtns addColor" onClick={addItem}>
            ADD
          </button>
        </div>

        <ol id="oderList">
          {todoList.map((item, i) => (
            <li className="list" key={item.id}>
              <span>
                {i + 1}. {item.text}
              </span>
              <div className="btns">
                <button
                  className="allBtns editColor"
                  onClick={() => editItem(item.id, item.text)}
                >
                  Edit
                </button>
                <button
                  className="allBtns dltColor"
                  onClick={() => removeItem(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}