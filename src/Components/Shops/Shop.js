import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import  './shop.css';
const Shop = () => {
    const [products,setproducts] = useState([]);
    const [addcard,setAddcard] = useState([]);

 //console.log(addcard);
    useEffect(
        ()=>{
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res =>res.json())
            .then(data =>setproducts(data))
        }
        ,[])


    const evenHandaler= (products)=>{
        const newCard = [...addcard,products];
        setAddcard(newCard);
    }

    return (
        <div className='twin-container'>
            <div className="product-container">
{
    products.map(products =><Products 
        products={products}
        key={products.id} 
        evenHandaler={evenHandaler}
     />)
}
     </div>
            <div className="cart-container">

                <p>Order Summary</p>
                <p>click value {addcard.length}</p>
            </div>
        </div>
    );
};

export default Shop;