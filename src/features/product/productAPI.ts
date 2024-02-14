import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../../app/store";
import { Product } from "../type";

export enum SortPrice {
    DESC = "desc",
    ASC = "asc"
}

export const getAllProductsAPI = createAsyncThunk(
    "get all prod",
    async () => {
        const {data} = await myAxios.get("/products")
        return data
    }
)

export const getSingleProductsAPI = createAsyncThunk(
    "get single prod",
    async (id:number) => {
        const {data} = await myAxios.get("/products/" + id)
        return data
    }
)

export const getProductByLimitAPI = createAsyncThunk(
    "get prod by limit",
    async (num:number) => {
        const {data} = await myAxios.get("/products?limit=" + num)
        return data
    }
)

export const sortProductByDescAPI = createAsyncThunk(
    "sort prod by desc",
    async (str:SortPrice) => {
        const {data} = await myAxios.get("/products?sort=" + str)
        return data
    }
)

export const getCategoriesAPI = createAsyncThunk(
    "get categories",
    async () => {
        const {data} = await myAxios.get("/products/categories")
        return data
    }
)

export const getProductsByCategoryAPI = createAsyncThunk(
    "get products by cat",
    async (str:string) => {
        const {data} = await myAxios.get("/products/category/" + str)
        return data
    } 
)

export const addProductsAPI = createAsyncThunk(
    "add prod",
    async (obj:Product) => {
        const {data} = await myAxios.post("/products", obj)
        return data
    }
)

export const updateProductAPI = createAsyncThunk(
    "update prod",
    async ({id, obj}:{id:number, obj: Product}) => {
        const {data} = await myAxios.put("/products/" + id, obj )
        return data
    }
)

export const deleteProductAPI = createAsyncThunk(
    "delete prod",
    async (id:number) => {
        const {data} = await myAxios.delete("/products/" + id)
        return data
    }
)