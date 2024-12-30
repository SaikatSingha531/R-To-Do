import React from 'react'
import "./ToDo.css"
import { MdDeleteSweep } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

const ToDo = () => {
  return (
    <>
    <div className="mainContainer">
        <div className="container">
        <h1>Add Your To-Do</h1>
        <div className="addBox">
            <input type="text" />
            <button id='add'>Add</button>
        </div>

        <div className="todo">
            <button className='done'><IoMdDoneAll /></button>
            <div className='list'>Firat to do</div>
            <button className='delete'><MdDeleteSweep /></button>
            
        </div>
        </div>
    </div>
    </>
  )
}

export default ToDo