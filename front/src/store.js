import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./authRedux/userSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import { authApi } from "./authRedux/authApi"
import storageSession from "redux-persist/lib/storage/session"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from "redux-persist"

const persistConfig = {
  key: "root",
  storage: storageSession,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat(authApi.middleware),
  // devTools: false,
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
