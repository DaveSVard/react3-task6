import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectProduct } from "../../features/product/productSlice";
import { SortPrice, getAllProductsAPI, getCategoriesAPI, getProductByLimitAPI, getProductsByCategoryAPI, sortProductByDescAPI } from "../../features/product/productAPI";
import { Link } from "react-router-dom";

export const ShowProducts:React.FC = React.memo(():JSX.Element => {

    const dispatch = useAppDispatch()
    const {products, categories} = useAppSelector(selectProduct)
    useEffect(() => {
        dispatch(getAllProductsAPI())
        dispatch(getCategoriesAPI())
    }, [])
    console.log(products);
    
    return(
        <div className="show">
            <div className="limit">
                <input placeholder="Enter products limit" onChange={(e) => dispatch(getProductByLimitAPI(+e.target.value))}/>
            </div>
            <div className="search__by__category">
                <select onChange={(e) => dispatch(getProductsByCategoryAPI(e.target.value))}>
                    <option value="" hidden>Search by category</option>
                    {categories.map((elm, i) => {
                        return(
                            <option key={i} value={elm}>{elm}</option>
                        )
                    })}
                </select>
            </div>
            <div className="sort">
                <button onClick={() => dispatch(sortProductByDescAPI(SortPrice.ASC)).unwrap().then(console.log)}>Sort ascending</button>
                <button onClick={() => dispatch(sortProductByDescAPI(SortPrice.DESC)).unwrap().then(console.log)}>Sort descending</button>
            </div>
            {products.map(elm => {
                return(
                    <div className="show__div" key={elm.id}>
                        <p>Title: {elm.title}</p>
                        <p>Description: {elm.description}</p>
                        <p>Category: {elm.category} {elm.price }</p>
                        <Link to={"/seeProduct/" + elm.id}>See more</Link>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
})