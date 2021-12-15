import React from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product';
import { graphql } from 'gatsby'

const products = (props) => {
  const products = props.data.allStripeProduct.nodes; 
  return (
    <Layout>
      <Product Product={products, prices} /> 
    </Layout>
  )
}

export default products

export const pageQuery = graphql`
  {
    allStripeProduct {
      nodes {
        id
        name
        description
        images
      }
    }
  }
`;