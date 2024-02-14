import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Product } from "../type";
import { getAllProductsAPI, getCategoriesAPI, getProductByLimitAPI, getProductsByCategoryAPI, getSingleProductsAPI, sortProductByDescAPI, updateProductAPI } from "./productAPI";

const initialState:{products:Product[], product:Product, categories:string[]} = {
    products: [],
    product: {} as Product,
    categories: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getAllProductsAPI.fulfilled, (state, aciton) => {
            state.products = aciton.payload
        }).addCase(getSingleProductsAPI.fulfilled, (state, action) => {
            state.product = action.payload
        }).addCase(getCategoriesAPI.fulfilled, (state, action) => {
            state.categories = action.payload
        }).addCase(updateProductAPI.fulfilled, (state, action) => {
            state.product = action.payload
        }).addCase(sortProductByDescAPI.fulfilled, (state, action) => {
            state.products = action.payload
        }).addCase(getProductByLimitAPI.fulfilled, (state, action) => {
            state.products = action.payload
        }).addCase(getProductsByCategoryAPI.fulfilled, (state, action) => {
            state.products = action.payload
        })
    }
})

export const selectProduct = (state: RootState) => state.main
export default productSlice.reducer