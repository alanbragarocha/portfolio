import React from "react";
import facebookIcon from "../../assets/images/icones/facebook.svg";
import instagramIcon from "../../assets/images/icones/instagram.svg";
import whatsappIcon from "../../assets/images/icones/whatsapp.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo">
              <span className="script-font">PaneSabor</span>
              <span className="tagline">Padaria & Confeitaria</span>
            </div>
            <p className="footer-desc">
              Desde 1985 trazendo o melhor da panificação artesanal para sua
              mesa.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={facebookIcon} alt="Facebook" width="24" height="24" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={whatsappIcon} alt="WhatsApp" width="24" height="24" />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Links Rápidos</h3>
              <ul>
                <li>
                  <a href="#inicio">Início</a>
                </li>
                <li>
                  <a href="#produtos">Produtos</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Horários</h3>
              <ul className="hours-list">
                <li>Segunda a Sexta: 6h - 20h</li>
                <li>Sábados: 6h - 18h</li>
                <li>Domingos: 7h - 12h</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contato</h3>
              <ul className="contact-list">
                <li>Rua das Flores, 123</li>
                <li>São Paulo, SP</li>
                <li>(11) 99999-9999</li>
                <li>contato@panesabor.com.br</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} PaneSabor. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
