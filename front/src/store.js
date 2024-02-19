import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./authRedux/userSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authApi } from "./authRedux/authApi"

const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
  // devTools: false,
})

setupListeners(store.dispatch)

export default store
