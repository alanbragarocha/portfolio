document.addEventListener("DOMContentLoaded", function () {
  console.log("Script principal carregado");

  // Menu hambúrguer toggle - correção para todas as páginas
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu ul");

  console.log("Elementos encontrados:");
  console.log("Menu toggle:", menuToggle);
  console.log("Nav menu:", navMenu);

  if (menuToggle && navMenu) {
    // Remover qualquer event listener anterior para evitar duplicação
    const newMenuToggle = menuToggle.cloneNode(true);
    menuToggle.parentNode.replaceChild(newMenuToggle, menuToggle);

    // Adicionar o event listener ao elemento clonado
    newMenuToggle.addEventListener("click", function (e) {
      console.log("Menu toggle clicked - funcionando!");
      e.preventDefault();
      e.stopPropagation();

      newMenuToggle.classList.toggle("active");
      navMenu.classList.toggle("active");

      console.log("Classes após toggle:");
      console.log("Toggle active:", newMenuToggle.classList.contains("active"));
      console.log("Menu active:", navMenu.classList.contains("active"));
    });

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        newMenuToggle.classList.remove("active");
        navMenu.classList.remove("active");
        console.log("Menu fechado via link");
      });
    });

    // Fechar menu ao clicar fora dele
    document.addEventListener("click", function (e) {
      if (!newMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        newMenuToggle.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  } else {
    console.error("Menu toggle ou nav menu não encontrado!");
    console.error("Menu toggle:", menuToggle);
    console.error("Nav menu:", navMenu);
  }

  // Adicionar classe active ao link de navegação correspondente à seção atual apenas na página inicial
  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname.endsWith("/")
  ) {
    const sections = document.querySelectorAll("section");

    function checkActiveSection() {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        // Não remove a classe active para links que já possuem a classe via HTML
        if (!link.matches(".active:not([href^='#'])")) {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
          }
        }
      });
    }

    window.addEventListener("scroll", checkActiveSection);
    checkActiveSection();
  }
});
