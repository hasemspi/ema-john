import React from 'react';
import './Card.css'
const Card = (props) => {
    console.log(props);
    const {card} = props;

let totals = 0;
let shipping = 0;
for(const products of card){
    totals = totals + products.price;
    shipping = shipping+products.shipping;
}
const text = (totals*0.1).toFixed(2);
const TotalPrice =totals+shipping;
    return (
        <div className='Card'>
            <h4>Order Summary</h4>
            <p>Items Ordered: {card.length}</p>
            <p>Product Price: ${totals} </p>
            <p><small>Shiiping Cost: ${shipping}</small></p>
            <p><small>Tax + VAT: ${text} </small></p>
            <p>Total Price: {TotalPrice} </p>
        </div>
    );
};

export default Card;