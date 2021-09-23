import React from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product';
import { graphql } from 'gatsby';

const product = (props ) => {
  const product = props.data.stripeProduct;
  const prices = props.data.allStripePrice.nodes;
  return (
    <Layout>
      <Product prices={prices} product={product}></Product>
    </Layout>
  )
}

export default product

export const pageQuery = graphql`
  query($id : String) {
    stripeProduct(id: { eq: $id }){
      name
      slug
    }
    allStripePrice(filter: {product: {id: {eq: $id}}}) {
      nodes {
        unit_amount
        billing_scheme
        currency
        id
        created
        nickname
        product {
          id
          images
          description
          name
          created
        }
      }
    }
    allStripeProduct(filter: {id: {eq: $id}}) {
      nodes {
        name
        description
        images
        id
        created
      }
    }
  }
`;