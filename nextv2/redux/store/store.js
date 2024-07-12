import { configureStore } from "@reduxjs/toolkit";
import medicixApi from "../api/medicixApi";
import authSlice from "../slices/authSlice";

export const store = configureStore({
    reducer: {
        [medicixApi.reducerPath]: medicixApi.reducer,
        [authSlice.name]: authSlice.reducer
    },
    middleware: (getDefaultMiddlewares) => {
            return getDefaultMiddlewares().concat(medicixApi.middleware);
        },
    devTools: process.env.NEXT_lOCAL_PRODUCTION
})