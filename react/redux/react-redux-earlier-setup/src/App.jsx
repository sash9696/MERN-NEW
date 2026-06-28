import React from "react";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./actions/authActions";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      {user && <Counter />}

      <div style={{ margin: "50px" }}>
        <button
          onClick={() =>
            dispatch(
              login({
                name: "john",
                role: "admin",
              })
            )
          }
        >
          Login
        </button>

        <button onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </div>
  );
}

export default App;
