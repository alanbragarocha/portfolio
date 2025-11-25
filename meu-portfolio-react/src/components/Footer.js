import React from "react";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "footer__content footer__content--centered" },
        React.createElement(
          "div",
          { className: "footer__social" },
          React.createElement(
            "a",
            {
              href: "https://github.com/alanbragarocha",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "GitHub",
              className: "footer__social-icon",
            },
            React.createElement("i", { className: "fab fa-github" })
          ),
          React.createElement(
            "a",
            {
              href: "https://www.linkedin.com/in/alan-braga-rocha-pcd/",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "LinkedIn",
              className: "footer__social-icon",
            },
            React.createElement("i", { className: "fab fa-linkedin-in" })
          ),
          React.createElement(
            "a",
            {
              href: "https://www.instagram.com/alanbragarocha/",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "Instagram",
              className: "footer__social-icon",
            },
            React.createElement("i", { className: "fab fa-instagram" })
          ),
          React.createElement(
            "a",
            {
              href: "https://wa.me/message/IQJ53CSQW6ELO1",
              target: "_blank",
              rel: "noopener noreferrer",
              "aria-label": "WhatsApp",
              className: "footer__social-icon",
            },
            React.createElement("i", { className: "fab fa-whatsapp" })
          )
        ),
        React.createElement(
          "div",
          { className: "footer__nav" },
          React.createElement(
            "nav",
            { className: "footer__menu" },
            React.createElement(
              "ul",
              null,
              React.createElement(
                "li",
                null,
                React.createElement(Link, { to: "/" }, "Home")
              ),
              React.createElement(
                "li",
                null,
                React.createElement("a", { href: "/#projetos" }, "Projetos")
              ),
              React.createElement(
                "li",
                null,
                React.createElement(
                  "a",
                  { href: "/#technologias" },
                  "Tecnologias"
                )
              ),
              React.createElement(
                "li",
                null,
                React.createElement(Link, { to: "/sobre" }, "Sobre")
              ),
              React.createElement(
                "li",
                null,
                React.createElement("a", { href: "/#contato" }, "Contato")
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "footer__bottom" },
          React.createElement(
            "p",
            { className: "footer__copy" },
            `© ${currentYear} Alan Braga. Todos os direitos reservados.`
          )
        )
      )
    )
  );
}

export default Footer;
