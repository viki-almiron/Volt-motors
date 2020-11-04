import React from 'react';
import './Nav.scss';

const Nav = () => {
    return (
        <nav className="navbar" id="nav">
            <img src="logo.png" className="logo"/>
            <ul>
              <li><a href="#partners">Aliados</a></li>
              <li><a href="#contact-container">Escribinos</a></li>
            </ul>
        </nav>
    );
} 

export default Nav; 
