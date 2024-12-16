import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems = (state) => state.cart.list;

export const selectCartTotal = createSelector(
  [selectCartItems],
  (list) =>
    list.reduce((acc, item) => acc + item?.buy_quantity * item?.price, 0)
);
