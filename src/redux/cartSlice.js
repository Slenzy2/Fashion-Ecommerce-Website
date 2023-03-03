
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: [],
  cart: [],
  cartTotalQuantity:[],
  cartTotalAmount:"",
 

};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      if (state.value.length > 0) {
        if (state.value.includes(action.payload.id)) {
          alert("item already in the cart");
        } else {
          state.value.push(action.payload.id);
          state.cart.push(action.payload);
        }
        console.log(action.payload);
      } else {
        state.value.push(action.payload.id);
        state.cart.push(action.payload);
      }
    },

    remove: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return action.payload.id !== item.id;
      });

      state.value.pop();
    },

    increaseQuantity: (state, action) => {
      let item = state.cart.find((a) => {
        return a.id === action.payload;
      });
      item.quantity += 1;
    
    },

    decreaseQuantity: (state, action) => {
      let item = state.cart.find((a) => {
        return a.id === action.payload;
      });
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },

  

    Subtotal: (state, action) => {
      const values = state.cart.map((item) => {
        return item.quantity * item.Price;
      });

      const Total = values.reduce((a, b) => {
        return a + b;
      }, 0);

      state.cartTotalAmount = Total;
    },

  },
});

export const { add, remove , increaseQuantity ,Subtotal, decreaseQuantity,} =
  cartSlice.actions;

export default cartSlice.reducer;
