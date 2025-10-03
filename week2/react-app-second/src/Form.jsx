import { useState } from "react"


function Form() {

    const [detailes, setDetails] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [display, setDisplay] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        if(!detailes.username.trim() || !detailes.email || !detailes.password){
            alert("Please fill all the fields")
            setDisplay(false)
        }
        else{
            alert(`From Sumitted Sucessfully`)
            setDisplay(true)
        }
        
        
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setDetails((prev) => ({
            ...prev, 
            [name] : value
        }))
    }

    return(
        <div className="ml-4 mt-4">
            <form onSubmit={handleSubmit}>
                <label>Enter Your Name: </label>
                <input name="username" className="border border-gray-400" type="text" value={detailes.username} onChange={handleChange}/><br></br>

                <label>Enter your Email</label>
                <input name="email" className="border border-gray-400" type="email" value={detailes.email} onChange={handleChange}/> <br></br>

                <label>Enter your password</label>
                <input name="password" className="border border-gray-400" type="password" value={detailes.password} onChange={handleChange}/><br></br>

                <button className="border border-gray-400" type="submit">Submit</button>
            </form>
            {display && (
                <div>
                <label>Your name is : {detailes.username}</label><br></br>
                <label>Your Email is : {detailes.email}</label><br></br>
                <label>Your password is : {detailes.password}</label><br></br>
            </div>
            )}
            
        </div>
    )

}

export default Form