import { createSlice } from '@reduxjs/toolkit';

// Load cart state from localStorage
const loadCartFromStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return {
        items: [],
        totalQuantity: 0,
        totalAmount: 0,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      items: [],
      totalQuantity: 0,
      totalAmount: 0,
    };
  }
};

const initialState = loadCartFromStorage();

// Redux slice for cart state management
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: newItem.quantity || 1,
          totalPrice: newItem.price * (newItem.quantity || 1),
        });
      } else {
        existingItem.quantity += newItem.quantity || 1;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
        
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        state.totalAmount = state.items.reduce((total, item) => total + item.totalPrice, 0);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
