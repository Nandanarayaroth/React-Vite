import Fruit from "./Fruit"

export default function Fruits() {

    // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pinapple"]

    const fruits =[
        {
            name: "Apple",
            price: 10,
            emoji: "🍎",
            soldout: false
        },
        {
            name: "Banana",
            price: 7,
            emoji: "🍌",
            soldout: false
        },
        {
            name: "Orange",
            price: 5,
            emoji: "🍊",
            soldout: true
        },
        {
            name: "Pineapple",
            price: 8,
            emoji: "🍍",
            soldout: false
        }
    ]

    return(
        <div>
           <ul>
                {fruits.map((fruit) => (
                    // <li key={fruit.name}>{fruit.emoji} {fruit.name} {fruit.price}</li>
                    <Fruit key={fruit.name} name={fruit.name}
                        price={fruit.price}
                        emoji={fruit.emoji}
                        soldout={fruit.soldout}
                    />
                ))}
           </ul>
        </div>
    )
}