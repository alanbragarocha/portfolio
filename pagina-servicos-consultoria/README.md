# ConsultPro - Página de Serviços de Consultoria

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## 📋 Sobre o Projeto

O **ConsultPro** é um site responsivo e moderno desenvolvido para uma empresa de consultoria especializada. O projeto apresenta os serviços oferecidos pela empresa, informações sobre a equipe e um sistema de contato integrado.

### 🎯 Objetivo

Criar uma presença digital profissional e atrativa que:

- Apresente os serviços de consultoria de forma clara e persuasiva
- Ofereça uma experiência de usuário otimizada em todos os dispositivos
- Facilite o contato entre clientes potenciais e a empresa
- Demonstre a expertise e credibilidade da ConsultPro

## 🚀 Funcionalidades

### ✨ Características Principais

- **Design Responsivo**: Adaptação perfeita para desktop, tablet e mobile
- **Menu Hamburger**: Navegação otimizada para dispositivos móveis
- **Seções Interativas**: Apresentação detalhada de cada serviço
- **Formulário de Contato**: Sistema de comunicação direta com clientes
- **SEO Otimizado**: Meta tags e estrutura preparada para motores de busca
- **Performance**: Carregamento rápido e otimizado

### 📱 Páginas Incluídas

1. **Home (`index.html`)**

   - Hero section com chamada principal
   - Visão geral dos serviços
   - Seção sobre a empresa
   - Depoimentos de clientes
   - Call-to-action para contato

2. **Serviços (`servicos.html`)**

   - Consultoria Estratégica
   - Gestão de Pessoas
   - Otimização de Processos
   - Marketing e Vendas
   - Transformação Digital

3. **Sobre Nós (`sobre.html`)**

   - História da empresa
   - Missão, visão e valores
   - Equipe de profissionais
   - Experiência no mercado

4. **Contato (`contato.html`)**
   - Formulário de contato
   - Informações de localização
   - Dados para contato direto
   - Mapa integrado

## 🛠️ Tecnologias Utilizadas

### Frontend

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilização moderna com Flexbox e Grid
- **JavaScript ES6+**: Interatividade e funcionalidades dinâmicas

### Bibliotecas e Recursos

- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia (Montserrat e Poppins)
- **CSS Custom Properties**: Variáveis CSS para consistência
- **CSS Grid & Flexbox**: Layout responsivo moderno

### Otimizações

- **Meta Tags SEO**: Otimização para motores de busca
- **Open Graph**: Compartilhamento em redes sociais
- **Favicon**: Ícones para navegadores
- **Permissions Policy**: Políticas de segurança

## 📁 Estrutura do Projeto

```text
pagina-servicos-consultoria/
│
├── assets/                     # Recursos estáticos
│   ├── icones/                # Ícones sociais
│   │   ├── facebook.png
│   │   ├── instagram.png
│   │   └── whatsapp.svg
│   ├── imagems/               # Imagens do site
│   │   ├── consultores-com-experiência.jpg
│   │   ├── gestao-de-pessoas.jpg
│   │   ├── hero.jpg
│   │   ├── marketing-e-vendas.jpg
│   │   ├── otimização-de-processos.jpg
│   │   ├── sobre.jpg
│   │   └── transformação-digital.jpg
│   ├── favicon.ico            # Favicon principal
│   └── favicon.svg            # Favicon vetorial
│
├── css/                       # Arquivos de estilo
│   ├── root.css              # Variáveis e estilos globais
│   ├── index.css             # Estilos da página inicial
│   ├── servicos.css          # Estilos da página de serviços
│   ├── contato.css           # Estilos da página de contato
│   └── styles.css            # Estilos complementares
│
├── js/                        # Scripts JavaScript
│   ├── depoimentos-slider.js  # Slider de depoimentos
│   └── sobre-script.js        # Scripts da página sobre
│
├── index.html                 # Página inicial
├── servicos.html             # Página de serviços
├── sobre.html                # Página sobre a empresa
├── contato.html              # Página de contato
├── script.js                 # Script principal
├── servicos-script.js        # Script específico de serviços
└── README.md                 # Documentação do projeto
```

## 🎨 Paleta de Cores

O projeto utiliza uma paleta de cores moderna e profissional:

- **Primária**: `#9a0036` (Vermelho bordô)
- **Secundária**: `#ff6b35` (Laranja vibrante)
- **Destaque**: `#c70039` (Vermelho intenso)
- **Sucesso**: `#ff9a3c` (Laranja claro)
- **Alerta**: `#ffbe0b` (Amarelo dourado)
- **Texto**: `#2d3142` (Cinza escuro)
- **Fundo**: `#ffffff` (Branco)

## 🔧 Como Usar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, para desenvolvimento)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/seu-usuario/pagina-servicos-consultoria.git
   ```

2. **Navegue até o diretório**

   ```bash
   cd pagina-servicos-consultoria
   ```

3. **Abra no navegador**
   - Abra o arquivo `index.html` diretamente no navegador
   - Ou use um servidor local como Live Server (VS Code)

### Desenvolvimento Local

Para desenvolvimento, recomenda-se usar um servidor local:

```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server

# Usando PHP
php -S localhost:8000
```

Acesse: `http://localhost:8000`

## 📱 Responsividade

O site é totalmente responsivo com breakpoints otimizados:

- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

### Funcionalidades Mobile

- Menu hamburger funcional
- Layout adaptativo
- Imagens otimizadas
- Touch-friendly buttons
- Performance otimizada

## 🔍 SEO e Performance

### Otimizações Implementadas

- **Meta Tags**: Descrição, palavras-chave e Open Graph
- **Schema Markup**: Estrutura de dados para motores de busca
- **Sitemap**: Mapeamento das páginas
- **Favicon**: Múltiplos formatos de ícone
- **Canonical URLs**: URLs canônicas para evitar conteúdo duplicado

### Performance

- **CSS**: Minificação e organização modular
- **JavaScript**: Código otimizado e lazy loading
- **Imagens**: Formatos otimizados e dimensionamento adequado
- **Fonts**: Carregamento assíncrono do Google Fonts

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Padrões de Código

- Use indentação de 2 espaços
- Siga as convenções de nomenclatura existentes
- Adicione comentários quando necessário
- Teste em múltiplos navegadores

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autor

Alan Braga
