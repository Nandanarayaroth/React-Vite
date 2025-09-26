import React, { useState } from "react";

function Atmpt() {

    const[task, setTask] = useState([])
    const[newTask, setNewTask] = useState("")

    const handleInput = (e) => {
        setNewTask(e.target.value)
    }
    
    const addnewTask = () => {
        if(newTask.trim() == "") 
            return alert("enter a valid input")
        setTask([...task,newTask])
        setNewTask("")
    }

    const handleDelete = (index) => {
        setTask( task.filter((_, i) => index !== i))
    }

    return(
        <div className="overall">
            <h4 className="headtodo">ToDo List</h4>

    
            <input className="inpbx" onChange={handleInput} value={newTask} placeholder="Enter task..." />
            <button onClick={ addnewTask}>Add</button>
            <ul>
                {task.map((tasks, index) => (
                    <li className="licntr" key={index}>
                        <span className="task">{tasks}</span>
                        <button className="dltbtn" onClick={ () => handleDelete(index)}>Delete</button>
                        <label>Completed</label>
                        <input type="checkbox"/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Atmpt