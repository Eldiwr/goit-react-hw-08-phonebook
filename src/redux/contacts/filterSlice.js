import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        value: ''
    },
    reducers: {
        filterUpdate(state, action) {
            state.value = action.payload;
        }
    }
})

export const { filterUpdate } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;