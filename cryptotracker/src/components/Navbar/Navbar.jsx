import React from 'react'
import { Routes, Route, Link, NavLink,UseHistory } from "react-router-dom";
import "./Navbar.css";




function Navbar() {

    return (
        <grid>
            <nav className='menu-bar'>
                <ul>
                    
                    <li>
                        <NavLink  to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Trending">Trending</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Market">Markets</NavLink>
                    </li>
                </ul>
            </nav>

        </grid>
    )
}

export default Navbar