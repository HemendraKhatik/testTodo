import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todoReducer";
import { configureStore } from "@reduxjs/toolkit";

const root = {
  todoReducer,
  //rest reducers ....
};

const reducers = combineReducers(root);

const store = configureStore({
  reducer: reducers,
});

export { store };
