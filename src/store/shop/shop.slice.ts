import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addShopSize(state, action) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.data.push(action.payload);
      } else if (state.data[index].size <= 98) {
        state.data[index].size += action.payload.size;
      }
    },
    addShopSizeInCart(state, action) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.data[index].size < 99) {
        state.data[index].size += action.payload.size;
      }
    },
    removeShopSizeInCart(state, action) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.data[index].size > 0) {
        state.data[index].size -= action.payload.size;
      }
    },
    removeShopSize(state) {
      state.data.map(item => item.size = 0)
    }
  },
});

export const { addShopSize, addShopSizeInCart, removeShopSize, removeShopSizeInCart } =
  shopSlice.actions;
export const shopReducer = shopSlice.reducer;
