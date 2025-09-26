function Hello(props) {

    return(
        <div>
            <h2>{props.person.message} {props.person.name} {props.person.seatNumbers}</h2>
        </div>
    )
}

export default Hello