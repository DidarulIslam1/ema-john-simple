import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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
        addToDb(product.id);
    }
    // useEffect(,[]);
    useEffect(() => {
        console.log('Product load before fetch');
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log('Product loaded');
            })
    }, []);
    useEffect(() => {
        console.log('Local storage first line', products);
        const storedCart = getStoredCart();
        console.log(storedCart);
        const savedCart = [];
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                console.log(addedProduct);
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        console.log('Local storage finished');
    }, [products])
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