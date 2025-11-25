import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("inicio");

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    } else if (id === "inicio") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setActiveLink(id);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#inicio" onClick={(e) => handleNavClick(e, "inicio")}>
              <span className="script-font">PaneSabor</span>
              <span className="tagline">Padaria & Confeitaria</span>
            </a>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <a
                  href="#inicio"
                  className={activeLink === "inicio" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "inicio")}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#produtos"
                  className={activeLink === "produtos" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "produtos")}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className={activeLink === "sobre" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "sobre")}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className={activeLink === "contato" ? "active" : ""}
                  onClick={(e) => handleNavClick(e, "contato")}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <a
              href="#contato"
              className="btn btn-outline"
              onClick={(e) => handleNavClick(e, "contato")}
            >
              Faça seu pedido
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
