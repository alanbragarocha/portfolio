import React, { useEffect } from "react";
import Technologies from "../components/sections/Technologies.js";
import Projects from "../components/sections/Projects.js";
import Contact from "../components/sections/Contact.js";
import "./styles/Home.css";

function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "main",
      { className: "main" },
      React.createElement(
        "section",
        { className: "hero section" },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "hero__content" },
            React.createElement(
              "div",
              { className: "hero__text" },
              React.createElement(
                "h1",
                { className: "hero__title" },
                "Olá, eu sou ",
                React.createElement(
                  "span",
                  { className: "highlight" },
                  "Alan Braga"
                )
              ),
              React.createElement(
                "h2",
                { className: "hero__subtitle" },
                "Desenvolvedor Front-end"
              ),
              React.createElement(
                "p",
                { className: "hero__description" },
                "Transformo ideias em experiências digitais envolventes com foco em performance, acessibilidade e design responsivo."
              ),
              React.createElement(
                "div",
                { className: "hero__actions" },
                React.createElement(
                  "a",
                  { href: "#projetos", className: "btn btn--primary" },
                  "Ver Projetos"
                ),
                React.createElement(
                  "a",
                  { href: "#contato", className: "btn btn--secondary" },
                  "Entre em Contato"
                )
              )
            )
          )
        )
      ),
      React.createElement(Technologies),
      React.createElement(Projects),
      React.createElement(Contact)
    )
  );
}

export default Home;
