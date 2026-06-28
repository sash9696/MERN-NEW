import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="cart-section">
      <div className="section-header">
        <h2>Your Cart</h2>
        <p>{items.length} {items.length === 1 ? "item" : "items"}</p>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <span>🛍️</span>
          <p>Your cart is empty</p>
          <small>Add some products to get started</small>
        </div>
      ) : (
        <>
          <ul className="cart-list">
            {items.map((item, index) => (
              <li key={`${item.id}-${index}`} className="cart-item">
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <span>${item.price.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
