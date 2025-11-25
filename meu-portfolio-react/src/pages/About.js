import React, { useState, useEffect } from "react";
import useCountTime from "../hooks/useCountTime";
import useExperienceTime from "../hooks/useExperienceTime";
import "./styles/About.css";

function About() {
  const age = useCountTime("1989-08-10");
  const itExperience = useExperienceTime("2008-04-25");
  const analystExperience = useExperienceTime("2020-01-10");
  const devExperience = useExperienceTime("2023-04-25");
  const [activeAccordion, setActiveAccordion] = useState("panel1");

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // UseEffect para carregar e executar o ContaTempo.js
  useEffect(() => {
    const loadContaTempo = () => {
      function updateMonths() {
        const today = new Date();
        const elements = document.querySelectorAll(".tempo-habilidades");
        elements.forEach((element) => {
          const startDate = new Date(element.getAttribute("data-start-date"));
          const diffInMonths = Math.floor(
            (today - startDate) / (1000 * 60 * 60 * 24 * 30.44)
          ); // Aproximadamente meses
          if (diffInMonths >= 12) {
            const years = Math.floor(diffInMonths / 12);
            element.textContent = `${years} Ano${years !== 1 ? "s" : ""}`;
          } else {
            element.textContent = `${diffInMonths} Mês${
              diffInMonths !== 1 ? "es" : ""
            }`;
          }
        });
      }

      // Chamar a função inicialmente
      updateMonths();

      // Atualizar a contagem dos meses a cada 1 segundo
      const interval = setInterval(updateMonths, 1000);

      // Cleanup function para limpar o interval
      return () => clearInterval(interval);
    };

    const cleanup = loadContaTempo();

    // Cleanup quando o componente for desmontado
    return cleanup;
  }, []);

  return React.createElement(
    React.Fragment,
    null,
    // Seção Principal - Sobre Mim
    React.createElement(
      "section",
      { className: "about section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "about__layout" },
          React.createElement(
            "div",
            { className: "about__image" },
            React.createElement("img", {
              src: "/images/avatar.svg",
              alt: "Foto de Alan Braga",
              loading: "lazy",
            })
          ),
          React.createElement(
            "div",
            { className: "about__content" },
            React.createElement("h2", null, "Meu Nome é Alan."),
            React.createElement(
              "div",
              { className: "about__info" },
              React.createElement(
                "div",
                { className: "about__info-grid" },
                React.createElement(
                  "div",
                  { className: "info-item" },
                  React.createElement("h4", null, "Idade:"),
                  React.createElement(
                    "span",
                    {
                      className: "tempo-habilidades",
                      "data-start-date": "1989-08-10",
                    },
                    age + " anos"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "info-item" },
                  React.createElement("h4", null, "Trabalho:"),
                  React.createElement("span", null, "Desenvolvimento Web")
                ),
                React.createElement(
                  "div",
                  { className: "info-item" },
                  React.createElement("h4", null, "Freelance:"),
                  React.createElement("span", null, "Disponível")
                )
              ),
              // Contadores de Experiência integrados
              React.createElement(
                "div",
                { className: "about__info-grid" },
                React.createElement(
                  "div",
                  { className: "info-item" },
                  React.createElement(
                    "h4",
                    null,
                    "Experiência com Informática"
                  ),
                  React.createElement(
                    "span",
                    {
                      className: "tempo-habilidades",
                      "data-start-date": "2008-04-25",
                    },
                    itExperience + "+ Anos"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "info-item" },
                  React.createElement("h4", null, "Analista de Sistemas"),
                  React.createElement(
                    "span",
                    {
                      className: "tempo-habilidades",
                      "data-start-date": "2020-01-10",
                    },
                    analystExperience + "+ Anos"
                  )
                ),
                React.createElement(
                  "div",
                  { className: "info-item" },
                  React.createElement("h4", null, "Front-End / Back-End"),
                  React.createElement(
                    "span",
                    {
                      className: "tempo-habilidades",
                      "data-start-date": "2023-04-25",
                    },
                    devExperience + "+ Anos"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "about__actions" },
                React.createElement(
                  "button",
                  { className: "btn btn--primary" },
                  React.createElement("span", null, "Saiba mais"),
                  React.createElement("i", { className: "fas fa-user" })
                ),
                React.createElement(
                  "a",
                  {
                    href: "https://drive.google.com/u/0/uc?id=1kDRuEB2d9DBOoOLiH8dv2HFNwp8Bh6W8&export=download",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn btn--primary",
                  },
                  React.createElement("span", null, "Download CV"),
                  React.createElement("i", { className: "fas fa-download" })
                )
              )
            )
          )
        )
      )
    ),

    // Seção de História Pessoal
    React.createElement(
      "section",
      { className: "personal-story section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "personal-story__content" },
          React.createElement("h2", null, "Minha Jornada na Tecnologia"),
          React.createElement(
            "div",
            { className: "personal-story__text" },
            React.createElement(
              "p",
              null,
              "Desde a infância, sempre fui apaixonado por informática, mas meu primeiro contato profissional com a área aconteceu em 2008. A partir daí, mergulhei de vez no universo da tecnologia. Em 2020, concluí a faculdade de Análise de Sistemas, mas ainda não havia tido a chance de atuar na área."
            ),
            React.createElement(
              "p",
              null,
              "Foi durante uma imersão em conteúdos sobre tecnologia que descobri o desenvolvimento web — e isso acendeu uma nova paixão. Desde então, venho me dedicando aos estudos de linguagens de programação voltadas para a web, com o objetivo de ingressar no mercado como desenvolvedor, criar meus próprios projetos e contribuir ativamente com a comunidade de tecnologia."
            ),
            React.createElement(
              "p",
              null,
              "Atualmente, sou Desenvolvedor Front-End. Transformo linhas de código em experiências visuais e interativas, criando interfaces funcionais, modernas e elegantes. Estou em constante evolução, buscando sempre aprender novas tecnologias e linguagens que me permitam entregar soluções cada vez mais completas e inovadoras."
            )
          )
        )
      )
    ),

    // Seção de Qualificações - Separada
    React.createElement(
      "section",
      { className: "qualifications-section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "qualifications-section__title" },
          React.createElement("h2", null, "Minhas jornada"),
          React.createElement(
            "p",
            { className: "qualifications-section__subtitle" },
            "Competências técnicas e conhecimentos adquiridos ao longo da minha jornada profissional"
          )
        ),
        React.createElement(
          "div",
          { className: "qualifications-grid" },
          React.createElement(
            "div",
            { className: "qualification-card" },
            React.createElement(
              "div",
              { className: "qualification-card__icon" },
              React.createElement("i", { className: "fas fa-tools" })
            ),
            React.createElement(
              "div",
              { className: "qualification-card__content" },
              React.createElement(
                "span",
                { className: "qualification-card__year" },
                "2009 - 2012"
              ),
              React.createElement("h3", null, "Técnico Autônomo"),
              React.createElement(
                "div",
                { className: "qualification-card__institution" },
                "Freelancer"
              ),
              React.createElement(
                "p",
                { className: "qualification-card__description" },
                "Trabalho autônomo focado em montagem, manutenção de hardware e instalação de software para clientes diversos."
              ),
              React.createElement(
                "div",
                { className: "qualification-card__skills" },
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Hardware"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Montagem PC"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Software Install"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Diagnóstico"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Manutenção"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "qualification-card" },
            React.createElement(
              "div",
              { className: "qualification-card__icon" },
              React.createElement("i", { className: "fas fa-server" })
            ),
            React.createElement(
              "div",
              { className: "qualification-card__content" },
              React.createElement(
                "span",
                { className: "qualification-card__year" },
                "2013 - 2020"
              ),
              React.createElement("h3", null, "Técnico de Informática"),
              React.createElement(
                "div",
                { className: "qualification-card__institution" },
                "Setor Público"
              ),
              React.createElement(
                "p",
                { className: "qualification-card__description" },
                "Experiência sólida em manutenção de sistemas, suporte técnico e administração de redes em ambiente corporativo."
              ),
              React.createElement(
                "div",
                { className: "qualification-card__skills" },
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Windows & Linux"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Active Directory"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "DHCP & DNS"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Suporte Técnico"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Redes"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "qualification-card" },
            React.createElement(
              "div",
              { className: "qualification-card__icon" },
              React.createElement("i", { className: "fas fa-code" })
            ),
            React.createElement(
              "div",
              { className: "qualification-card__content" },
              React.createElement(
                "span",
                { className: "qualification-card__year" },
                "Atualmente"
              ),
              React.createElement("h3", null, "Front-End Development"),
              React.createElement(
                "div",
                { className: "qualification-card__institution" },
                "Desenvolvimento Web Moderno"
              ),
              React.createElement(
                "p",
                { className: "qualification-card__description" },
                "Especialização em criação de interfaces modernas, responsivas e acessíveis, utilizando as mais recentes tecnologias do mercado."
              ),
              React.createElement(
                "div",
                { className: "qualification-card__skills" },
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "HTML5 & CSS3"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "JavaScript ES6+"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "React.js"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Responsive Design"
                ),
                React.createElement(
                  "span",
                  { className: "qualification-card__skill" },
                  "Acessibilidade"
                )
              )
            )
          )
        )
      )
    ),

    // Seção de Formação e Cursos
    React.createElement(
      "section",
      { className: "about section" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "about__details" },
          React.createElement(
            "div",
            { className: "about__education-experience" },
            React.createElement(
              "div",
              { className: "education" },
              React.createElement(
                "h3",
                null,
                React.createElement("i", {
                  className: "fas fa-graduation-cap",
                }),
                " Formação Acadêmica"
              ),
              React.createElement(
                "div",
                { className: "timeline" },
                React.createElement(
                  "div",
                  { className: "timeline__item" },
                  React.createElement(
                    "span",
                    { className: "timeline__date" },
                    "2020 - 2022"
                  ),
                  React.createElement(
                    "h4",
                    null,
                    "Análise e Desenvolvimento de Sistemas"
                  ),
                  React.createElement(
                    "p",
                    null,
                    React.createElement(
                      "strong",
                      null,
                      "Universidade Estácio de Sá"
                    ),
                    " - Graduação completa com foco em desenvolvimento de software, análise de requisitos e gestão de projetos tecnológicos."
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "courses" },
              React.createElement(
                "h3",
                null,
                React.createElement("i", { className: "fas fa-laptop-code" }),
                " Cursos & Certificações"
              ),
              React.createElement(
                "div",
                { className: "accordion" },
                React.createElement(
                  "div",
                  {
                    className: `accordion__item ${
                      activeAccordion === "panel1" ? "active" : ""
                    }`,
                  },
                  React.createElement(
                    "button",
                    {
                      className: "accordion__header",
                      "aria-expanded": activeAccordion === "panel1",
                      "aria-controls": "panel1",
                      onClick: () => toggleAccordion("panel1"),
                    },
                    React.createElement("span", null, "Front-End Development"),
                    React.createElement("i", {
                      className: `fas fa-chevron-${
                        activeAccordion === "panel1" ? "up" : "down"
                      }`,
                    })
                  ),
                  React.createElement(
                    "div",
                    { id: "panel1", className: "accordion__body" },
                    React.createElement(
                      "p",
                      null,
                      React.createElement(
                        "strong",
                        null,
                        "Cursos Complementares:"
                      ),
                      " HTML5, CSS3, JavaScript ES6+, React.js, Git/GitHub, metodologias ágeis e boas práticas de desenvolvimento."
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

export default About;
