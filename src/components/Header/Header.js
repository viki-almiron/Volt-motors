import React from 'react';
import './Header.scss';

const Header = ({cardIndex, setCardIndex}) => {
    return(
        <header className="main-header">
            <span>Homologado y patentable</span>
            <h1>Preparado para la ciudad</h1>
            <p>Apto para circular en zonas urbanas y periurbanas.</p>
            <div>
                <button type="button" className="slider-button" disabled={`${cardIndex === 0 ? 'disabled': ''}`} onClick={() => setCardIndex(cardIndex - 1)}>{'<'}</button>
                <button type="button" className="slider-button" disabled={`${cardIndex === 2 ? 'disabled': ''}`} onClick={() => setCardIndex(cardIndex + 1)}>{'>'}</button>
            </div>
        </header>
    )
};

export default Header;
