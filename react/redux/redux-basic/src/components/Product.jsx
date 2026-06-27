import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

function Product() {

 const dispatch = useDispatch();
  const products = [
    { id: 1, name: "Laptop", price: 899.99 },
    { id: 2, name: "Smartphone", price: 699.99 },
    { id: 3, name: "Headphones", price: 149.99 },
    { id: 4, name: "Keyboard", price: 59.99 },
    { id: 5, name: "Mouse", price: 29.99 },
    { id: 6, name: "Monitor", price: 249.99 },
    { id: 7, name: "Tablet", price: 399.99 },
    { id: 8, name: "Smartwatch", price: 199.99 },
    { id: 9, name: "Bluetooth Speaker", price: 89.99 },
    { id: 10, name: "Webcam", price: 79.99 },
    { id: 11, name: "External Hard Drive", price: 119.99 },
    { id: 12, name: "USB Flash Drive", price: 19.99 },
    { id: 13, name: "Gaming Chair", price: 229.99 },
    { id: 14, name: "Desk Lamp", price: 34.99 },
    { id: 15, name: "Wireless Charger", price: 39.99 },
    { id: 16, name: "Power Bank", price: 49.99 },
    { id: 17, name: "Router", price: 99.99 },
    { id: 18, name: "Microphone", price: 129.99 },
    { id: 19, name: "Printer", price: 179.99 },
    { id: 20, name: "SSD 1TB", price: 109.99 },
  ];

  return (
    <div>
      <h2>Products</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid ",
              borderRadius: "10px",
              padding: "20px",
              width: "200px",
            }}
          >
            <h3>{product.name}</h3>

            <p
              style={{
                fontSize: "18px",
              }}
            >
              ${product.price}
            </p>

            <button
              style={{
                padding: "10px 15px",
                borderRadius: "6px",
                cursor: "pointer",
                border: "none",
              }}

              onClick={() => {

                dispatch(addToCart(product))
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
