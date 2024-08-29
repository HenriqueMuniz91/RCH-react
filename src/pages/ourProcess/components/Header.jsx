import React from 'react';
import styles from './Header.module.css';
import logoText from '../../../img/LogoText.png';

const Header = () => {
  return (
    <header className={ styles.mainBox }>
      <div id="box">
        <ul className={ styles.logoText }>
          <img src={logoText} alt="Logo" />
        </ul>
        <ul className={ styles.headerLinks }>
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

/* export const header = styled.header`
  background-color: #000`; */