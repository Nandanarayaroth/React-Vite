import { useEffect } from "react";


function TaskItem({onData, limit}) {
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(data => onData(data.slice(0,limit)))
    }, [])
}

export default TaskItem