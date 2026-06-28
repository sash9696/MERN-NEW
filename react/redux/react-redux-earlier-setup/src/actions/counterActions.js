

// const increment = {
//     type:"INCREMENT"
// }


const increment = () => ({
    type:"INCREMENT"
})

const decrement = () => ({
    type:"DECREMENT"
})

const reset = () => ({
    type:"RESET"
})

const incrementBy = (value) => ({
    type:"INCREMENT_BY",
    payload: value
})

const decrementBy = (value) => ({
    type:"DECREMENT_BY",
    payload: value
})
export {increment, decrement, reset,incrementBy, decrementBy};