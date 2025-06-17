import { combineReducers } from "@reduxjs/toolkit";
import authSlice, { initialState as authInitialState } from "./auth.slice";


export const reducers = combineReducers({
    auth: authSlice
})

const initialStore = {
    auth: authInitialState
}

export const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    return initialStore;
  }
  return reducers(state, action);
};