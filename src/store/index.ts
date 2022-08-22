import { configureStore } from "@reduxjs/toolkit";
import { shopReducer } from "./shop/shop.slice";
import {cartReducer} from "./cart/cart.slice";

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
});
