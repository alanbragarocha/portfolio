import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "emailjs-826";
    const templateId = "__ejs-test-mail-service__";
    const publicKey = "QLUG1nFsLHxpPmQHf";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("Email enviado com sucesso!", result.text);
        setFormStatus({
          submitted: true,
          success: true,
          message: "Mensagem enviada com sucesso! Retornarei em breve.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setIsSubmitting(false);
      },
      (error) => {
        console.error("Erro ao enviar email:", error.text);
        setFormStatus({
          submitted: true,
          success: false,
          message:
            "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        });
        setIsSubmitting(false);
      }
    );
  };

  return React.createElement(
    "section",
    { id: "contato", className: "contact section" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement("h2", { className: "section-title" }, "Contato"),
      React.createElement(
        "p",
        { className: "section-description" },
        "Estou disponível para serviços e novas conexões. Entre em contato!"
      ),
      React.createElement(
        "div",
        { className: "contact__layout" },
        React.createElement(
          "div",
          { className: "contact__info" },
          React.createElement(
            "div",
            { className: "contact__grid" },
            React.createElement(
              "div",
              { className: "contact-item" },
              React.createElement("i", { className: "fas fa-envelope" }),
              React.createElement(
                "div",
                null,
                React.createElement("h3", null, "Email"),
                React.createElement(
                  "a",
                  { href: "mailto:alanbragarocha@gmail.com" },
                  "alanbragarocha@gmail.com"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "contact-item" },
              React.createElement("i", { className: "fas fa-map-marker-alt" }),
              React.createElement(
                "div",
                null,
                React.createElement("h3", null, "Localização"),
                React.createElement(
                  "p",
                  null,
                  "Conceição de Macabu, RJ - Brasil"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "contact-item" },
              React.createElement("i", { className: "fas fa-briefcase" }),
              React.createElement(
                "div",
                null,
                React.createElement("h3", null, "Trabalho"),
                React.createElement("p", null, "Disponível para projetos")
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "contact__form-container" },
          React.createElement(
            "h3",
            { className: "form-title" },
            "Envie uma mensagem"
          ),
          formStatus.submitted &&
            React.createElement(
              "div",
              {
                className: `form-message ${
                  formStatus.success ? "success" : "error"
                }`,
              },
              formStatus.message
            ),
          React.createElement(
            "form",
            { ref: form, className: "contact-form", onSubmit: handleSubmit },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", { htmlFor: "name" }, "Nome"),
              React.createElement("input", {
                type: "text",
                id: "name",
                name: "name",
                value: formData.name,
                onChange: handleChange,
                placeholder: "Seu nome",
                required: true,
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", { htmlFor: "email" }, "Email"),
              React.createElement("input", {
                type: "email",
                id: "email",
                name: "email",
                value: formData.email,
                onChange: handleChange,
                placeholder: "Seu email",
                required: true,
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", { htmlFor: "subject" }, "Assunto"),
              React.createElement("input", {
                type: "text",
                id: "subject",
                name: "subject",
                value: formData.subject,
                onChange: handleChange,
                placeholder: "Assunto da mensagem",
                required: true,
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("label", { htmlFor: "message" }, "Mensagem"),
              React.createElement("textarea", {
                id: "message",
                name: "message",
                value: formData.message,
                onChange: handleChange,
                placeholder: "Digite sua mensagem aqui...",
                rows: "5",
                required: true,
              })
            ),
            React.createElement(
              "button",
              {
                type: "submit",
                className: "btn btn-primary",
                disabled: isSubmitting,
              },
              isSubmitting
                ? [
                    React.createElement("i", {
                      className: "fas fa-spinner fa-spin",
                      key: "spinner",
                    }),
                    " Enviando...",
                  ]
                : "Enviar Mensagem"
            )
          )
        )
      )
    )
  );
}

export default Contact;
