import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct } from "../../features/product/productSlice";
import { deleteProductAPI, getSingleProductsAPI, updateProductAPI } from "../../features/product/productAPI";
import { Product } from "../../features/type";
import { useForm } from "react-hook-form";

export const SeeProduct:React.FC = React.memo(():JSX.Element => {
    const {id} = useParams()
    const {product} = useAppSelector(selectProduct)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (id) dispatch(getSingleProductsAPI(+id))

    }, [id])
    const {register, handleSubmit, reset, formState: {errors}} = useForm<Product>()
    const upProd = (data:Product):void => {
        data.rating.count = +data.rating.count
        data.rating.rate = +data.rating.rate
        if(!data.title) data.title = product.title
        if(!data.category) data.category = product.category
        if(!data.price) data.price = product.price
        if(!data.description) data.description = product.description
        if(!data.image) data.image = product.image
        if(!data.rating.count) data.rating.count = product.rating?.count
        if(!data.rating.rate) data.rating.rate = product.rating?.rate
        console.log(data, data.rating.count, data.rating.rate);

        if(id) dispatch(updateProductAPI({id: +id, obj: {...data}}))
    }
    
    return(
        <div className="show">
            <div className="info">
                <p>Title: {product.title}</p>
                <hr />
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Count: {product.rating?.count}</p>
                <p>Rate: {product.rating?.rate}</p>
                <img src={product.image} alt="" />
                <button onClick={() => dispatch(deleteProductAPI(product.id)).unwrap().then(console.log)}>Delete this product</button>
            </div>
            <form className="form" onSubmit={handleSubmit(upProd)}>
                <input placeholder="Enter product title" {...register("title")}/>
                <input placeholder="Enter product price" {...register("price", {
                    pattern: {
                        value: /^\d+$/,
                        message: "Use only numbers"
                    }
                })}/>
                {errors.price && <p>{errors.price.message}</p>}
                <input placeholder="Enter product description" {...register("description")}/>
                <input placeholder="Enter imgUrl" {...register("image")}/>
                <input placeholder="Enter product rating" {...register("rating.rate", {
                    pattern: {
                        value: /^\d+$/,
                        message: "Use only numbers"
                    }
                })}/>
                {errors.rating?.rate && <p>{errors.rating.rate.message}</p>}
                <input placeholder="Enter proudct count" {...register("rating.count", {
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