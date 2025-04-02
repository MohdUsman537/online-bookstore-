import { createSlice } from '@reduxjs/toolkit'
import  Swal from 'sweetalert2';

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
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product Added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
        }
        else 
        {
            Swal.fire({
                title: "Already Added to Cart!",
                text: "You won't be able to add again!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "OK"
              })
        }
    
    },
        removeFromCart: (state,action) => {
            state.cartItems = state.cartItems.filter(
                item => item._id !== action.payload._id)
        },
        clearCart: (state) => {
            state.cartItems = [];
        }
    }
})

//export the actions
export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;



