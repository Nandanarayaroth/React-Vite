import ComponentD from "./ComponentD"
import React, {useContext, useState} from "react"
import { UserContext } from "./ComponentA"

function ComponentC(props) {

    const user = useContext(UserContext)

    return(

        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC


 