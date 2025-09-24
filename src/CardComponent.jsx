

function CardComponent({title, description, image, children}) {

    return(
        <div className="CardComp">
            <h4>{title}</h4>
            <p>{description}</p>
            <img src={image}></img>
            <div>{children}</div>
        </div>
    )
    
}

export default CardComponent