import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    auth: authSlice,
    cart: cartSlice
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
