import React from 'react';
import './ProcessSection.css';

const ProcessSection = ({ number, title, text, imgSrc, isGray }) => {
  return (
    <section className={`process_one ${isGray ? 'gray' : ''}`}>
      {number % 2 !== 0 && (
        <div id="image">
          <img src={imgSrc} alt={`Processo ${number}`} />
        </div>
      )}
      <h1 id="number">{number}</h1>
      <div className="text">
        <h2 id="process_title">{title}</h2>
        <h1 id="process_text">{text}</h1>
        <a id="process_hiperlink" href="pagina9.html">Discover more</a>
      </div>
      {number % 2 === 0 && (
        <div id="image">
          <img src={imgSrc} alt={`Processo ${number}`} />
        </div>
      )}
    </section>
  );
};

export default ProcessSection;
