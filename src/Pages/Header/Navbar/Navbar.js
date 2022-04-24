import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="topnav">
            <Link className="active" to='/home'>Home</Link>
            <Link to='/addservice'>Add Service</Link>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
};

export default Navbar;