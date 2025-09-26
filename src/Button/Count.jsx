import { useState } from "react"

export default function Count() {

    const [count, setCount] = useState(0)
    const [increment, setIncrement] = useState(1)

    function handleClick() {
       setCount(
        count + 1
       )
    }
    function decrement() {
        setCount(
            count - 1
        )
    }

    function increse() {
        setIncrement(increment + 1)
    }

    return(
        <div>
            <p>Count value is:{count}</p>
            <button onClick={handleClick}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h4>We are increment by {increment}</h4>
            <button onClick={increse}>Increse Increment</button>
        </div>
    )
}

