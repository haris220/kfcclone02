import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: JSON.parse(localStorage.getItem("cartAmount")),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.Id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
        
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 }; 
        state.cartItems.push(tempProductItem);
        
        
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.uniqueId === action.payload.uniqueId
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

       
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.uniqueId !== action.payload.uniqueId
        );

        state.cartItems = nextCartItems;

       
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems)); },
    getTotals(state, action ){
      let sum = 0
  for(let i = 0; i < state.cartItems.length; i++){
    sum  += state.cartItems[i].ItemPrice
  }
      state.cartTotalAmount = sum
      state.cartTotalQuantity = state.cartItems.length
      localStorage.setItem("cartAmount", JSON.stringify(state.cartTotalAmount));
    }
    
    
    
  },
});

export  const {addToCart, removeFromCart, getTotals}   = cartSlice.actions;

export default cartSlice.reducer;
