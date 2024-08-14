import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./auth/reducer";

const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
  },
});

export default store;
