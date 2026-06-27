import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "20px",
        marginTop: "30px",
      }}
    >
      <h2>Cart</h2>

      <h3>Items: {items.length}</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button
              onClick={() => {
                dispatch(removeFromCart(item.id));
              }}
            >
              Remove
            </button>
          </div>
        ))}

        {items.length === 0 && <p>Cart is empty</p>}
      </div>
    </div>
  );
}

export default Cart;
