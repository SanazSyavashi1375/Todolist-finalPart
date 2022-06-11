import { createSlice } from "@reduxjs/toolkit";

const todoInitialState = {
    title: '',
    dueDate: '',
    description: ''
}

const todoInformation = createSlice({
    name: "todo",
    initialState: todoInitialState,
    reducers: {
        setTitle(state, action) {
            state.title = action.payload;
        },
        setDueDate(state, action) {
            state.dueDate = action.payload;
        },
        setDescription(state, action) {
            state.description = action.payload;
        },
        reset(state) {
            state.title = '';
            state.dueDate = '';
            state.description = '';
        }
    }
})
export default todoInformation;
export const todoInformationAction = todoInformation.actions;