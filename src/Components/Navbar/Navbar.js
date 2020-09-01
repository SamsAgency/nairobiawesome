import React from "react";
import "./Navbar.css"
import {NavLink} from "react-router-dom"

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <h3 className="logo">
                LOGO
            </h3>
            <ul className="ul">
                <NavLink to="/" className="li">Home</NavLink>
                <NavLink to="/premium" className="li">Premium</NavLink>
                <NavLink to="/regular" className="li">Regular</NavLink>
            </ul>
        </div>
    )
}
export default Navbar