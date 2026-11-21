import { configureStore } from "@reduxjs/toolkit";
import PruductListsReducer from "./ProductListSlice"
import CategoryReducer from "./CtegorySlice"

export const store = configureStore({
    reducer:{
        PruductLists:PruductListsReducer,
        Categorys:CategoryReducer,
    }
})