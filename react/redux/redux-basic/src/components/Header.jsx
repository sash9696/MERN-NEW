import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { clearCart } from "../features/cart/cartSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const cartCount = useSelector((state) => state.cart.items.length);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
  };

  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo">🛒</span>
        <h1>Redux Shop</h1>
      </div>

      <div className="header-actions">
        <span className="cart-badge">{cartCount} in cart</span>
        <div className="user-info">
          <span className="user-avatar">{user?.name?.charAt(0)}</span>
          <span className="user-name">{user?.name}</span>
        </div>
        <button className="btn btn-outline" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
