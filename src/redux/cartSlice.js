import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItemsToCart: (state, action) => {
      //   state.value += 1; // Correct way to update the state
      state.items.push(action.payload);
    },

    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItemsToCart, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
