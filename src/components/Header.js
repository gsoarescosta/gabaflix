import React from 'react';
import './Header.css';

const header = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="../gabaflixlogo.png" alt="Gabaflix Logo"></img>
        </a>
      </div>
      <div className="header--user">
        <a href="https://github.com/gsoarescosta">
          <img src="../user.png" alt="User"></img>
        </a>
      </div>
    </header>
  );
}

export default header;