import { createSlice } from '@reduxjs/toolkit'

// Object
const initialState = {
    cartItems: []
} 

const cartSlice = createSlice({
    name : 'cart',
    initialState : initialState,

    reducers:{
        addToCart: (state,action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id)
        // to check if item added to cart or not.
        if(!existingItem){
            state.cartItems.push(action.payload);
            alert("Item added Successfully");
        }
        else 
        {
            alert("Item already existing")
        }
    }
    }
})

//export the actions
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;



