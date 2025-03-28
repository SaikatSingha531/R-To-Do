// import React, { useState } from "react";
// import "./ToDo.css";
// import { MdDeleteSweep } from "react-icons/md";
// import { IoMdDoneAll } from "react-icons/io";

// const ToDo = () => {
//   const [inputVal, setinputVal] = useState(""); // this is for taking the input value

//   const [todoVal, settodoVal] = useState([]); //this is for adding the value in the list
 


//   const textVal = (i) => {      //for show the written value in input     
//     setinputVal(i.target.value);
//   };



//   const deleteTask = (index) => {
//     settodoVal(todoVal.filter((_, idx) => idx !== index));
//   };





//   const formSubmit = (i) => {
//     i.preventDefault(); //1st  for stop form defoult behavior

//     if (!inputVal) {       //2nd if input is empty
//         // alert("Add Some Task"); 
//       return;
//     }

//     settodoVal((value) => [...value, inputVal]); // show the todo in list

//     if (todoVal.includes(inputVal)) {
//       // this is show task already added
//       alert("Task Is Already Added ");
//       setinputVal("");
//       return;
//     }

//     setinputVal("");
//   };


//   return (
//     <>
//       <form onSubmit={formSubmit}>
//         <div className="mainContainer">
//           <div className="container">
//             <h1>Add Your To-Do</h1>
//             <div className="addBox">
//               <input
//                 type="text"
//                 value={inputVal}
//                 onChange={textVal}
//                 placeholder="Enter Your Task.."
//               />
//               <button id="add">Add</button>
//             </div>


//             <div className="todo">
//               {todoVal.map((i, idx) => {
//                 return (
//                   <div className="todos" key={idx}>
                    
//                     <div className="list" >
//                       {i}
//                     </div>
//                     <button className="delete" onClick={() => deleteTask(idx)}>
//                       <MdDeleteSweep />
//                     </button>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// export default ToDo;




import React, { useState, useEffect } from "react";
import "./ToDo.css";
import { MdDeleteSweep } from "react-icons/md";

const ToDo = () => {
  const [inputVal, setInputVal] = useState(""); // this is for taking the input value

  // Initialize state with saved todos from localStorage, if any
  const [todoVal, setTodoVal] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Save the todo list to localStorage whenever todoVal changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoVal));
  }, [todoVal]);

  const textVal = (e) => {
    setInputVal(e.target.value); // Update the input value
  };

  const deleteTask = (index) => {
    // Remove task from the todo list
    setTodoVal(todoVal.filter((_, idx) => idx !== index));
  };

  const formSubmit = (e) => {
    e.preventDefault(); // Prevent form default behavior

    if (!inputVal) {
      return; // Do nothing if input is empty
    }

    // Check if the task is already in the list
    if (todoVal.includes(inputVal)) {
      alert("Task Is Already Added");
      setInputVal(""); // Clear input
      return;
    }

    // Add new task to the todo list
    setTodoVal((prev) => [...prev, inputVal]);

    setInputVal(""); // Clear input after adding
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <div className="mainContainer">
          <div className="container">
            <h1>Add Your To-Do</h1>
            <div className="addBox">
              <input
                type="text"
                value={inputVal}
                onChange={textVal}
                placeholder="Enter Your Task.."
              />
              <button id="add">Add</button>
            </div>

            <div className="todo">
              {todoVal.map((task, idx) => {
                return (
                  <div className="todos" key={idx}>
                    <div className="list">{task}</div>
                    <button className="delete" onClick={() => deleteTask(idx)}>
                      <MdDeleteSweep />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ToDo;
