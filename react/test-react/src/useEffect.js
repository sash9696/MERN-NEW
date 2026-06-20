// useEffect

import { useEffect, useState } from "react";

// side effects

function Counter() {
  const [count, setCount] = useState(0);
  // const [show, setShow] = useState(false);

  // Every render
  // useEffect(() => {

  //   console.log('useeffect ran')
  //   document.title = `Count: ${count}`

  // })

  // run once after the component mounts
  // useEffect(() => {

  //   console.log('useeffect ran')
  //   document.title = `Count: ${count}`

  // }, [])

  // run  after the component mounts everytme the dependecy value changes
  // useEffect(() => {

  //   console.log('useeffect ran')
  //   document.title = `Count: ${count}`

  // }, [count])

  // cleanup function

  useEffect(() => {
   const timer =  setInterval(() => {
      console.log("tick");
    }, 1000);

    return () => {
      console.log("Counter unmounted");

      clearInterval(timer)
    }


  }, []);

  console.log("Counter rendered");

  return (
    <div style={{ margin: "100px" }}>
      <div>
        Counter : {count}
        {/* &nbsp; Show: {show ? "true" : "false"} */}
      </div>
      &nbsp;
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* <button onClick={() => setShow(!show)}>Toggle</button> */}
    </div>
  );
}

function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{margin:'100px'}}>
      &nbsp; Show: {show ? "true" : "false"}
      {
        show && <Counter />
      }

      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
