import { useState } from "react"
import ChildCounter from "./ChildCounter"


function ParentCounter() {

    const[count, setCount] = useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    return(
        <div>
            <h2>Count: {count}</h2>
            <ChildCounter updatingfunction={increment} />
        </div>
    )
}

export default ParentCounter