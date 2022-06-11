import { configureStore } from "@reduxjs/toolkit";
import error from "./error";
import todoInformation from "./getTodoInfo";
import TodoSlice from "./todo's";

const store = configureStore({
    reducer: {
        todoInfo: todoInformation.reducer,
        error: error.reducer,
        todoArr: TodoSlice.reducer
    }
})
export default store;