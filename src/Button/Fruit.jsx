export default function Fruit({name, price, emoji, soldout}) {

    return (
    <div>
        {/* {emoji} {name} {price} */}
        {/* {price > 5 ? <li> {emoji} {name} {price}  </li> : ""} */}

        <li>
            {emoji} {name} {price} {soldout ? "Soldout" : ""}
        </li>
        
    </div>
    )
}