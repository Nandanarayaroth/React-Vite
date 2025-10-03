import { useState } from "react"


function MultipleForms() {

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [gender, setGender] = useState("")
    const [category, setCategory] = useState("")
    
 
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!formData.username.trim() || !formData.email || !formData.password || !gender || !category){
            alert("Please fill all the fields")
        }
        else if(formData.username && formData.email && formData.password && gender && category)
        alert(`Form Submitted Sucessfully`)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    return(
        <div className="ml-4">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={formData.username} type="text" name="username" placeholder="Username" className="border border-gray-400 mt-6"/><br></br>

                <input onChange={handleChange} value={formData.email} type="email" name="email" placeholder="Email" className="border border-gray-400 mt-4" /><br></br>

                <input onChange={handleChange} value={formData.password} type="password" name="password" placeholder="Password" className="border border-gray-400 mt-4"/><br></br>

                <label>Gender: </label><br></br>
                <label>Male</label>
                <input type="radio" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
                <label>Female</label>
                <input type="radio" name="gender" value="female" checked={gender==="female"} onChange={(e) => setGender(e.target.value)}/><br></br>

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                     <option value="">Select Category</option>
                     <option value="red">Child</option>
                     <option value="green">junior citizen</option>
                     <option value="blue">Senior citizen</option>
                </select>
                <br></br>

                <button type="submit" className="border border-red-400 bg-red-400 mt-4">Submit</button>
            </form>
        </div>
    )
}

export default MultipleForms