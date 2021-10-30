import React from 'react'
import useProducts from '../../../Products/useProducts';

const Order = () => {
    const [products, setProducts] = useProducts()
    return (
        <div className="services">
            <h2>Products length:{products.length}</h2>
            <h2>item added page</h2>
        </div>
    )
}

export default Order;