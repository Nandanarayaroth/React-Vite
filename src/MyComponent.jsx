// import React, {useState} from "react"

import { useEffect, useRef, useState } from "react"

// function MyComponent() {

//     const [name, setName] = useState("Guest")
//     const [age, setAge] = useState(0)
//     const [isEmployed, setIsEmployed] = useState(false)

//     const updateName = () => {
//         setName("Spongebob")
//     }

//     const incrementAge = () => {
//         setAge(age + 1)
//     }

//     const toggleEmployed = () => {
//         setIsEmployed(!isEmployed)
//     }

//     return(
//         <div>
//             <p>Name: {name}</p>
//             <button onClick={updateName}>Set Name</button>

//             <p>Age: {age}</p>
//             <button onClick={incrementAge}>Increment Age</button>

//             <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
//             <button onClick={toggleEmployed}>Toggle</button>
//         </div>
//     )
// }

// export default MyComponent

// import React, {useState} from "react";

// function MyComponent() {
//     const [name, setName] = useState("")
//     const [quantity, setQuantity] = useState(1)
//     const [comment, setComment] = useState("")
//     const [payment, setPayment] = useState("")
//     const [shipping, setShipping] = useState("")

//     function handleNameChange(event) {
//         setName(event.target.value)
//     }

//     function handleQuantity(event) {
//         setQuantity(event.target.value)
//     }

//     function handleComment(event) {
//         setComment(event.target.value)
//     }

//     function handleChangePayment(event) {
//         setPayment(event.target.value)
//     }

//     function handleShippingChange(event){
//         setShipping(event.target.value)
//     }

//     return(
//         <div>
//             <input value={name} onChange={handleNameChange}></input>
//             <p>Name: {name}</p>

//             <input type="number" value={quantity} onChange={handleQuantity}/>
//             <p>Quantity: {quantity}</p>

//             <textarea value={comment} onChange={handleComment}></textarea>
//             <p>Comments:{comment}</p>

//             <select value={payment} onChange={handleChangePayment}>
//                 <option value= "">Select an Option</option>
//                 <option value="Visa">Visa</option>
//                 <option value="Mastercard">Mastercard</option>
//                 <option value="Giftcard">Giftcard</option>
//             </select>
//             <p>Payment: {payment}</p>

//             <label>
//                 <input type="radio" value="Pick Up"
//                     checked={shipping === "Pick Up"}
//                     onChange={handleShippingChange}
//                 />
//                 Pick Up
//             </label><br></br>

//             <label>
//                 <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
//                 Delivery
//             </label>
//             <p>Shipping: {shipping}</p>
//         </div>
//     )
// }

// export default MyComponent


// import React, { useEffect, useState } from "react";

// function MyComponent(){

//     const [count, setCount] = useState(0)
//     const [color, setColor] = useState("green")

//     useEffect(() => {
//         document.title = `Count: ${count} ${color}`
//     }, [count,color])

//     function addCount(){
//         setCount( count => count + 1)
//     }

//     function subscractCount() {
//         setCount(count => count - 1)
//     }

//     function changeColor() {
//         setColor(c => c === "green" ? "red" : "green")
//     }

//     return(
//         <>
//             <p style={{color: color}}>Count: {count}</p>
//             <button onClick={addCount}>Add</button>
//             <button onClick={subscractCount}>Substract</button>
//             <button onClick={changeColor}>ChangeColor</button>
//         </>
//     )
// }

// export default MyComponent

// import React, {useState, useEffect} from "react";

// function MyComponent() {

//     const [width, setWidth] = useState(window.innerWidth)
//     const [height, setHeight] = useState(window.innerHeight)

//    useEffect( () => {
//         window.addEventListener("resize", handleResize)
//         console.log("Event Listener added")

//         return () => {
//             window.removeEventListener("resize", handleResize)
//             console.log("Event Listener Removed")
//         }
//     }, [])

//     function handleResize(){
//         setWidth(window.innerWidth)
//         setHeight(window.innerHeight)
//     }

//     return(
//         <>
//             <p>Window Width: {width}px</p>
//             <p>Window Height: {height}px</p>
//         </>
//     )

// }

// export default MyComponent


// import React, { useState } from "react";

// function MyComponent() {

//     const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

//     function handleAddFood(){
//         const newFood = document.getElementById("foodInput").value
//         document.getElementById("foodInput").value = ""

//         setFoods(foods => [...foods, newFood])
//     }

//     function handleremoveFood(index){
//         setFoods(foods.filter((_, i) => i !== index))
//     }
//     return(
//         <div>
//             <h2>List of Food</h2>
//             <ul>
//                 {foods.map((food, index) => <li key={index} onClick={() => handleremoveFood(index)}>{food}</li>)}
//             </ul>
//             <input type="text" id="foodInput" placeholder="Enter food Name"></input>
//             <button onClick={handleAddFood}>Add Fodd</button>
//         </div>
//     )
// }

// export default MyComponent

// import React, { useState } from "react";

// function MyComponent() {

//     const [cars, setCars] = useState([])
//     const [carYear, setCarYear] = useState(new Date().getFullYear())
//     const [carMake, setCarMake] = useState("")
//     const [carModel, setCarModel] = useState("")

//     function handleAddCar(index){

//         const newCar = {year: carYear,
//                         make: carMake,
//                         model: carModel}

//         setCars(cars => [...cars, newCar])

//         setCarYear(new Date().getFullYear())
//         setCarMake("")
//         setCarModel("")
//     }

//     function handleRemoveCar(index) {
//         setCars(cars => cars.filter((_, i) => i !== index))
//     }

//     function handleYearChange(event) {
//         setCarYear(event.target.value)
//     }

//     function handleMakeChange(event) {
//         setCarMake(event.target.value)
//     }

//     function handleModelChange(event) {
//         setCarModel(event.target.value)
//     }



//     return(
//         <div>
//             <h2>List of Car Objects</h2>
//             <ul>
//                 {cars.map((car, index) => 
//                     <li key={index} onClick={() => handleRemoveCar(index)}>
//                         {cars.year} {car.make} {car.model}
//                     </li>
//                 )}

//             </ul>
//             <input type="number" value={carYear} onChange={handleYearChange}></input>
//             <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"></input>
//             <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model"></input>
//             <button onClick={handleAddCar}>Add Car</button>
//         </div>
//     )
// }

// export default MyComponent

// with useState

function MyComponent(){

    // let [number, setNumber] = useState(0)
    // const ref = useRef(0)
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log("COMPONENT RENDERED")
        // console.log(inputRef)
    })

    function handleClick1() {
        // setNumber(n => n + 1 )
        // ref.current = ref.current + 1
        // console.log(ref.current)

        inputRef1.current.focus()
        inputRef1.current.style.background = "yellow"
    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef2.current.style.background = "yellow"
    }

    function handleClick3(){
        inputRef3.current.focus()
        inputRef3.current.style.background = "yellow"
    }

    return(
        <>
            <button onClick={handleClick1}>Click me!</button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>Click me 2!</button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>Click me 3!</button>
            <input ref={inputRef3}/>
        </>
    )
}

export default MyComponent