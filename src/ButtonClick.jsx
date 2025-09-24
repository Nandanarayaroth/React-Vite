
function ButtClick() {

    let count = 0

    const handleClick = () => {
        console.log("Ouch")
    }
    const handler2 = (name) => {
        if(count < 3) {
            count++
            console.log(`${name} you clicked me ${count} times`)
        }else{
            console.log(`${name} stop clicking me`)
        }
    }

    return(
        // <button onClick={handleClick}>Click me</button>
        <button onClick={() => handler2("Bro")}>Click Me</button>
    )
}

export default ButtClick