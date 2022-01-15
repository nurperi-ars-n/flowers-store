import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import flowerSlice from "./flowerSlice";
import userSlice from "./users/userSlice";



const store = configureStore({
    reducer: {
        flowers: flowerSlice,
        cart: cartSlice,
        users: userSlice,

    },
    
})

export default store