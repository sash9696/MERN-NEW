import React from "react";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome {user.name}</h1>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <h1>Please login</h1>
      )}
    </div>
  );
}

export default Profile;
