import { createSlice } from "@reduxjs/toolkit";

const error = createSlice({
    name: 'error',
    initialState: {
        errorIsShown: false,
    },
    reducers: {
        hideError(state) {
            state.errorIsShown = false
        },
        showError(state) {
            state.errorIsShown = true
        }
    }

})
export default error;
export const errorAction = error.actions;