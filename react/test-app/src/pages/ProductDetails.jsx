import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products';

function ProductDetails() {

  const {id} =   useParams();

    const product = products.find((product) => product.id === Number(id))

  return (
    <div>
        <h1>{product.name}</h1>

        <h2>{product.price}</h2>
    </div>
  )
}

export default ProductDetails