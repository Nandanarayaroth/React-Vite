

function List({items, category}) {

    // const fruits = [
    //     {id: 1, name: "apple", calories: 95}, 
    //     {id: 2, name: "orange", calories: 45},
    //     {id: 3, name: "banana", calories: 105},
    //     {id: 4, name: "pineapple", calories: 159},
    //     {id: 5, name:"Kiwi", calories: 37}
    // ]

    // fruits.sort((a,b) => a.name.localeCompare(b.name))
    // alphabetic order

    // fruits.sort((a,b) => b.name.localeCompare(a.name))
    // reverse of alphabetic

    // fruits.sort((a,b) => a.calories - b.calories)
    // Numerical order or assending order

    // fruits.sort((a,b) => b.calories - a.calories)
    // reverse numerical order or decending order

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)
    // const listItem = lowCalFruit.map(fruit => <li key={fruit.id}>{fruit.name} {fruit.calories}</li>)
    
    // const highCalFruits = fruits.filter(fruit => fruit.calories > 100)
    // const listItem = highCalFruits.map(fruit => <li key={fruit.id}>{fruit.name} {fruit.calories}</li>)

    // const items = props.items
    // const category = props.category

    const listItem = items.map(fruit => <li key={fruit.id} className="ml-4">{fruit.name}: <b>{fruit.calories}</b></li>)

    return(
        <>
            {/* <div className="flex justify-center mt-14">
                <ul className="list-disc">{listItem}</ul>
            </div> */}
            <div className="flex justify-center mt-14">
                
                <ol className="list-disc ">
                    <h3 className="text-2xl font-semibold mb-4 text-amber-700">{category}</h3>
                    {listItem}
                </ol>
            </div>

        </>
    )
    
}
List.defaultProps = {
    category: "Category",
    items: [],
}

export default List