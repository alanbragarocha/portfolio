import React from 'react';
import { dadosIgreja } from '../../data/churchData';
import './Hero.css';

const Hero = () => {
  const scrollToAgenda = (e) => {
    e.preventDefault();
    const agendaElement = document.getElementById('agenda');
    if (agendaElement) {
      agendaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" role="banner" aria-labelledby="hero-heading">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 id="hero-heading">Bem-vindo à {dadosIgreja.nome}</h1>
          <p className="hero-description">{dadosIgreja.descricao}</p>
          <a 
            href="#agenda" 
            className="btn-primary" 
            onClick={scrollToAgenda}
            aria-label="Navegar para a seção de cultos e eventos"
          >
            Nossos Cultos e Eventos
          </a>
        </div>
        <div className="hero-image">
          <img
            src="/assets/imagens/capa igreja.jpg"
            alt={`Interior da ${dadosIgreja.nome} mostrando o templo principal`}
            width="600"
            height="400"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
