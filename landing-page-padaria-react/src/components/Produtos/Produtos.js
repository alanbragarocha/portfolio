import React, { useState } from "react";
import "./Produtos.css";
import { PRODUTOS } from "../../data/produtos";
import ProdutoCard from "../ProdutoCard/ProdutoCard";

function Produtos() {
  const [categoriaAtual, setCategoriaAtual] = useState("todos");

  const filtrarPorCategoria = (categoria) => {
    setCategoriaAtual(categoria);

    // Atualizar botões de categoria
    const botoes = document.querySelectorAll(".categoria-btn");
    botoes.forEach((botao) => {
      botao.classList.remove("active");
      if (
        botao.textContent.toLowerCase().includes(categoria) ||
        (categoria === "todos" &&
          botao.textContent.toLowerCase().includes("todos"))
      ) {
        botao.classList.add("active");
      }
    });
  };

  // Filtrar produtos com base na categoria selecionada
  const produtosFiltrados =
    categoriaAtual === "todos"
      ? PRODUTOS
      : PRODUTOS.filter((produto) => produto.categoria === categoriaAtual);

  return (
    <section id="produtos" className="section produtos-section">
      <div className="container">
        <div className="section-title">
          <h2>Nossos Produtos</h2>
          <p className="subtitle">
            Descubra o sabor da tradição em cada pedaço
          </p>
        </div>

        <div className="categorias">
          <button
            className="categoria-btn active"
            onClick={() => filtrarPorCategoria("todos")}
          >
            Todos
          </button>
          <button
            className="categoria-btn"
            onClick={() => filtrarPorCategoria("pao")}
          >
            Pães
          </button>
          <button
            className="categoria-btn"
            onClick={() => filtrarPorCategoria("doce")}
          >
            Doces
          </button>
          <button
            className="categoria-btn"
            onClick={() => filtrarPorCategoria("salgado")}
          >
            Salgados
          </button>
          <button
            className="categoria-btn"
            onClick={() => filtrarPorCategoria("bolo")}
          >
            Bolos
          </button>
          <button
            className="categoria-btn"
            onClick={() => filtrarPorCategoria("especial")}
          >
            Especiais
          </button>
        </div>

        <div className="produtos-grid">
          {produtosFiltrados.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Produtos;
