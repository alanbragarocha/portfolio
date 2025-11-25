import React from "react";
import "../styles/Projects.css";

function Projects() {
  return React.createElement(
    "section",
    { id: "projetos", className: "projects section" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("h2", { className: "section-title" }, "Projetos"),
      React.createElement(
        "p",
        { className: "section-description" },
        "Conheça alguns dos projetos que desenvolvi recentemente"
      ),
      React.createElement(
        "div",
        { className: "projects__grid" },
        React.createElement(
          "article",
          { className: "project-card" },
          React.createElement(
            "div",
            { className: "project-card__image" },
            React.createElement("img", {
              src: "/images/projects/Em breve.svg",
              alt: "Prévia do projeto Igreja Presbiteriana",
            })
          ),
          React.createElement(
            "div",
            { className: "project-card__content" },
            React.createElement(
              "h3",
              { className: "project-card__title" },
              "Igreja Presbiteriana"
            ),
            React.createElement(
              "p",
              { className: "project-card__description" },
              "Site responsivo em português para uma igreja presbiteriana, desenvolvido com HTML, CSS e JavaScript, com informações institucionais, agenda de cultos e localização."
            ),
            React.createElement(
              "ul",
              { className: "project-card__features" },
              React.createElement(
                "li",
                null,
                "Seção de figuras históricas da reforma"
              ),
              React.createElement("li", null, "Agenda semanal de eventos"),
              React.createElement(
                "li",
                null,
                "Informações de contato e localização"
              ),
              React.createElement(
                "li",
                null,
                "Menu mobile responsivo com JavaScript"
              ),
              React.createElement(
                "li",
                null,
                "Seção de ministérios e doações com PIX"
              )
            ),
            React.createElement(
              "div",
              { className: "project-card__actions" },
              React.createElement(
                "a",
                {
                  href: "https://alanbraga.com/projetos/IgrejaPresbiteriana",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn btn--primary",
                },
                React.createElement("span", null, "Prévia"),
                React.createElement("i", {
                  className: "fas fa-external-link-alt",
                })
              ),
              React.createElement(
                "a",
                {
                  href: "https://github.com/alanbragarocha/IgrejaPresbiteriana",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn btn--secondary",
                },
                React.createElement("span", null, "Repositório"),
                React.createElement("i", { className: "fab fa-github" })
              )
            )
          )
        ),
        React.createElement(
          "article",
          { className: "project-card" },
          React.createElement(
            "div",
            { className: "project-card__image" },
            React.createElement("img", {
              src: "/images/projects/Em breve.svg",
              alt: "Prévia do projeto Serviços Consultoria",
            })
          ),
          React.createElement(
            "div",
            { className: "project-card__content" },
            React.createElement(
              "h3",
              { className: "project-card__title" },
              "Servicos Consultoria"
            ),
            React.createElement(
              "p",
              { className: "project-card__description" },
              "Página para profissionais liberais desenvolvida com HTML, CSS e JavaScript, apresentando serviços, especialidades e depoimentos de clientes."
            ),
            React.createElement(
              "ul",
              { className: "project-card__features" },
              React.createElement(
                "li",
                null,
                "Seção de apresentação com contadores dinâmicos"
              ),
              React.createElement(
                "li",
                null,
                "Cards de serviços com ícones personalizados"
              ),
              React.createElement(
                "li",
                null,
                "Áreas de especialidades organizadas em colunas"
              ),
              React.createElement(
                "li",
                null,
                "Depoimentos de clientes em formato carrossel"
              ),
              React.createElement(
                "li",
                null,
                "Navegação suave com scroll automático"
              )
            ),
            React.createElement(
              "div",
              { className: "project-card__actions" },
              React.createElement(
                "a",
                {
                  href: "https://alanbraga.com/projetos/PaginaServicosConsultoria",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn btn--primary",
                },
                React.createElement("span", null, "Prévia"),
                React.createElement("i", {
                  className: "fas fa-external-link-alt",
                })
              ),
              React.createElement(
                "a",
                {
                  href: "https://github.com/alanbragarocha/PaginaServicosConsultoria",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn btn--secondary",
                },
                React.createElement("span", null, "Repositório"),
                React.createElement("i", { className: "fab fa-github" })
              )
            )
          )
        ),
        React.createElement(
          "article",
          { className: "project-card" },
          React.createElement(
            "div",
            { className: "project-card__image" },
            React.createElement("img", {
              src: "/images/projects/Em breve.svg",
              alt: "Prévia do projeto Landing Page",
            })
          ),
          React.createElement(
            "div",
            { className: "project-card__content" },
            React.createElement(
              "h3",
              { className: "project-card__title" },
              "Landing page E-commerce"
            ),
            React.createElement(
              "p",
              { className: "project-card__description" },
              "Landing page para loja de tecnologia desenvolvida com HTML e CSS, apresentando categorias de produtos e proposta de valor da marca"
            ),
            React.createElement(
              "ul",
              { className: "project-card__features" },
              React.createElement(
                "li",
                null,
                "Banner principal com chamada para ação"
              ),
              React.createElement(
                "li",
                null,
                "Categorias de produtos interativas"
              ),
              React.createElement("li", null, "Seção de proposta de valor"),
              React.createElement("li", null, "Design minimalista e moderno"),
              React.createElement(
                "li",
                null,
                "Tipografia Raleway para identidade visual"
              )
            ),
            React.createElement(
              "div",
              { className: "project-card__actions" },
              React.createElement(
                "a",
                {
                  href: "https://alanbraga.com/projetos/TechShopLandingPage",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn btn--primary",
                },
                React.createElement("span", null, "Prévia"),
                React.createElement("i", {
                  className: "fas fa-external-link-alt",
                })
              ),
              React.createElement(
                "a",
                {
                  href: "https://github.com/alanbragarocha/TechShopLandingPage",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn btn--secondary",
                },
                React.createElement("span", null, "Repositório"),
                React.createElement("i", { className: "fab fa-github" })
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "projects__more" },
        React.createElement(
          "a",
          {
            href: "https://github.com/alanbragarocha",
            className: "btn btn--primary",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          React.createElement("span", null, "Ver Todos os Projetos"),
          React.createElement("i", { className: "fab fa-github" })
        )
      )
    )
  );
}

export default Projects;
