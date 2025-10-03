import { useEffect, useState } from "react"


function Fetch () {

    const [users, setUsers] = useState([])
    

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error))

        
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Tick")
        }, 1000)

        return () => {
            clearInterval(timer)
            console.log("Component unmounted")
        }
    }, [])

    return(
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    )
}

export default Fetch