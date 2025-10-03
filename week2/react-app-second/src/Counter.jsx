import { useEffect, useState } from "react"


function Counter() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
            console.log("Component mounted")
        }, 1000)

        return () => {
            clearInterval(timer)
            console.log("Component unmounted")
        }

    }, [])

    return(
        <div>
            <h2>Count: {count}</h2>
        </div>
    )

}

export default Counter