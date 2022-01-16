import { createSlice } from "@reduxjs/toolkit";
import { getLocal, removeLocal } from "../../helpers/localStorage";

const isToken = getLocal("JWT_Token");
const isRole = getLocal("ROLE");

const initialState = {
  username: "",
  role: isRole || "",
  isAuth: !!isToken || false,
  accessToken: "",
  error: false,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    logIn(state, action) {
      state.role = action.payload.role;
      state.username = action.payload.username;
      state.isAuth = !!action.payload.token;
    },
    logOut(state, action) {
      removeLocal("JWT_Token");
      removeLocal("ROLE");
      removeLocal('isAuth', false)
    }
  },
});

export const { logIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;
