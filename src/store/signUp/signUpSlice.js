import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  fullname: "",
  email: "",
  phoneNumber: "",
  accessToken: "",
  error: false,
};

const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState,
  reducers: {
    signUp(state, action) {
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.valueBtn = action.payload.fullname;
    },
  },
});

export const { signUp } = signUpSlice.actions;

export default signUpSlice.reducer;
