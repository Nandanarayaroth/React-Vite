
function List(props) {

    const  itemList = props.items;

    // const fruits = [{id: 1, name: "apple", calories: 95},
    //                  {id: 2, name: "orange", calories: 45}, 
    //                  {id: 3, name: "coconut", calories: 105},
    //                  {id: 4, name: "pineapple", calories: 159}]

    // fruits.sort((a,b) => a.name.localeCompare(b.name)) Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) Reverse alphabetical
    // fruits.sort((a,b) => a.calories - b.calories) Numerical
    // fruits.sort((a,b) => b.calories - a.calories) Reverse Numerical

    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100)

    const listItems = itemList.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>)

    return(<ul>{listItems}</ul>)
}

export default List