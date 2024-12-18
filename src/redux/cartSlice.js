import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      if (state.list) {
      const index = state.list.findIndex(
        (cake) => cake.product_id === action.payload.product_id && cake.variant === action.payload.variant,
      );
      if (index !== -1) {
        state.list[index].buy_quantity += action.payload.buy_quantity;
      } else {
        state.list.push(action.payload);
      }
    }
    },
    increaseItem: (state, action) => {
      const item = state.list.find(
        (item) =>
          item.product_id === action.payload.product_id &&
          item.variant === action.payload.variant,
      );
      if (item) item.buy_quantity += 1;
    },
    decreaseItem: (state, action) => {
      const item = state.list.find(
        (item) =>
          item.product_id === action.payload.product_id &&
          item.variant === action.payload.variant,
      );
      if (item && item.buy_quantity > 1) item.buy_quantity -= 1;
    },
    removeFromCart: (state, action) => {
      const { product_id, variant } = action.payload;
      state.list = state.list.filter(
        (item) => !(item.product_id === product_id && item.variant === variant),
      );
    },
    setCart: (state, action) => {
      state.list = action.payload
    },
    updateItem: (state, action) => {
      const { product_id, variant, quantity } = action.payload;
      const item = state.list.find(
        (item) =>
          item.product_id === product_id && item.variant === variant,
      );
      if (item) {
        item.buy_quantity = quantity; 
      }
    }
  },
});

export const { addToCart, increaseItem, decreaseItem, removeFromCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;
