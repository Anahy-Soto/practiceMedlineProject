import React from 'react';
import Sidebar from './sidebar';
import '../styles.css';
import './scripts';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <i className="bx bx-menu menu-icon"></i>
                <span className="logo-name">Medline</span>
                <img className="image1" src="Medline 2.png" alt="Medline Logo" />
            </div>
            <Sidebar/>
        </nav>
    );
};


export default Navbar;
