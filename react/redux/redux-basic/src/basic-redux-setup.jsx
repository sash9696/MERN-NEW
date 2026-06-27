import React from 'react'

import {createStore} from 'redux';


// initial state
const initialState = {
  count:0
}

// reducer

function counterReducer (state = initialState, action){
  switch(action.type){
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    default:
      return state
  }

}

// create store

const store = createStore(counterReducer)

console.log(store.getState())


// dispatch action

store.dispatch({
  type:"INCREMENT"
})

console.log(store.getState())

store.dispatch({
  type:"INCREMENT"
})
console.log(store.getState())

store.dispatch({
  type:"DECREMENT"
})
console.log(store.getState())


function App() {
  return (
    <div>App</div>
  )
}

export default App