// Script específico para a página de serviços
document.addEventListener("DOMContentLoaded", function () {
  console.log("Script de serviços carregado");

  // Garantir que o menu hamburger funciona
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu ul");

  console.log("Menu toggle:", menuToggle);
  console.log("Nav menu:", navMenu);

  if (menuToggle && navMenu) {
    // Remover qualquer event listener anterior
    const newMenuToggle = menuToggle.cloneNode(true);
    menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);

    // Adicionar o event listener novamente
    newMenuToggle.addEventListener("click", function (e) {
      console.log("Menu clicado");
      e.preventDefault();
      newMenuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Facilitar a navegação para âncoras na mesma página
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
