import Code from "./code"
import Welcome from "./Welcome"

export default function COnditionalComponent() {

    const display = false
    return(
        display ? "Message 1" : "Message 2"
    )
    
}