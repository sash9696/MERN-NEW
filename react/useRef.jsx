import React, { useEffect, useRef, useState } from 'react'

// store data across re renders
// function App() {

//   // useRef

//     const countRef = useRef(0);

//     const increase = () => {
//       countRef.current++;
//       console.log(countRef.current)
//     }

//     console.log('App rendered')
//   return (
//     <div>
//       <button onClick={increase}>Increase</button>
//     </div>
//   )
// }



// access dom (most common case)
// function App() {

//   // useRef

//   const inputRef = useRef(null);

//   const focusInput = () => {

//     // console.dir(inputRef.current)

//     inputRef.current.focus()

//     //similar to document.querySelector("input").focus()
//     //but in a react way

//   }
   

//   return (
//     <div>
//       <input  ref={inputRef} />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   )
// }

//previous value

// interview question, how o u remeber the previous state
//  state -> ref =  state -> update state -> componeent re renders -> ref will have the older value
function App() {

const [count, setCount] = useState(0);
const previous  = useRef();  

useEffect(() => {
  previous.current = count
  console.log('after component mounts',previous.current)

}, [count])

console.log('during render',previous.current)
  return (
    <div>
      <h2>Current: {count} </h2>
      <h2>Previous: {previous.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
export default App


// real world usecases
// focusing on an input after opening the modal
//Scroll to a section
//Playing and pausing the video
//Remebering the timer id
//tracking previous values
//Integrating third party libraries like (charts, maps, editors)





// what causes the react component to render?

// A react component does not continuously watch for every variable
//React will re render only when react itself knows that somthing has changed


// when we do this setCount(1);
// React my compoennts state has changed. so please render again
// react recieves the signal and schedules a re-render


// what about useRef?

// const obj = {
//   current
// }

// obj.current ++


const [count, setCount] = useState(0)
const [name, setname] = useState('')

 

const handleClick = () => {
  setCount(c => c + 1)
  setName("John")

  // only one re render
  // collect all the updates
  //update the state
  //one render
}

// react 18 it automatically batches the updates that happen during the same event



