import React from 'react';
// import ProductCard from './ProductCard';
import Product from './Product';

const Products = ({ products }) => {
  return (
    <div>
      {
        products.map( (product)=> (
          <Product product={product} key={product.id}>{ product.name, product.images }</Product>
        ))
      }
    </div>
  )
}

export default Products
