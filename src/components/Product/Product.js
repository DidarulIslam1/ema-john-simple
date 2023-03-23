import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    // console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>Product Name: {name}</p>
                <p className='product-name'>Product Price: ${price}</p>
                <p className='product-name'><small>Seller: {seller}</small></p>
                <p className='rating'><small >Product Ratings: {ratings}</small></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add To Cart</p>
                <FontAwesomeIcon
                    icon={faShoppingCart}
                ></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;