import React from 'react';
import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={ Styles.fot }>
      <div className={ Styles.footer_p }>
        <div className={ Styles.social }>
          <h1 id="tit2">Lviv</h1>
          <p>Lviv has something for everyone with an impressive array of over 25 brilliantly-styled page templates.</p>
          <div id="redes_sociais">
            <img src="./img/facebook_3128208.png" alt="Facebook" />
            <img src="./img/skype.png" alt="Skype" />
            <img src="./img/twitter-bird-logo_81725.png" alt="Twitter" />
            <img src="./img/linkedin_3536569.png" alt="LinkedIn" />
          </div>
        </div>
        <div id="extra">
          <h1>Extra links</h1>
          <h2>Speakers</h2>
          <h2>Agenda</h2>
          <h2>Tickets</h2>
          <h2>Our Process</h2>
        </div>
        <div id="contacty">
          <h2>Blog</h2>
          <h2>Testimonials</h2>
          <h2>Contact Us</h2>
          <h2>Coming soon</h2>
        </div>
        <div id="subs">
          <h2 id="tit">Subscribe</h2>
          <input type="text" id="in" placeholder="Your Email" />
          <button id="btn">Subscribe</button>
        </div>
      </div>
      <h3>Webflow Templates by 128.digital. Powered by Webflow</h3>
    </footer>
  );
};

export default Footer;
