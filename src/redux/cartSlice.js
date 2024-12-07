import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const index = state.list.findIndex(
        (cake) => cake._id === action.payload._id && cake.product_variant.variant_features === action.payload.product_variant.variant_features,
      );
      if (index !== -1) {
        state.list[index].quantity += action.payload.quantity;
      } else {
        state.list.push(action.payload);
      }
    },
    increaseItem: (state, action) => {
      const item = state.list.find(
        (item) =>
          item._id === action.payload._id &&
          item.product_variant.variant_features === action.payload.product_variant.variant_features,
      );
      if (item) item.quantity += 1;
    },
    decreaseItem: (state, action) => {
      const item = state.list.find(
        (item) =>
          item._id === action.payload._id &&
          item.product_variant.variant_features === action.payload.product_variant.variant_features,
      );
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      const { _id, product_variant } = action.payload;
      state.list = state.list.filter(
        (item) => !(item._id === _id && item.product_variant.variant_features === product_variant.variant_features),
      );
    },
  },
});

// const {actions , reducer} = cartSlice

// export const {addToCart} = actions
// export default reducer

export const { addToCart, increaseItem, decreaseItem, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
