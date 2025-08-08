// src/redux/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0, users: { name: "", id: 0 } },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        saveUserData: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { increment, decrement, saveUserData } = counterSlice.actions;
export default counterSlice.reducer;
