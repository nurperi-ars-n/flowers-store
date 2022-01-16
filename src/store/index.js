import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import flowerSlice from "./flowerSlice";
import loginSlice from "./logIn/loginSlice";
import signUpSlice from "./signUp/signUpSlice";
import usersSlice from "./users/usersSlice";

const store = configureStore({
  reducer: {
    flowers: flowerSlice,
    cart: cartSlice,
    users: usersSlice,
    logIn: loginSlice,
    signUp: signUpSlice,
  },
});

export default store;
