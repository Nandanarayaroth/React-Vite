import React, { useEffect, useState } from "react";

function Effect() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
    }, [])

    return(
        <div>
            <h3>User List</h3>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Effect