import { useState } from "react"


function ProductItem({itemlist}){

    const [availableProducts, setAvailableProducts] = useState([])

    const productHandler = () => {
        const filtered = itemlist.filter(product => product.inStock === true)
        setAvailableProducts(filtered)
    }
    
    return(
        <div className="m-5">
            <ul>
                {itemlist.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            <button onClick={productHandler} className="bg-red-400 p-2 mt-2">filter Products</button>

            {availableProducts.length > 0 && (
                <div className="mt-2">
                    <h3>Available Products are </h3>
                    <ul>
                        {availableProducts.map(product => (
                            <li key={product.id}>{product.name}</li>
                        ))}
                    </ul>

                <div>
                    <p>Total of all available product :</p>
                    <p>
                        {availableProducts.reduce((acc, curr) => acc + curr.price , 0)}
                    </p>
                </div>

                </div>

                
            )}

            
            
        </div>
    )
}

export default ProductItem