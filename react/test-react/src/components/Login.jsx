import React from "react";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { user, login } = useAuth();
  return <div>{!user && <button onClick={login}>Login</button>}</div>;
}

export default Login;
