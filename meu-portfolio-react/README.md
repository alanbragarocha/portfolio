# 🚀 Portfólio React

Um portfólio moderno e responsivo desenvolvido com React, apresentando minhas habilidades, projetos e informações de contato de forma elegante e interativa.

## ✨ Funcionalidades

- 🎨 **Design Moderno**: Interface limpa e responsiva
- 🌙 **Tema Escuro/Claro**: Alternância entre temas para melhor experiência do usuário
- 📱 **Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- 🔄 **SPA (Single Page Application)**: Navegação suave com React Router
- 📧 **Formulário de Contato**: Integração com EmailJS para envio de mensagens
- ⚡ **Performance Otimizada**: Carregamento rápido e eficiente
- 🎯 **Navegação por Âncoras**: Links diretos para seções específicas

## 🛠️ Tecnologias Utilizadas

- **React** 18.2.0 - Biblioteca JavaScript para construção da interface
- **React Router DOM** 6.14.0 - Roteamento e navegação
- **EmailJS** 4.4.1 - Serviço de envio de emails
- **Date-fns** 4.1.0 - Manipulação e formatação de datas
- **CSS3** - Estilização customizada e responsiva
- **HTML5** - Estrutura semântica

## 📁 Estrutura do Projeto

```text
src/
├── components/           # Componentes reutilizáveis
│   ├── Header.js        # Cabeçalho com navegação
│   ├── Footer.js        # Rodapé
│   ├── ThemeToggle.js   # Alternador de tema
│   ├── sections/        # Seções da página
│   │   ├── Contact.js   # Seção de contato
│   │   ├── Projects.js  # Portfólio de projetos
│   │   └── Technologies.js # Tecnologias conhecidas
│   └── styles/          # Estilos dos componentes
├── pages/               # Páginas principais
│   ├── Home.js         # Página inicial
│   ├── About.js        # Página sobre mim
│   └── styles/         # Estilos das páginas
├── hooks/              # Hooks customizados
│   ├── useCountTime.js # Hook para contagem de tempo
│   └── useExperienceTime.js # Hook para calcular experiência
├── assets/             # Recursos estáticos
│   └── images/         # Imagens e ícones
└── styles/             # Estilos globais
    ├── main.css        # Estilos principais
    ├── variables.css   # Variáveis CSS
    └── components.css  # Estilos de componentes
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**

   ```bash
   git clone <url-do-repositorio>
   cd react_portfolio_
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute o projeto**

   ```bash
   npm start
   ```

4. **Acesse no navegador**

   ```text
   http://localhost:3000
   ```

## 📦 Scripts Disponíveis

- `npm start` - Executa o app em modo de desenvolvimento
- `npm run build` - Cria uma versão otimizada para produção
- `npm test` - Executa os testes
- `npm run eject` - Remove a abstração do Create React App (⚠️ irreversível)

## 🎨 Seções do Portfólio

### 🏠 Home

- Apresentação pessoal
- Links para redes sociais
- Navegação para outras seções

### 👨‍💻 Sobre Mim

- Informações pessoais e profissionais
- Trajetória e experiências
- Objetivos e aspirações

### 🛠️ Tecnologias

- Stack de desenvolvimento
- Ferramentas e frameworks
- Nível de proficiência

### 💼 Projetos

- Portfólio de trabalhos realizados
- Descrições detalhadas
- Links para repositórios e demos

### 📞 Contato

- Formulário de contato funcional
- Informações para contato direto
- Links para redes sociais profissionais

## 🎯 Funcionalidades Especiais

### Tema Escuro/Claro

O portfólio inclui um alternador de tema que permite aos usuários escolher entre modo claro e escuro, melhorando a experiência de visualização em diferentes condições de luz.

### Formulário de Contato

Integração com EmailJS permite que visitantes enviem mensagens diretamente através do site, sem necessidade de abrir um cliente de email.

### Navegação Suave

Implementação de scroll suave para navegação entre seções e páginas, proporcionando uma experiência fluida ao usuário.

### Hooks Customizados

- `useCountTime`: Calcula tempo decorrido desde uma data específica
- `useExperienceTime`: Gerencia cálculos relacionados ao tempo de experiência

## 🌐 Deploy

Para fazer deploy do projeto:

1. **Build de produção**

   ```bash
   npm run build
   ```

2. **Deploy para serviços como:**
   - Vercel
   - Netlify
   - GitHub Pages
   - Firebase Hosting

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!