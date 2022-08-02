import { configureStore } from "@reduxjs/toolkit";

import { beersApi } from "./beer/beer.api";

export const store = configureStore({
  reducer: {
    [beersApi.reducerPath]: beersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beersApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
