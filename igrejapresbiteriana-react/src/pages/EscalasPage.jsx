import React from 'react';
import EscalaIframe from '../components/EscalaIframe/EscalaIframe';
import './EscalasPage.css';

const EscalasPage = () => {
  return (
    <div className="escalas-page">
      {/* Hero Section */}
      <section className="escalas-hero">
        <div className="container">
          <div className="hero-content">
            <i className="fas fa-calendar-alt hero-icon"></i>
            <h1>Escalas de Serviço</h1>
            <p className="subtitle">
              Conheça a programação dos ministérios e serviços da nossa igreja
            </p>
          </div>
        </div>
      </section>


      {/* Escalas Section */}
      <section className="escalas-content">
        <div className="container">
          <div className="escalas-wrapper">
            <EscalaIframe />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EscalasPage;
