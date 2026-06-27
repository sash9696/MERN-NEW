import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items:[]
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        // redux uses immer library   internally it does this // state = {items: {...state.items,action.payload }}

        addToCart : (state, action) => {
            state.items.push(action.payload)

            // with the immer lib u dont have to do this like in old redux and context api
            // state = {items: {...state.items,action.payload }}
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
        }


    }

})

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;