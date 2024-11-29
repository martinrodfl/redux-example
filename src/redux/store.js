import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import numberReducer from "./numberSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    number: numberReducer,
  },
});
