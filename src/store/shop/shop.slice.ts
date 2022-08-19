import { cards } from "../../utils/data_shopping_cards";
import { createSlice } from "@reduxjs/toolkit";

interface ICard {
  name: string;
  subtitle: string;
  id: number;
  img: string;
  size: number;
}

interface ShopState {
  data: ICard[];
  cart: ICard[];
}

const initialState: ShopState = {
  data: cards,
  cart: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addShopCart(state, action) {
        console.log(action.payload)
      state.cart.push(action.payload);
    },
  },
});

export const { addShopCart } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
