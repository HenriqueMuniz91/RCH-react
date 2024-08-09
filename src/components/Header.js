import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="mainBox">
      <div id="box">
        <ul id="logoText">
          <img src="./img/LogoText.png" alt="Logo" />
        </ul>
        <ul id="headerLinks">
          <li><a href="index.html">Home</a></li>
          <li><a href="reviews.html">Reviews</a></li>
          <li><a href="Speakers.html">Speakers</a></li>
          <li><a href="lineUp.html">Line Up</a></li>
          <li><a href="eventPackages.html">Tickets</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
        <div className="buttons">
          <li id="magnifing_glass">
            <img src="./img/outline_search_white_24dp.png" alt="Search" />
          </li>
          <li id="get">
            Get tickets
            <img src="./img/outline_arrow_right_alt_white_24dp.png" alt="Arrow" />
          </li>
        </div>
      </div>
      <div id="box_title">
        <h1 id="title">Nosso Processo</h1>
        <h3 id="descricao">Find what you are looking for!</h3>
      </div>
    </header>
  );
};

export default Header;
