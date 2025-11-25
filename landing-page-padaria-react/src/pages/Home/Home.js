import React from "react";
import Hero from "../../components/Hero/Hero";
import Produtos from "../../components/Produtos/Produtos";
import Sobre from "../../components/Sobre/Sobre";
import Diferenciais from "../../components/Diferenciais/Diferenciais";
import Depoimentos from "../../components/Depoimentos/Depoimentos";
import Contato from "../../components/Contato/Contato";
import "./Home.css";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Produtos />
      <Sobre />
      <Diferenciais />
      <Depoimentos />
      <Contato />
    </main>
  );
}

export default Home;
