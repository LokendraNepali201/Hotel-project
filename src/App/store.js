import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Api/userApi";
import { userSlice } from "../Slice/userSlice";
import { productApi } from "../Api/productApi";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [userSlice.name]:userSlice.reducer// ✅ key as 'user'
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, productApi.middleware),
});
