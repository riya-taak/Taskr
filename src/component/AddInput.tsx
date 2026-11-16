import React, { Dispatch, SetStateAction } from 'react'

interface inputTypeProps {
  setInput: Dispatch<SetStateAction<string>>;
  addItem: () => void;
  input: string;
}

function AddInput({ setInput, addItem, input }: inputTypeProps) {
  return (
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
  )
}

export default AddInput