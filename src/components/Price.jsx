import React from 'react'

const Price = ({ unit_amount, currency, className }) => {
  return (
    <span className={`inline-block uppercase ${className}`}>
      ${ unit_amount / 100} <span className="text-sm">{ currency }</span> 
    </span>
  )
}

export default Price
