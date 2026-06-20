// Context API

import { createContext, useContext } from "react";

//1. Create the context

const UserContext = createContext();

console.log(UserContext);

//2. provide the access of data using Provider

//3. Using the consumer

function Profile() {

  const user  =  useContext(UserContext);


  return (
    <div>
      <h2>Profile Component</h2>
      {/* earlier way */}
      {/* <UserContext.Consumer>
        {(value) => {
          return (
            <div>
              <p>Name: {value.name}</p>

              <p>Role: value.role </p>
            </div>
          );
        }}
      </UserContext.Consumer> */}

      <p>Name: {user.name}</p>

      <p>Role: {user.role} </p>
    </div>
  );
}

function App() {
  const user = {
    name: "John",
    role: "developer",
  };
  return (
    <UserContext.Provider value={user}>
      <h1>Context API Demo</h1>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
