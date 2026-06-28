import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, decrementBy, increment, incrementBy } from "../actions/counterActions";


// useSelector => pulling up the data
//useDispatch => for dispatching the action

function Counter() {

    const dispatch = useDispatch();

    const count = useSelector((state) => state.counter.count)

    const [value, setValue] = useState(0);

    console.log({dispatch, count})

  return (
    <div style={{ margin: "100px" }}>
      <h1>Count: {count}</h1>

      <input
        type="number"
        value={value}
        onChange={(e) => {
            setValue(Number(e.target.value))
        }}
      />

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())} >Decrement</button>
        <button onClick={() => dispatch(incrementBy(value))}>IncrementBy</button>
        <button onClick={() => dispatch(decrementBy(value))} >DecrementBy</button>
      </div>
    </div>
  );
}

export default Counter;
