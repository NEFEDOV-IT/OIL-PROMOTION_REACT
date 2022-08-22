import { createSlice } from "@reduxjs/toolkit";
import { ICard } from "../../types/store.initialState";

interface CartState {
  cart: ICard[];
}

const initialState: CartState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemCart(state, action) {
      if (!state.cart.includes(action.payload)) {
        state.cart.push(action.payload)
      }
    },
    removeItemCart(state, action) {
      state.cart = state.cart.filter(item => item !== action.payload)
    },
    removeCart(state) {
      state.cart = []
    }
  },
});

export const { addItemCart, removeItemCart, removeCart } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
