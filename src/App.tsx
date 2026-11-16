import { useState } from "react";
import "./style.css";
import AddInput from "./component/AddInput";
import ListItems from "./component/ListItems";

export type TodolistType = {
  id: number,
  text: string
}

export default function App() {
  const [input, setInput] = useState<string>("");
  const [todoList, setTodoList] = useState<TodolistType[]>([]);

  const addItem = () => {
    if (input.trim() === "") {
      alert("Empty space not allowed");
      return;
    }
    setTodoList([...todoList, { id: Date.now(), text: input }]);
    setInput("");
  };

  const editItem = (id: number, oldText: string) => {
    const value = prompt("edit this", oldText);
    if (value === null || value.trim() === "") return;

    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, text: value } : item))
    );
  };

  const removeItem = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <>

      <div id="contanior">
        <h1 className="title">Taskr</h1>

        <AddInput setInput={setInput} addItem={addItem} input={input} />
        <ListItems todoList={todoList} editItem={editItem} removeItem={removeItem} />

      </div>
    </>
  );
}