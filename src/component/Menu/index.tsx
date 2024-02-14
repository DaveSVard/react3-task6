import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"

export const Menu:React.FC = () => {
    return(
        <nav className="menu">
            <ul className="menu__list">
                <li><NavLink to={"/"}>ShowProduct</NavLink></li>
                <li><NavLink to={"/addProduct"}>AddProduct</NavLink></li>
            </ul>
        </nav>
    )
}