'use client'

import { useState, useEffect } from "react";



export default function Home() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  function handleAddTodoList() {
    if (todo) {
      setTodoList([...todoList, todo])
      setTodo('');
    }

  }

  useEffect(() => {
    console.log(todoList)
  }, [todoList])


  return (
    <div>
      <div className=" flex justify-center mt-5 gap-4">
        <input onChange={(e) => { setTodo(e.target.value) }} placeholder="Enter task" className=" w-1/2 p-2 border-b-2 focus:outline-none focus:border-sky-300" value={todo}></input>
        <button className=" bg-sky-300 p-2 shadow-xl" onClick={handleAddTodoList}>Add Task</button>
      </div>

      <div className=" flex justify-center items-center">
        <ul className=" w-full flex flex-col items-center">
          {todoList.map((item, index) => (
            <li className=" w-1/2 m-2 bg-sky-300 p-3 rounded-full flex justify-between" key={index}>
              <span>
                {item}
              </span>
              <div className=" flex justify-between w-1/12">
                <button className=" text-red-500 hover:text-red-700 focus:outline-none">X</button>
                <button className=" text-sky-800 hover:text-sky-950 focus:outline-none">✓</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
