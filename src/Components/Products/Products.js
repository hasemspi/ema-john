import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';

const Products = (props) => {

const {products,evenHandaler} =props;
    //console.log(props.products);
    const { img, name, seller, price, stock, key } = products;
    return (
        <div className='product'>
          
            <div className='card'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p><small>by: {seller}</small></p>
            <p class="price">${price}</p>
            <p><button onClick={()=>evenHandaler(products)}> Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button></p>
            </div>
        </div>
    );
};

export default Products;