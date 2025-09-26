import { useState } from "react"

export default function Form() {

    const [name, setName] = useState("")

    function handleChange(e) {
        setName(e.target.value)
    }
    return(
        <div>
            <form>
                <input type="text" value={name} onChange={(e) => handleChange(e)}/>
            </form>
        </div>
    )
}