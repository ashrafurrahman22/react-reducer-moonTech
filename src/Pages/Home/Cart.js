import React from 'react';
import { useProducts } from '../../Context/ProductProvider';
import SingleCart from './SingleCart';
import SingleProduct from './SingleProduct';

const Cart = () => {
    const { state: {products, cart, loading, error} } = useProducts();
    
    let content;

    if(loading){
        content = <p>Loading....</p>
    }
    if(error){
        content = <p>404! Something went Wrong!</p>
    }
    if(!loading && !error && products.length === 0 ){
        content = <p>Nothing to Show!</p>
    }
    if(!loading && !error && products.length){
        content =  cart.map(product=> <SingleCart
            key={product.id}
            product = {product}
            /> )
    }

    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            {
               content
            }
        </div>
    );
};

export default Cart;