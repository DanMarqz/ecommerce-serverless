import React from 'react';
import Product from './Product';

const ProductCard = ({product}) => {
  return (
    <article className="card p-4">
      <header>
        {/* <h2 className="font-bold text-2xl">{ product.name }</h2> */}
        <Product></Product>
      </header>
    </article>
  )
}

export default ProductCard
