import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    // console.log(props.product);
    // console.log(props);
    // const {product, handleAddToCart } = props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            {/* <h2>This is product</h2> */}
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>Name: {name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)}
                className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;