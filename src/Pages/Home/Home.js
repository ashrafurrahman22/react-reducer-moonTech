import React from 'react';
import { useProducts } from '../../Context/ProductProvider';
import SingleProduct from './SingleProduct';

const Home = () => {

    const { state: {products, loading, error} } = useProducts();
    
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
        content =  products.map(product=> <SingleProduct
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

export default Home;