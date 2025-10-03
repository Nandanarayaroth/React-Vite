

function Child({text, setText}) {
    // return(
    //     <div>
    //         <h3>Child Component</h3>
    //         <button onClick={() => alert("Hello from Child")}>
    //             Send Message to Parent
    //         </button>
    //     </div>
    // )

    // return(
    //     <button onClick={onChildClick}>
    //         Click me 
    //     </button>
    // )

    return(
        <div>
            <h3>Child A</h3>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <p>Value in A: {text}</p>
        </div>
    )
}

export default Child