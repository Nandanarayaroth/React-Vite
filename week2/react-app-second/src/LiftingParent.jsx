import { useState } from "react"
import Child from "./Child"


function LiftingParent() {

    const [text, setText] = useState("")


    return(
        <div>
            <h2>Lifting State up Example</h2>
            <Child text={text} setText={setText}/>
        </div>
    )
}

export default LiftingParent