import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import flowerSlice from "./flowerSlice";



const store = configureStore({
    reducer: {
        flowers: flowerSlice,
        cart: cartSlice
    }
})

export default store