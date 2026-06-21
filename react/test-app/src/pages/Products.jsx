import React from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>

          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
