
// const button = document.getElementById('btn')

// button.addEventListener('click', () => {
//     document.getElementById('count').innerText ++;
// })

// manual DOM upgrades
// State is scattered everywhere
// Complexity grows
// UI sync 

// jsx
// javascript extension
import React from "react";

console.log(React);

function App() {
  return (
    <div>
      <h1> Hello World </h1>;
    </div>
  );
}

// jsx is not mandatory
// function App() {
//   return React.createElement('h1', null, "Hello World");
// }

// function App() {
//   return React.createElement(
//     "div",
//     null,
//     React.createElement("h1", null, "Hello World")
//   );
// }

export default App;

// everything is a component

// starting from a page to as small a button

// before react 16
//class based component because of life cycle hooks
// stateful components
//fucntion compoennts. => dumb components , stateless

// after react 16
//hooks were introduced
//function components became stateful

// page
// Navbar
// SearchBar
// ProductCard
//Footer


