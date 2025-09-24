import React, {useState} from "react"

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className="container">
            <h3>{count}</h3>
            <div className="subtn">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decremetn</button>
            <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter