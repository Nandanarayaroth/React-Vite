import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import Input from "./Input";
import Delete from "./Delete";

function Atmpt() {

    const[task, setTask] = useState([])


    const handleAddTask = (taskObj) => {
        setTask([...task, taskObj])
    }

    // const handleInput = (e) => {
    //     setNewTask(e.target.value)
    // }
    
    // const addnewTask = () => {
    //     if(newTask.trim() == "") 
    //         return alert("enter a valid input")
    //     // setTask([...task,newTask])
    //     setTask([...task, {id: task.length, title: newTask, completed: false}])
    //     setNewTask("")
    // }

    const handleDelete = (index) => {
        setTask( task.filter((_, i) => index !== i))
    }

    const status = (index) => {
        const newTasks = [...task]
        newTasks[index].completed = !newTasks[index].completed
        setTask(newTasks)
    }
   

    return(
        <div className="overall">
            <h4 className="headtodo">ToDo List</h4>

    
            <Input onAdd={handleAddTask}/>

            <TaskItem onData={setTask} limit={20}/>

            <ul>
                {task.map((tasks, index) => (
                    <li className="licntr" key={index}>
                        <span className="task">{tasks.title}</span>
                        {/* <button className="dltbtn" onClick={ () => handleDelete(index)}>Delete</button> */}
                        <Delete onDelete={() => handleDelete(index)}/>
                        <label className="status">Completed</label>
                        <input type="checkbox" checked={tasks.completed} onChange={() => status(index)} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Atmpt