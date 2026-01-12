import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return React.createElement(
    'section',
    { id: 'contato', className: 'contact section' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement('h2', { className: 'section-title' }, 'Contato'),
      React.createElement(
        'p',
        { className: 'section-description' },
        'Estou disponível para serviços e novas conexões. Entre em contato!'
      ),
      React.createElement(
        'div',
        { className: 'contact__layout' },
        React.createElement(
          'div',
          { className: 'contact__info' },
          React.createElement(
            'div',
            { className: 'contact__grid' },
            React.createElement(
              'div',
              { className: 'contact-item' },
              React.createElement('i', { className: 'fas fa-envelope' }),
              React.createElement(
                'div',
                null,
                React.createElement('h3', null, 'Email'),
                React.createElement(
                  'a',
                  { href: 'mailto:alanbragarocha@gmail.com' },
                  'alanbragarocha@gmail.com'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'contact-item' },
              React.createElement('i', { className: 'fas fa-map-marker-alt' }),
              React.createElement(
                'div',
                null,
                React.createElement('h3', null, 'Localização'),
                React.createElement(
                  'p',
                  null,
                  'Conceição de Macabu, RJ - Brasil'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'contact-item' },
              React.createElement('i', { className: 'fas fa-briefcase' }),
              React.createElement(
                'div',
                null,
                React.createElement('h3', null, 'Trabalho'),
                React.createElement('p', null, 'Disponível para projetos')
              )
            )
          )
        )
      )
    )
  );
}

export default Contact;
