import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const root = {
  todoReducer,
  //rest reducers ....
};

const reducers = combineReducers(root);

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };
