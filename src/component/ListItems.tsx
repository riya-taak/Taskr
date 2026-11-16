import React from 'react'
import { TodolistType } from '../App'


interface ListItemsProps {
    todoList: TodolistType[];
    editItem: (id: number, oldText: string)=> void;
    removeItem: (id: number)=> void; 
}

function ListItems({todoList,editItem,removeItem}: ListItemsProps ) {
  return (
    <ol id="oderList">
          {todoList.map((item:TodolistType, i:number) => (
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
  )
}

export default ListItems