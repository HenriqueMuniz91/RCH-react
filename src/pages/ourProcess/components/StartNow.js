import React from 'react';
import Styles from './StartNow.module.css';

const StartNow = () => {
  return (
    <section className={ Styles.startNow }>
      <div id="startNowText">
        Improve Your Business And Make your Work Easy
      </div>
      <button id="startNowButton">
        START NOW
      </button>
    </section>
  );
};

export default StartNow;
