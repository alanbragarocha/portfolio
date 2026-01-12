import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return React.createElement(
    'section',
    { id: 'projetos', className: 'projects section' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement('h2', { className: 'section-title' }, 'Projetos'),
      React.createElement(
        'p',
        { className: 'section-description' },
        'Conheça alguns dos projetos que desenvolvi recentemente'
      ),
      React.createElement(
        'div',
        { className: 'projects__grid' },
        React.createElement(
          'article',
          { className: 'project-card' },
          React.createElement(
            'div',
            { className: 'project-card__image' },
            React.createElement('img', {
              src: '/images/capa-igreja.webp',
              alt: 'Prévia do projeto Igreja Presbiteriana',
            })
          ),
          React.createElement(
            'div',
            { className: 'project-card__content' },
            React.createElement(
              'h3',
              { className: 'project-card__title' },
              'Igreja Presbiteriana'
            ),
            React.createElement(
              'p',
              { className: 'project-card__description' },
              'Site responsivo em português para uma igreja presbiteriana, desenvolvido com HTML, CSS e JavaScript, com informações institucionais, agenda de cultos e localização.'
            ),
            React.createElement(
              'ul',
              { className: 'project-card__features' },
              React.createElement(
                'li',
                null,
                'Seção de figuras históricas da reforma'
              ),
              React.createElement('li', null, 'Agenda semanal de eventos'),
              React.createElement(
                'li',
                null,
                'Informações de contato e localização'
              ),
              React.createElement(
                'li',
                null,
                'Menu mobile responsivo com JavaScript'
              ),
              React.createElement(
                'li',
                null,
                'Seção de ministérios e doações com PIX'
              )
            ),
            React.createElement(
              'div',
              { className: 'project-card__actions' },
              React.createElement(
                'a',
                {
                  href: 'https://4ipbmacae.com.br/',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'btn btn--primary',
                },
                React.createElement('span', null, 'Prévia'),
                React.createElement('i', {
                  className: 'fas fa-external-link-alt',
                })
              ),
              React.createElement(
                'a',
                {
                  href: 'https://github.com/alanbragarocha/projetos/tree/main/igrejapresbiteriana-react',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'btn btn--secondary',
                },
                React.createElement('span', null, 'Repositório'),
                React.createElement('i', { className: 'fab fa-github' })
              )
            )
          )
        ),
        React.createElement(
          'article',
          { className: 'project-card' },
          React.createElement(
            'div',
            { className: 'project-card__image' },
            React.createElement('img', {
              src: '/images/suellenmarcelino.webp',
              alt: 'Prévia do projeto Salão Sellen Mrcelino',
            })
          ),
          React.createElement(
            'div',
            { className: 'project-card__content' },
            React.createElement(
              'h3',
              { className: 'project-card__title' },
              'Salão sellen marcelino'
            ),
            React.createElement(
              'p',
              { className: 'project-card__description' },
              'Site responsivo para salão de beleza desenvolvido com HTML, CSS e JavaScript, apresentando serviços, galeria de trabalhos, depoimentos de clientes e integração com WhatsApp para agendamento.'
            ),
            React.createElement(
              'ul',
              { className: 'project-card__features' },
              React.createElement(
                'li',
                null,
                'Seção de serviços: Corte, Coloração, Manicure, Tratamentos e Micropigmentação'
              ),
              React.createElement(
                'li',
                null,
                'Galeria de trabalhos realizados com imagens'
              ),
              React.createElement(
                'li',
                null,
                'Seção de depoimentos de clientes'
              ),
              React.createElement(
                'li',
                null,
                'Integração com WhatsApp para agendamento'
              ),
              React.createElement(
                'li',
                null,
                'Informações de contato e localização'
              )
            ),
            React.createElement(
              'div',
              { className: 'project-card__actions' },
              React.createElement(
                'a',
                {
                  href: 'https://suellenmarcelino.com/',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'btn btn--primary',
                },
                React.createElement('span', null, 'Prévia'),
                React.createElement('i', {
                  className: 'fas fa-external-link-alt',
                })
              ),
              React.createElement(
                'a',
                {
                  href: 'https://github.com/alanbragarocha/projetos/tree/main/salao',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'btn btn--secondary',
                },
                React.createElement('span', null, 'Repositório'),
                React.createElement('i', { className: 'fab fa-github' })
              )
            )
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'projects__more' },
        React.createElement(
          'a',
          {
            href: 'https://github.com/alanbragarocha',
            className: 'btn btn--primary',
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          React.createElement('span', null, 'Ver Todos os Projetos'),
          React.createElement('i', { className: 'fab fa-github' })
        )
      )
    )
  );
}

export default Projects;
