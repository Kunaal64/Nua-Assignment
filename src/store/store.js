import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Configure Redux store with cart reducer
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Save cart state to localStorage on changes
store.subscribe(() => {
  try {
    const cartState = store.getState().cart;
    localStorage.setItem('cart', JSON.stringify(cartState));
  } catch (err) {
    console.error("Could not save cart state to localStorage:", err);
  }
});

export default store;
