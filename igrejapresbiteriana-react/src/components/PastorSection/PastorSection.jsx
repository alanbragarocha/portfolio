import React from 'react';
import { Link } from 'react-router-dom';
import { dadosIgreja } from '../../data/churchData';
import './PastorSection.css';

const PastorSection = () => {
  return (
    <section className="pastor-section" id="pastor">
      <div className="container">
        <div className="pastor-container">
          <div className="pastor-imagem">
            <div className="pastor-foto-oval">
              <img
                src={dadosIgreja.pastor.foto}
                alt={dadosIgreja.pastor.nome}
                width="400"
                height="400"
              />
            </div>
          </div>

          <div className="pastor-conteudo">
            <div className="pastor-info">
              <h3>{dadosIgreja.pastor.nome}</h3>
              <p className="pastor-bio">
                {dadosIgreja.pastor.biografia}
              </p>
              <p className="pastor-bio">
                {dadosIgreja.pastor.formacao}
              </p>
              <div className="pastor-acoes">
                <Link to="/pastor" className="btn-primary">
                  Conheça Minha Trajetória
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Seção Visão e Missão */}
        <article 
          className="visao-missao-container" 
          aria-labelledby="visao-missao-heading"
        >
          <header className="visao-missao-header">
            <h2 id="visao-missao-heading">
              <i className="fas fa-church" aria-hidden="true"></i>
              Visão e Missão
            </h2>
            <p className="visao-missao-subtitle">Nossa Declaração de Propósitos</p>
          </header>

          <div className="visao-missao-content">
            <div className="visao-missao-intro">
              <p>
                A Quarta Igreja Presbiteriana de Macaé é uma igreja com propósitos. Entendemos que nem
                nós, nem nossa igreja, estamos aqui por acaso. Deus nos criou e estabeleceu com propósitos
                bem definidos, e desejamos cumprir a expectativa do Senhor no tempo que temos aqui, até
                que Ele volte. Foi para isso que ele nos chamou.
              </p>
              <p>
                Para isso precisamos saber e entender claramente que propósitos são esses, para que
                possamos obedecê-los e sermos encontrados fiéis. Por isso, baseados na Bíblia, elaboramos
                uma Declaração de Propósitos, para servir de direcionador de nossas ações e nos ajudar em
                nossa caminhada.
              </p>
            </div>
            
            <section className="propositos-section" aria-labelledby="propositos-heading">
              <h3 id="propositos-heading">Declaração de Propósitos da Quarta IPM</h3>
              <ol className="propositos-lista">
                <li>
                  <div className="proposito-icon">
                    <i className="fas fa-praying-hands" aria-hidden="true"></i>
                  </div>
                  <div className="proposito-content">
                    <p>
                      Desejamos, de todo coração, honrar e exaltar a Deus em nossos encontros, formais e
                      informais.
                    </p>
                    <span className="proposito-badge">Adoração</span>
                  </div>
                </li>
                <li>
                  <div className="proposito-icon">
                    <i className="fas fa-hands-helping" aria-hidden="true"></i>
                  </div>
                  <div className="proposito-content">
                    <p>
                      Queremos conhecer os novos irmãos na fé, acolhê-los, batizá-los e integrá-los, bem como
                      suas famílias, à nossa família espiritual.
                    </p>
                    <span className="proposito-badge">Comunhão</span>
                  </div>
                </li>
                <li>
                  <div className="proposito-icon">
                    <i className="fas fa-book-open" aria-hidden="true"></i>
                  </div>
                  <div className="proposito-content">
                    <p>
                      Pela oração, o estudo e a prática das Escrituras; e pela operação do Espírito Santo em nós,
                      desejamos nos tornar mais e mais parecidos com o Senhor Jesus Cristo, em nosso caráter,
                      para a glória de Deus.
                    </p>
                    <span className="proposito-badge">Discipulado</span>
                  </div>
                </li>
                <li>
                  <div className="proposito-icon">
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </div>
                  <div className="proposito-content">
                    <p>
                      Como Igreja, desejamos servir uns aos outros, para alívio das cargas e das necessidades
                      espirituais, emocionais, físicas e materiais.
                    </p>
                    <span className="proposito-badge">Serviço ou Ministério</span>
                  </div>
                </li>
                <li>
                  <div className="proposito-icon">
                    <i className="fas fa-globe-americas" aria-hidden="true"></i>
                  </div>
                  <div className="proposito-content">
                    <p>
                      Nos comprometemos a investir nossos dons, talentos e recursos financeiros na promoção e
                      proclamação do evangelho, na igreja e fora dela, através de nosso testemunho, palavras e
                      ações; em Macaé ou em qualquer outro lugar em que Deus nos der oportunidade.
                    </p>
                    <span className="proposito-badge">Evangelização e Missões</span>
                  </div>
                </li>
              </ol>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PastorSection;
