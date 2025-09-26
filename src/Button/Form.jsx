import { useState } from "react"

export default function Form() {

    const [name, setName] = useState({firstName:"", lastName:""})

    function handleChange(e) {
        setName({...name,firstName:e.target.value})
    }
    return(
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={(e) => handleChange(e)}/>
                <input type="text" onChange={(e) => setName({...name,lastName: e.target.value})} value={name.lastName}/>
                <button onClick={(e) => handleSubmit(e)}>Add</button>
            </form>
        </div>
    )
}