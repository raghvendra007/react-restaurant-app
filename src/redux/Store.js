import { configureStore } from "@reduxjs/toolkit";
import { restaurant } from "./ApiSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    [restaurant.reducerPath]: restaurant.reducer,
    cart: cartReducer,
  },
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurant.middleware),
});

export default store;
