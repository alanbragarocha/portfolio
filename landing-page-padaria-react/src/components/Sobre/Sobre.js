import React from "react";
import "./Sobre.css";

function Sobre() {
  const anoFundacao = 1985;
  const anoAtual = 2025;
  const anosTradicao = anoAtual - anoFundacao;

  return (
    <section id="sobre" className="section sobre-section">
      <div className="container">
        <div className="section-title">
          <h2>Sobre Nós</h2>
          <p className="subtitle">
            Conheça nossa história e tradição de {anosTradicao} anos
          </p>
        </div>

        <div className="sobre-container">
          <div className="sobre-content">
            <div className="history-section">
              <div className="history-text">
                <h3>Nossa História</h3>
                <p>
                  Fundada em 1985 pela família Oliveira, a PaneSabor começou
                  como uma pequena padaria de bairro com apenas três
                  funcionários. Com receitas tradicionais passadas por gerações
                  e um compromisso inabalável com a qualidade, nos tornamos
                  referência na cidade.
                </p>
                <p>
                  Ao longo de {anosTradicao} anos, expandimos nossas instalações
                  e diversificamos nossos produtos, mas mantivemos a essência
                  que nos tornou especiais: o cuidado artesanal e os
                  ingredientes selecionados em cada produto que sai de nossos
                  fornos.
                </p>
                <div className="timeline-marker">
                  <span className="year">1985</span>
                  <span className="divider">•</span>
                  <span className="year">{anoAtual}</span>
                </div>
              </div>
              <div className="values-section">
                <h3>Nossos Valores</h3>
                <ul>
                  <li>
                    <strong>Tradição:</strong> Honramos as receitas tradicionais
                    que fazem parte de nossa história.
                  </li>
                  <li>
                    <strong>Qualidade:</strong> Selecionamos os melhores
                    ingredientes para proporcionar sabor inigualável.
                  </li>
                  <li>
                    <strong>Inovação:</strong> Buscamos constantemente novas
                    técnicas e sabores para surpreender nossos clientes.
                  </li>
                  <li>
                    <strong>Sustentabilidade:</strong> Comprometidos com
                    práticas que respeitam o meio ambiente e valorizam
                    produtores locais.
                  </li>
                  <li>
                    <strong>Comunidade:</strong> Acreditamos no poder de
                    transformação social e na construção de laços através da boa
                    gastronomia.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
