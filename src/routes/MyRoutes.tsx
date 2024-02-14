import { useRoutes } from "react-router-dom"
import { AddProduct } from "../pages/AddProduct"
import { Layout } from "../pages/Layout"
import { MyError } from "../pages/MyError"
import { SeeProduct } from "../pages/SeeProduct"
import { ShowProducts } from "../pages/ShowProducts"

export const MyRoutes:React.FC = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {path: "/", element: <ShowProducts/>},
                {path: "/addProduct", element: <AddProduct/>},
                {path: "/seeProduct", element: <SeeProduct/>},
            ]
        },
        {
            path: "*",
            element: <MyError/>
        }
    ])
    return routes
}