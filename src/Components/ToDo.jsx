import React,{useState} from 'react'
import "./ToDo.css"
import { MdDeleteSweep } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

const ToDo = () => {


  const [inputVal, setinputVal] = useState("");   // this is for taking the input value 

  const textVal = (i)=> {          //for show the written value in input 
    setinputVal(i.target.value)
  }

  const formSubmit= (i)=>{         // for stop form defoult behavior

     if (!inputVal) return;
    i.preventDefault();
  }


  const [todoVal, settodoVal] = useState([]);


    const [IsDone, setIsDone] = useState(false);

    // const doneClick = ()=>{
    //     setIsDone(!IsDone)
    // }

  return (
    <>
    <form onSubmit={formSubmit}>
    <div className="mainContainer">
        <div className="container">
        <h1>Add Your To-Do</h1>
        <div className="addBox">
            <input type="text" value={inputVal} onChange={textVal} placeholder='Enter Your Task..' />
            <button id='add'>Add</button>
        </div>

        <div className="todo">
           <div className="todos">
           <button className='done'><IoMdDoneAll /></button>
            <div className='list' >Firat to do</div>
            <button className='delete'><MdDeleteSweep /></button>
           </div>
           {/* <div className="todos">
           <button className='done' onClick={doneClick}><IoMdDoneAll /></button>
            <div className='list' style={{textDecoration:IsDone ? "line-through" : "none" , color: IsDone ? "gray" : "black", transition: "color 0.3s ease",}}>Second to do</div>
            <button className='delete'><MdDeleteSweep /></button>
           </div> */}
            
        </div>
        </div>
    </div>
    </form>
    </>
  )
}

export default ToDo