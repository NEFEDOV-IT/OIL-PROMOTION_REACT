import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
    addShopSizeInCart(state, action: PayloadAction<{ id: number; size: number }>) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.data[index].size < 99) {
        state.data[index].size += action.payload.size;
      }
    },
    changeQuantity(state, action: PayloadAction<{ id: number; size: number }>) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.data[index].size <= 99) {
        state.data[index].size = action.payload.size;
      }
    },
    changeSizeWithRemoveCart(state, action: PayloadAction<number>) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload
      );
      state.data[index].size = 0;
    },
    removeShopSizeInCart(state, action: PayloadAction<{ id: number; size: number }>) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.data[index].size > 0) {
        state.data[index].size -= action.payload.size;
      }
    },
    removeShopSize(state) {
      state.data.map((item) => (item.size = 0));
    },
    sortShop(state, action: PayloadAction<number>) {
      switch (action.payload) {
        case 2:
          state.data.sort((a, b) => a.price - b.price);
          break;
        case 3:
          state.data.sort((a, b) => b.price - a.price);
          break;
        case 4:
          state.data.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 5:
          state.data.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          state.data.sort((a, b) => a.id - b.id);
      }
    },
    searchItemShop(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  addShopSize,
  addShopSizeInCart,
  removeShopSize,
  removeShopSizeInCart,
  sortShop,
  searchItemShop,
  changeQuantity,
  changeSizeWithRemoveCart,
} = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
