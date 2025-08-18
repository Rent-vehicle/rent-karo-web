import { AppState } from '..';

export const authSelector = (state: AppState) => state.auth;
export const userSelector = (state: AppState) => state.user;
export const cartSelector = (state: AppState) => state.cart;
export const wishlistSelector = (state: AppState) => state.wishlist;
