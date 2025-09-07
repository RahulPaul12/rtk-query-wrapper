import { configureStore } from "@reduxjs/toolkit"
import { postapi } from "./PostApi/ApiSlice"

export const store = configureStore({
    reducer:{
        [postapi.reducerPath] : postapi.reducer
    },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postapi.middleware),

})