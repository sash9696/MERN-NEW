import React, { useState } from 'react'


// React.memo
//it tells react 
//if this compoents props havent changed then skip rendering it

// whenever a parent component renders
//by default all of its children will render again
// even if their props didnt change

// const Counter = React.memo(function Counter(){
//   console.log(`Counter render`)

//   return <h2>Counter Component</h2>
// })



function Counter(){
  console.log(`Counter render`)

  return <h2>Counter Component</h2>
}

const MemoCounter = React.memo(Counter);


function User(){
  console.log(`User render`)
  return <h2>User Component</h2>

}
function App() {
  const [count, setCount] = useState(0);
  console.log('App Render')
  return (
    <div>
      <h1>Count: {count}</h1>

      <button
      onClick={() => setCount(count + 1)}
      >Increment</button>

      <MemoCounter/>
      <User/>
    </div>
  )
}

export default App