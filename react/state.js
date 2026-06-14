import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  //hooks should at top level of management
  // inside a function or react component

  const increment = () => {
    debugger;
    setCount(count + 1);
  };

  console.log("App rendered");

  return (
    <div>
      <h1> {count} </h1>

      <button onClick={increment}> Increment </button>
    </div>
  );
}

export default App;

// State

// props -> data from parent
// state -> Data owned by the component

// function  useState(initialValue) {

//   if(state ===  undefined){
//     state = initialValue
//   }

//   function  setState(newValue) {
//     state = newValue;

//     render();
//   }

//   return [state, setState]

// }
