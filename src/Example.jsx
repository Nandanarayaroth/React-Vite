

function Example (props) {
    return(
        <>
        <h3>Hello {props.name}</h3>
        <p>Your age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </>
    )
    
}

export default Example