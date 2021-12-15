import React from 'react';
import { Link } from 'gatsby';

const BackButton = () => {
  return (
    <button className="app-btn text-xl">
      <Link to={`/products/`}> ❮ Get Back</Link> 
    </button>
  )
}

export default BackButton
