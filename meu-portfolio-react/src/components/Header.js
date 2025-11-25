import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.js";
import "./styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return React.createElement(
    "header",
    { className: `header ${scrolled ? "scrolled" : ""}` },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "nav",
        { className: "main-nav" },
        React.createElement(
          "div",
          { className: "logo" },
          React.createElement(
            Link,
            { to: "/", onClick: handleLinkClick },
            React.createElement("img", {
              src: "/images/Logo.svg",
              className: "logoImg",
              alt: "Logo",
            })
          )
        ),
        React.createElement(
          "ul",
          { className: "nav-menu-desktop" },
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
            React.createElement("a", { href: "/#technologias" }, "Tecnologias")
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
        ),
        React.createElement(
          "div",
          { className: "nav-actions" },
          React.createElement(ThemeToggle, {
            className: "theme-toggle--desktop",
          }),
          React.createElement(
            "button",
            {
              className: `menu-toggle ${menuOpen ? "active" : ""}`,
              onClick: handleMenuToggle,
              "aria-label": "Toggle menu",
            },
            React.createElement("span", null),
            React.createElement("span", null),
            React.createElement("span", null)
          )
        )
      )
    ),
    React.createElement(
      "ul",
      { className: `nav-menu-mobile ${menuOpen ? "active" : ""}` },
      React.createElement(
        "li",
        null,
        React.createElement(Link, { to: "/", onClick: handleLinkClick }, "Home")
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "/#projetos", onClick: handleLinkClick },
          "Projetos"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "/#technologias", onClick: handleLinkClick },
          "Tecnologias"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          Link,
          { to: "/sobre", onClick: handleLinkClick },
          "Sobre"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "/#contato", onClick: handleLinkClick },
          "Contato"
        )
      ),
      React.createElement(ThemeToggle, {
        className: "theme-toggle",
      })
    )
  );
}

export default Header;
