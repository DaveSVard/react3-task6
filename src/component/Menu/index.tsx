import React from "react";
import { NavLink } from "react-router-dom";

export const Menu:React.FC = () => {
    return(
        <nav>
            <ul>
                <li><NavLink to={"/"}>ShowProduct</NavLink></li>
                <li><NavLink to={"/addProduct"}>AddProduct</NavLink></li>
            </ul>
        </nav>
    )
}