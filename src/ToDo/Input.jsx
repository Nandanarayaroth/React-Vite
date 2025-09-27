import React, { useState } from "react";

function Input({onAdd}) {
    const [newTask, setNewTask] = useState("")

    const handleInput = (e) => {
        setNewTask(e.target.value)
    }
    
    const addnewTask = () => {
        if(newTask.trim() == "") 
            return alert("enter a valid input")
        // // setTask([...task,newTask])
        // setTask([...task, {id: task.length, title: newTask, completed: false}])
        // setNewTask("")

        const taskObj = {id: Date.now(), title: newTask, completed: false}
        onAdd(taskObj)

        setNewTask("")
    }

    return(
        <div>
            <input  value={newTask} onChange={handleInput} placeholder="Enter task..."/>
            <button onClick={addnewTask}>Add</button>
        </div>
    )
}

export default Input