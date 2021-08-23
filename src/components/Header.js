import React from 'react';
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="../gabaflixlogo.png" alt="Gabaflix Logo"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="../wolfuserimg.png" alt="Wolf User"></img>
                </a>
            </div>
        </header>
    );
}