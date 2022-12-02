import React from 'react';
import { useProducts } from '../../Context/ProductProvider';
import { actionTypes } from '../../state/ProductState/actionTypes';

const SingleProduct = ({product}) => {

  const {dispatch} = useProducts()

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='w-2/3' src={product.image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{product.model}</h2>
          <p>Ratings: {product.rating}</p>
          <p>{product.keyFeature}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>dispatch({type: actionTypes.ADD_TO_CART, payload : product})} className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;