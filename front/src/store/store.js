import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authApi } from "./authApi"

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
  // devTools: false,
})

setupListeners(store.dispatch)

export default store
