import React from 'react';
import styles from './ProcessSections.module.css';


const ProcessSection = ({  number, title, text, imgSrc, isGray }) => {
  return (
    <section className={ styles.process_one }>
      {number % 2 !== 0 && (
        <div id="image">
          <img src={imgSrc} alt={`Processo ${number}`} />
        </div>
      )}
      <h1 className= { styles.number }>{number}</h1>
      <div className= { styles.text }>
        <h2 className= { styles.process_title }>{title}</h2>
        <h1 className= { styles.process_text }>{text}</h1>
        <a className= { styles.process_hiperlink } href="pagina9.html">Discover more</a>
      </div>
      {number % 2 === 0 && (
        <div className= { styles.image }>
          <img src={imgSrc} alt={`Processo ${number}`} />
        </div>
      )}
    </section>
  );
};

export default ProcessSection;
