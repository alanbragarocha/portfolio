import React, { useEffect, useState } from "react";
import "./PopupModal.css";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Abre o modal automaticamente após 2 segundos que o componente é montado
    // para dar tempo de carregar a página primeiro
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    // Verifica se o popup já foi mostrado nesta sessão
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (hasSeenPopup) {
      // Se já viu o popup nesta sessão, não mostrar novamente
      clearTimeout(timer);
    }

    // Adiciona um listener para a tecla ESC fechar o popup
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        sessionStorage.setItem("hasSeenPopup", "true");
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Guarda na sessão que o usuário já viu o popup
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  const handleWhatsAppClick = () => {
    // Abre o WhatsApp com mensagem pré-formatada
    const message = encodeURIComponent("Olá! Gostaria de adquirir o livro sobre casamento e lidar com crises.");
    const whatsappUrl = `https://wa.me/5522997821855?text=${message}`;
    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className={`popup-overlay ${isOpen ? "active" : ""}`} onClick={closeModal}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={closeModal}>×</button>
        <div className="popup-image-container">
          <img
            src="/assets/imagens/livro.jpeg"
            alt="Livro sobre Casamento e Crises"
            className="popup-image"
          />
          <div className="popup-text">
            <p>Se você deseja melhorar seu casamento e aprender a lidar com crises, você pode adquirir pelo WhatsApp.</p>
            <p className="popup-text-bold">Enviamos para todo o Brasil.</p>
          </div>
          <button className="popup-button popup-button-whatsapp" onClick={handleWhatsAppClick}>
            <i className="fab fa-whatsapp"></i>
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
