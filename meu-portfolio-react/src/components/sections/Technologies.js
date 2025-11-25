import React from "react";
import "../styles/Technologies.css";

function Technologies() {
  return React.createElement(
    "section",
    { className: "technologies section", id: "technologias" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("h2", { className: "section-title" }, "Tecnologias"),
      React.createElement(
        "p",
        { className: "section-description" },
        "Conhecimento nas principais tecnologias do mercado de desenvolvimento web"
      ),
      React.createElement(
        "div",
        { className: "tech-grid" },
        React.createElement(
          "div",
          { className: "tech-card", "data-tech": "HTML" },
          React.createElement("img", {
            src: "/images/technologies/Html.svg",
            alt: "HTML",
          }),
          React.createElement("span", { className: "tech-name" }, "HTML")
        ),
        React.createElement(
          "div",
          { className: "tech-card", "data-tech": "CSS" },
          React.createElement("img", {
            src: "/images/technologies/css3.svg",
            alt: "CSS",
          }),
          React.createElement("span", { className: "tech-name" }, "CSS")
        ),
        React.createElement(
          "div",
          { className: "tech-card", "data-tech": "JavaScript" },
          React.createElement("img", {
            src: "/images/technologies/Js.svg",
            alt: "JavaScript",
          }),
          React.createElement("span", { className: "tech-name" }, "JavaScript")
        ),
        React.createElement(
          "div",
          { className: "tech-card", "data-tech": "Node.js" },
          React.createElement("img", {
            src: "/images/technologies/node.svg",
            alt: "Node.js",
          }),
          React.createElement("span", { className: "tech-name" }, "Node.js")
        ),
        React.createElement(
          "div",
          { className: "tech-card", "data-tech": "React" },
          React.createElement("img", {
            src: "/images/technologies/react.svg",
            alt: "React",
          }),
          React.createElement("span", { className: "tech-name" }, "React")
        )
      )
    )
  );
}

export default Technologies;
