import React from 'react';
import Header from './pages/ourProcess/components/Header';
import ProcessSection from './pages/ourProcess/components/ProcessSections';
import StartNow from './pages/ourProcess/components/StartNow';
import Footer from './pages/ourProcess/components/Footer';
import './App.css';
import img_process_one from './img/Process-01.png';
import img_process_two from './img/Process-02.png';

function App() {
  return (
    <div className="App">
      <Header />
      <ProcessSection
        number="01"
        title="Impactando Pessoas Através da Educação Descentralizada"
        text="Nossa missão é capacitar pessoas de todas as idades e origens por meio de programas educacionais inovadores sobre blockchain, criptomoedas e a nova fase da internet. Estamos pavimentando o futuro ao fornecer conhecimento prático e relevante para impulsionar carreiras e oportunidades."
        imgSrc={ img_process_one }
      />
      <ProcessSection
        number="02"
        title="Construindo uma Comunidade Forte e Inclusiva"
        text="O Rio Crypto Hub é mais do que um evento; é uma comunidade viva e inclusiva onde entusiastas, desenvolvedores, investidores e curiosos se reúnem para compartilhar ideias, colaborar em projetos e expandir suas redes de contatos. Juntos, estamos fortalecendo o ecossistema Web3 no Rio de Janeiro."
        imgSrc={ img_process_two }
        isGray={true}
      />
      <ProcessSection
        number="03"
        title="Inovação Tecnológica para um Futuro Sustentável"
        text="Estamos na vanguarda da inovação tecnológica, explorando soluções blockchain para desafios globais como sustentabilidade ambiental, finanças descentralizadas e identidade digital. O Rio Crypto Hub impulsiona o desenvolvimento de tecnologias disruptivas que impactam positivamente o mundo."
        imgSrc="./img/Process-03.png"
      />
      <StartNow />
      <Footer />
    </div>
  );
}

export default App;
