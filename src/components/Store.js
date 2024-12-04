import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice for managing boolean and string states
const stateSlice = createSlice({
  name: "appState",
  initialState: {
    isTrue: false, // Initial boolean value
    stringValue: "", // Initial string value
  },
  reducers: {
    // Toggle the boolean value
    toggleBoolean: (state) => {
      state.isTrue = !state.isTrue;
    },
    // Set the boolean value explicitly
    setTrue: (state) => {
      state.isTrue = true;
    },
    setFalse: (state) => {
      state.isTrue = false;
    },
    // Update the string value
    updateString: (state, action) => {
      state.stringValue = action.payload; // Payload contains the new string
    },
  },
});

// Export the actions
export const { toggleBoolean, setTrue, setFalse, updateString } =
  stateSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    appState: stateSlice.reducer, // Register the reducer
  },
});

export default store;
