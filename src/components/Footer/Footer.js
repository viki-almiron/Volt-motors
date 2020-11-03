import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="social-icons">
                <a href="https://www.facebook.com/volt.motors">
                    <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
                </a>
                <a href="https://www.instagram.com/volt.motors/">
                    <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
                </a>
                <a href="https://www.linkedin.com/company/volt-motors/">
                    <FontAwesomeIcon icon={faLinkedin} className="icon linkedin-icon" />
                </a>  
            </div>
            <p>VOLT Motors. Soñando con un cielo más azul y un mañana más brillante © 2020.</p>
            <a href="#nav">
                <FontAwesomeIcon icon={faChevronUp} className="top"/>
            </a>   
        </footer>
    );
} 

export default Footer; 
