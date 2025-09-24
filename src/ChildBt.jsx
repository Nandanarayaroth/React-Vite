
function ChildBt() {

    const handler = (e) => {
        e.target.textContent = "You clicked me.."
        console.log("Stop clicking me")
    }

    return(
        <div>
            <button onClick={ (e) => handler(e)}>Click Me</button>
        </div>
    )
}

export default ChildBt