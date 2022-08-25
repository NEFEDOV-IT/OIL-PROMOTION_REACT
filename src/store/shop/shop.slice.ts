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
    changeQuantity(state, action) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.data[index].size <= 99) {
        state.data[index].size = action.payload.size;
      }
    },
    changeSizeWithRemoveCart(state, action) {
      const index = state.data.findIndex(
        (item) => item.id === action.payload
      );
      state.data[index].size = 0;
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
      state.data.map((item) => (item.size = 0));
    },
    sortShop(state, action) {
      switch (action.payload) {
        case 2:
          state.data.sort((a, b) => a.price - b.price);
          return;
        case 3:
          state.data.sort((a, b) => b.price - a.price);
          return;
        case 4:
          state.data.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });
          return;
        case 5:
          state.data.sort((a, b) => {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
          });
          return;
        default:
          state.data.sort((a, b) => a.id - b.id);
      }
    },
    searchItemShop(state, action) {
      state.data = initialState.data.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
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
