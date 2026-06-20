import React from "react";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  return (
    <nav>
      <h2>My Store</h2>

      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
