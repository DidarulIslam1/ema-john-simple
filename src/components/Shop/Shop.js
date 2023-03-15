import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    // const [] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        // console.log('clicked');
        // console.log(product);
        // cart.push(product); do not use
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // useEffect(,[]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <h3>This is for products: {products.length}</h3> */}
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;