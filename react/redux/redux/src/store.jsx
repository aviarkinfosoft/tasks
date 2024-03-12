import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  count: 0,
};

// Define a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default store;
