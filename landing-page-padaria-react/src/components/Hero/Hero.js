import React from "react";
import "./Hero.css";
import heroImage from "../../assets/images/hero/hero.png";

function Hero() {
  const handleScrollToProducts = (e) => {
    e.preventDefault();
    const productsSection = document.getElementById("produtos");
    if (productsSection) {
      window.scrollTo({
        top: productsSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Sabor e Tradição <br />
              <span className="script-font accent-text">em cada pedaço</span>
            </h1>
            <p className="hero-description">
              Descubra o verdadeiro sabor da panificação artesanal com
              ingredientes selecionados e receitas tradicionais que passam de
              geração em geração.
            </p>
            <div className="hero-buttons">
              <a
                href="#produtos"
                className="btn btn-primary"
                onClick={handleScrollToProducts}
              >
                Ver Produtos
              </a>
              <a href="#contato" className="btn btn-outline">
                Fazer Pedido
              </a>
            </div>
          </div>
          {/* A imagem agora está como background */}
        </div>
        <div className="hero-features">
          <div className="feature">
            <div className="feature-icon">🌿</div>
            <div className="feature-text">
              <h3>100% Natural</h3>
              <p>Sem conservantes ou aditivos artificiais</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">🥖</div>
            <div className="feature-text">
              <h3>Artesanal</h3>
              <p>Feito à mão com técnicas tradicionais</p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-icon">🔥</div>
            <div className="feature-text">
              <h3>Entrega</h3>
              <p>Pão quentinho na sua porta todos os dias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
