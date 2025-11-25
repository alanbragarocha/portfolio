import React from "react";
import "./ProdutoCard.css";

function ProdutoCard({ produto }) {
  const formatarPreco = (preco) => {
    return preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="produto-card">
      <div className="produto-img">
        <img src={produto.imagem} alt={produto.nome} />
        <span className="preco">{formatarPreco(produto.preco)}</span>
      </div>
      <div className="produto-info">
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
        <button className="btn-adicionar">Encomendar</button>
      </div>
    </div>
  );
}

export default ProdutoCard;
