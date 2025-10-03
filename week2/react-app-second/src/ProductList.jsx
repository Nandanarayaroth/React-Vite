

import { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList() {
    const products = [
        { id: 1, name: "Laptop", category : "Electronics", price : 60000, inStock : true},
        { id: 2, name: "Shoes", category : "Footware", price : 2000, inStock : false},
        { id: 3, name: "Book", category : "Eduction", price : 500, inStock : true},
        { id: 4, name: "Mobile", category : "Electronics", price : 1500, inStock : true}

    ]

    return(
        <div>
            <h2 className="m-5">Product List</h2>
            <ProductItem itemlist = {products} />

        </div>
    )
}

export default ProductList