import React from "react";
import "./Diferenciais.css";

function Diferenciais() {
  const diferenciais = [
    {
      titulo: "Ingredientes Premium",
      descricao:
        "Utilizamos apenas ingredientes de alta qualidade, selecionados cuidadosamente de fornecedores locais e sustentáveis.",
      icone: "ingredients",
    },
    {
      titulo: "Receitas Artesanais",
      descricao:
        "Todas as nossas receitas são preparadas artesanalmente, preservando técnicas tradicionais passadas por gerações.",
      icone: "recipe",
    },
    {
      titulo: "Produção Diária",
      descricao:
        "Nossos produtos são feitos diariamente, garantindo frescor e qualidade em tudo o que servimos.",
      icone: "fresh",
    },
    {
      titulo: "Ambiente Acolhedor",
      descricao:
        "Oferecemos um espaço confortável e aconchegante para que você desfrute de momentos especiais com quem você ama.",
      icone: "ambiente",
    },
    {
      titulo: "Compromisso Sustentável",
      descricao:
        "Adotamos práticas sustentáveis em todo nosso processo produtivo, desde a escolha de fornecedores até embalagens biodegradáveis.",
      icone: "sustentavel",
    },
    {
      titulo: "Atendimento Personalizado",
      descricao:
        "Nossa equipe é treinada para oferecer um atendimento caloroso e personalizado, fazendo você se sentir em casa.",
      icone: "atendimento",
    },
  ];

  return (
    <section id="diferenciais" className="section diferenciais-section">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Diferenciais</h2>
          <p className="subtitle">
            O que nos torna especiais e únicos no mercado
          </p>
        </div>

        <div className="diferenciais-grid">
          {diferenciais.map((diferencial, index) => (
            <div className="diferencial-card" key={index}>
              <div className={`diferencial-icon ${diferencial.icone}`}></div>
              <h3>{diferencial.titulo}</h3>
              <p>{diferencial.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;
