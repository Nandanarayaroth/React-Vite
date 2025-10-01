

import React from "react";
import List from "./List";

function Component() {

    const fruits = [
        {id: 1, name: "apple", calories: 95}, 
        {id: 2, name: "orange", calories: 45},
        {id: 3, name: "banana", calories: 105},
        {id: 4, name: "pineapple", calories: 159},
        {id: 5, name:"Kiwi", calories: 37}
    ]

    const vegetables = [
        {id: 6, name: "Potatoes", calories: 110},
        {id: 7, name: "Celery", calories: 15},
        {id: 8, name: "Carrot", calories: 25},
        {id: 9, name: "Corn", calories: 63},
        {id: 10,name: "Broccoli", calories: 50}
    ]

    return (
        <div>
            
            {fruits.length > 0 ? <List items={fruits} category="fruits"/> : null}
            {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
            
        </div>
    )

}

export default Component