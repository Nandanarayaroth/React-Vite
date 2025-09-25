
import React, {useState} from "react";

function Obj() {

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    })

    function handleYear(event){
        setCar( car => ({
            ...car,year: event.target.value
        }))
    }
    function handleMakeChange(event){
        setCar( car => ({
            ...car, make: event.target.value
        }))

    }
    function handleModelChange(event){
        setCar( car => ({
            ...car, model: event.target.value
        }))
    }

    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYear}/><br></br>
            <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>
        </div>
    )
}

export default Obj