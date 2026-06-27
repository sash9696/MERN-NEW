import React from 'react'
import Product from './components/Product'
import Cart from './components/Cart'


// old redux

// action types
// action creators
// switch cases
// manual immutable updates
// {...store, payload}
// combine reducers setup

// redux toolkit
// createSlice()
// configureStore()

function App() {
  return (
    <div>
      
      <Product/>

      <Cart/>
    </div>
  )
}

export default App