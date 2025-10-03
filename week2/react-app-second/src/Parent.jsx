import { useState } from "react";
import Child from "./Child";


function Parent() {
    // const [message, setMessage] = useState("")

    // const handleMessage = (newMessage) => {
    //     setMessage(newMessage)
    // }

    // return(
    //     <div>
    //         <h2>Parent Component</h2>
    //         <p>Message from Child : {message}</p>

    //         <Child sendMessage = {handleMessage}/>
    //     </div>
    // )

    const handleChildClick = () => {
        alert("Hello from Parent")
    }

    return(
        <div>
            <h3>Parent Component</h3>
            <Child onChildClick = {handleChildClick}/>
        </div>
    )
}

export default Parent