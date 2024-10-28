import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import { apiSlice } from "../features/api/apiSlice";
import cartSlice from "../features/cart/cartSlice";
import conditionSlice from "../features/condition/conditionSlice";

const store = configureStore({
  devTools: true,
  reducer: {
    [apiSlice.reducerPath] : apiSlice.reducer,
    auth: authSlice,
    cart: cartSlice,
    condition: conditionSlice,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
