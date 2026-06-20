import React, { createContext, useContext, useState } from "react";

// create context

const AuthContext = createContext();

// provider Component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login() {
    setUser({
      name: "John",
      role: "dev",
    }); 
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

// custom hook

export function useAuth() {
  return useContext(AuthContext);
}
