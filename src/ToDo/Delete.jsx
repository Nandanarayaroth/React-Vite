import React from "react";

function Delete({onDelete}) {
    
    return(
        <button className="dltbtn" onClick={onDelete}>Delete</button>
    )
}

export default Delete