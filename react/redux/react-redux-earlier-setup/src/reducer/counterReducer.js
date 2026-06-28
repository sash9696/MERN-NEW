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
      case "INCREMENT_BY":
        return {
            count: state.count + action.payload
        }
       case "DECREMENT_BY":
            return {
                count: state.count - action.payload
            }
      default:
        return state
    }
  
  }

  export default counterReducer