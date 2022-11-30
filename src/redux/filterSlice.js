import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: ''
    },
    reducers: {
        filterUpdate(state, action) {
            state.filter = action.payload;
        }
    }
})

export const { filterUpdate } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;