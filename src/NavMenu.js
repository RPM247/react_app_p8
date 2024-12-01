import React from "react";
import "./NavMenu.css";

function NavMenu() {
    return (
        <nav className="nav-menu">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default NavMenu;