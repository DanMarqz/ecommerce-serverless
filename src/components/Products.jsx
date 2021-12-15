import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
  return (
    <div>
      {
        products.map( (product)=> (
          <ProductCard product={product} key={product.id}>{ product.name, product.images }</ProductCard>
        ))
      }
    </div>
  )
}

export default Products
