import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Product } from "../../features/type";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct } from "../../features/product/productSlice";
import { addProductsAPI, getCategoriesAPI } from "../../features/product/productAPI";

export const AddProduct:React.FC = React.memo(():JSX.Element => {
    const {categories} = useAppSelector(selectProduct)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCategoriesAPI())
    }, [])
    const {register, handleSubmit, reset, formState: {errors}} = useForm<Product>()
    const addProd = (data:Product):void => {
        console.log(data);
        dispatch(addProductsAPI({...data, id: Date.now()})).unwrap().then(console.log)
    }
    return(
        <div className="show">
            <form className="form" onSubmit={handleSubmit(addProd)}>
                <input placeholder="Enter product title" {...register("title", {
                    required: "Enter product title!"
                })}/>
                {errors.title && <p>{errors.title.message}</p>}
                <input placeholder="Enter product price" {...register("price", {
                    required: "Enter product price!",
                    pattern: {
                        value: /^\d+$/,
                        message: "Use only numbers"
                    }
                })}/>
                {errors.price && <p>{errors.price.message}</p>}
                <select className="width" {...register("category", {
                    required: "Choose product category!"
                })}>
                    <option value="" hidden>Choose Category</option>
                    {categories.map((elm, i) => {
                        return(
                            <option key={i} value={elm}>{elm}</option>
                        )
                    })}
                </select>
                {errors.category && <p>{errors.category.message}</p>}
                <input placeholder="Enter product description" {...register("description", {
                    required: "Enter product description!"
                })}/>
                {errors.description && <p>{errors.description.message}</p>}
                <input placeholder="Enter imgUrl" {...register("image")}/>
                <input placeholder="Enter product rating" {...register("rating.rate", {
                    required: "Enter product rating!",
                    pattern: {
                        value: /^\d+$/,
                        message: "Use only numbers"
                    }
                })}/>
                {errors.rating?.rate && <p>{errors.rating.rate.message}</p>}
                <input placeholder="Enter proudct count" {...register("rating.count", {
                    required: "Enter product count!",
                    pattern: {
                        value: /^\d+$/,
                        message: "Use only numbers"
                    }
                })}/>
                {errors.rating?.count && <p>{errors.rating.count.message}</p>}
                <button>Add product</button>
            </form>
        </div>
    )
})