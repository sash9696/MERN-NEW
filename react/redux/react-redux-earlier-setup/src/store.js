import {combineReducers, createStore} from 'redux';
import counterReducer from './reducer/counterReducer';
import authReducer from './reducer/authReducer';



// create store

// const store = createStore(counterReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__()
// )


const rootReducer = combineReducers({
    counter: counterReducer,
    auth:authReducer
})
// new initial state
// {
//     counter:{
//         count:0
//     },

//     auth:{
//         user:null
//     }
// }

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;