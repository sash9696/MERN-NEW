import React from 'react'

function ProductCard({product}) {
  return (
    <div className='product-card'>
        <h2>{product.name}</h2>

        <p>Category: {product.category}</p>

        <h3>₹{product.price}</h3>

        <button>
            Add to Cart
        </button>
    </div>
  )
}

export default ProductCard