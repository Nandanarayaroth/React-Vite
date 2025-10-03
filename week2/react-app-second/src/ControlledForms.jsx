import { useState } from "react";


function ControlledForms() {

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Submitted with name: ${name}`)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label/>Enter your name:
                <input className="border border-gray-400" type="text" value={name} onChange={(e) => setName(e.target.validationMessage)}>
                
                </input>

                <button className="bg-red-200 rounded-lg p-2" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ControlledForms