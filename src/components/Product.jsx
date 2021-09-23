import React from 'react';
import Price from './Price';
import CheckoutTemp from './CheckoutTemp';

const Product = ({ product, prices }) => {
  const price = prices[0];
  return (
    <article className="card">
      <header className="bg-gray-900 p-6 text-center">
        <div className="flex text-left">
          
          <div className="flex-1">
            {
              ( price && price.product.images ) &&
              <img src={price.product.images} alt="Product" width="500px"/>
            }
          </div>

          <div className="flex-1 px-6">
            <p className="text-gray-400">Precio</p>
            <Price {...price} className="text-2xl" />
          </div>

        </div>
      </header>

      <div className="text-center p-6 bg-gray-700">
        <h1 className="text-3xl mb-4 uppercase">{price.product.name}</h1>
        <CheckoutTemp price={price}/>
      </div>

    </article>
  )
}

export default Product
