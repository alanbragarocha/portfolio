import React, { useState } from "react";
import "./Depoimentos.css";

function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const depoimentos = [
    {
      id: 1,
      nome: "Ana Clara Silva",
      cargo: "Designer",
      texto:
        "Os produtos da PaneSabor fazem parte da minha rotina há anos. O pão francês é simplesmente perfeito - crocante por fora e macio por dentro. Não troco por nada!",
      estrelas: 5,
    },
    {
      id: 2,
      nome: "Roberto Mendes",
      cargo: "Empresário",
      texto:
        "Sempre peço os produtos desta padaria para os coffee breaks da minha empresa. Além da qualidade excepcional, o atendimento é sempre muito profissional e pontual. Recomendo fortemente!",
      estrelas: 5,
    },
    {
      id: 3,
      nome: "Carla Oliveira",
      cargo: "Professora",
      texto:
        "Os bolos para festas são maravilhosos! Já encomendei diversas vezes para aniversários e todos sempre elogiam. A qualidade e o sabor são inigualáveis.",
      estrelas: 4,
    },
    {
      id: 4,
      nome: "João Paulo",
      cargo: "Médico",
      texto:
        "Como médico, valorizo muito a transparência nos processos e ingredientes, e é isso que encontro aqui. Além disso, os pães integrais são os melhores da cidade!",
      estrelas: 5,
    },
    {
      id: 5,
      nome: "Marcela Santos",
      cargo: "Estudante",
      texto:
        "O café da manhã nesta padaria é um ritual para mim aos finais de semana. O ambiente aconchegante e os croissants recém-saídos do forno fazem toda a diferença no meu dia.",
      estrelas: 4,
    },
  ];

  const nextDepoimento = () => {
    setCurrentIndex((current) => (current + 1) % depoimentos.length);
  };

  const prevDepoimento = () => {
    setCurrentIndex((current) =>
      current === 0 ? depoimentos.length - 1 : current - 1
    );
  };

  const goToDepoimento = (index) => {
    setCurrentIndex(index);
  };

  const getInitials = (nome) => {
    return nome
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
  };

  return (
    <section id="depoimentos" className="section depoimentos-section">
      <div className="container">
        <div className="depoimentos-content">
          <div className="section-title">
            <h2>O que nossos clientes dizem</h2>
            <p className="subtitle">
              Experiências autênticas de quem conhece nossos produtos
            </p>
          </div>

          <div className="depoimentos-carousel">
            <div className="depoimento-slides">
              {depoimentos.map((depoimento, index) => (
                <div
                  key={depoimento.id}
                  className={`depoimento-slide ${
                    index === currentIndex ? "active" : ""
                  }`}
                >
                  <div className="depoimento-texto">
                    <div className="quote-icon">❝</div>
                    <p>{depoimento.texto}</p>
                    <div className="estrelas">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span
                          key={i}
                          className={`estrela ${
                            i <= depoimento.estrelas ? "filled" : ""
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="depoimento-autor">
                    <div
                      className="autor-foto"
                      style={{
                        backgroundImage: depoimento.foto
                          ? `url(${depoimento.foto})`
                          : "none",
                      }}
                    >
                      {!depoimento.foto && (
                        <span>{getInitials(depoimento.nome)}</span>
                      )}
                    </div>
                    <div className="autor-info">
                      <h4>{depoimento.nome}</h4>
                      {depoimento.cargo && <span>{depoimento.cargo}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="depoimentos-nav">
              <button
                className="nav-button prev"
                onClick={prevDepoimento}
                aria-label="Depoimento anterior"
              >
                ❮
              </button>
              <div className="depoimentos-dots">
                {depoimentos.map((depoimento, index) => (
                  <span
                    key={depoimento.id}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => goToDepoimento(index)}
                  ></span>
                ))}
              </div>
              <button
                className="nav-button next"
                onClick={nextDepoimento}
                aria-label="Próximo depoimento"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Depoimentos;
