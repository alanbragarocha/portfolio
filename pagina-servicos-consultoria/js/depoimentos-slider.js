// depoimentos-slider.js - Script para o slider de depoimentos na página inicial

document.addEventListener("DOMContentLoaded", function () {
  // Elementos do slider
  const slider = document.querySelector(".depoimentos-slider");
  const cards = document.querySelectorAll(".depoimento-card");
  const prevBtn = document.querySelector(".btn-nav.prev");
  const nextBtn = document.querySelector(".btn-nav.next");
  const indicadores = document.querySelectorAll(".indicador");

  // Inicialização
  let currentIndex = 0;

  // Esconder todos os cards exceto o primeiro
  cards.forEach((card, index) => {
    if (index !== 0) {
      card.style.display = "none";
    }
  });

  // Função para mostrar um card específico
  function showCard(index) {
    // Esconder todos os cards
    cards.forEach((card) => {
      card.style.display = "none";
    });

    // Remover classe active de todos os indicadores
    indicadores.forEach((ind) => {
      ind.classList.remove("active");
    });

    // Mostrar o card atual
    cards[index].style.display = "block";

    // Adicionar a classe active ao indicador atual
    indicadores[index].classList.add("active");

    // Adicionar animação
    cards[index].style.animation = "none";
    cards[index].offsetHeight; // Trigger reflow
    cards[index].style.animation = "fadeIn 0.5s ease forwards";
  }

  // Event listeners para botões
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
      showCard(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
      showCard(currentIndex);
    });
  }

  // Event listeners para indicadores
  indicadores.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      currentIndex = index;
      showCard(currentIndex);
    });
  });

  // Alternar automaticamente a cada 5 segundos
  setInterval(function () {
    currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    showCard(currentIndex);
  }, 5000);
});
