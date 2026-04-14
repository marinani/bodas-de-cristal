# 💎 Bodas de Cristal - Landing Page Comemorativa

Uma landing page elegante e interativa criada para celebrar 3 anos de amor, desenvolvida com HTML, CSS e JavaScript vanilla.

## 📝 Sobre o Projeto

Esta é uma página comemorativa especial que celebra três anos de relacionamento entre Mariane e Jenny. O design foi inspirado no conceito de "Bodas de Cristal", utilizando elementos visuais cristalinos, animações sutis e uma paleta de cores azul e escuro para criar uma experiência visual única e memorável.

## ✨ Funcionalidades

### 🎨 Design e Estética
- **Tema Cristalino**: Ícones de diamante e elementos visuais que remetem a cristais
- **Animação de Fundo**: Cristais caindo continuamente com animação suave
- **Paleta de Cores Elegante**: Tons de azul neon (#1e64ff) sobre fundo escuro (#02040a)
- **Tipografia Sofisticada**: Combinação de Playfair Display (serif) e Inter (sans-serif)
- **Efeitos Glassmorphism**: Cards com fundo translúcido e blur backdrop

### 📅 Linha do Tempo Interativa
- Timeline vertical com eventos cronológicos de 2023 a 2026
- Cards alternados (esquerda/direita) para melhor visualização
- Efeitos hover com animação de elevação
- Nós decorativos com ícones de diamante

### 🖼️ Carrossel de Imagens
- Navegação por setas (anterior/próxima)
- Indicadores de slide (bolinhas clicáveis)
- Legendas personalizadas para cada imagem
- **Modal de Visualização**: Clique nas imagens para exibir em tamanho completo
  - Imagem sem cortes (object-fit: contain)
  - Fecha ao clicar no X, fora da imagem ou pressionar ESC
  - Animação suave de zoom ao abrir

### 💭 Cards de Reflexão
- Três seções especiais com mensagens personalizadas
- Estilo de citação com aspas decorativas
- Texto em itálico centralizado
- Distribuídos estrategicamente entre as seções

### 📱 Design Responsivo
- Layout adaptável para desktop, tablet e mobile
- Timeline se reorganiza em telas menores
- Carrossel otimizado para touch
- Tipografia e espaçamentos ajustados por breakpoint

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: 
  - Variáveis CSS (Custom Properties)
  - Flexbox para layouts
  - Animações e transições
  - Media Queries para responsividade
  - Backdrop-filter para efeitos de blur
  - Clip-path para formas de cristal
- **JavaScript Vanilla**:
  - Manipulação do DOM
  - Event Listeners
  - Animações dinâmicas de cristais
  - Lógica de carrossel
  - Sistema de modal

## 📁 Estrutura do Projeto

```
bodas-de-cristal/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Todos os estilos e animações
├── script.js           # Funcionalidades JavaScript
├── README.md           # Documentação do projeto
│
└── assets/
    └── images/
        ├── 2023.jpeg   # Foto do ano 2023
        ├── 2024.jpeg   # Foto do ano 2024
        ├── 2025.jpeg   # Foto do ano 2025
        └── 2026.jpeg   # Foto do ano 2026
```

## 🚀 Como Usar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/bodas-de-cristal.git
   cd bodas-de-cristal
   ```

2. **Adicione suas imagens**
   - Coloque suas fotos na pasta `assets/images/`
   - Nomeie-as como: `2023.jpeg`, `2024.jpeg`, `2025.jpeg`, `2026.jpeg`
   - Ou atualize os caminhos no arquivo `index.html`

3. **Personalize o conteúdo**
   - Edite os textos em `index.html`
   - Ajuste as datas e mensagens conforme necessário
   - Modifique as cores em `styles.css` (variáveis CSS no `:root`)

4. **Abra no navegador**
   - Simplesmente abra o arquivo `index.html` em seu navegador
   - Ou use um servidor local:
     ```bash
     # Com Python 3
     python -m http.server 8000
     
     # Com Node.js (npx)
     npx serve
     ```

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --bg-color: #02040a;           /* Cor de fundo principal */
    --card-bg: rgba(6, 12, 25, 0.7); /* Fundo dos cards */
    --primary-blue: #1e64ff;        /* Cor principal (azul) */
    --text-light: #c9d1d9;          /* Cor do texto claro */
    --text-white: #ffffff;          /* Cor do texto branco */
}
```

### Fontes
As fontes são carregadas do Google Fonts. Para mudar:
1. Escolha novas fontes em [fonts.google.com](https://fonts.google.com)
2. Substitua o link no `<head>` do `index.html`
3. Atualize as variáveis `--font-serif` e `--font-sans` no CSS

### Animações
Ajuste a velocidade e quantidade de cristais em `script.js`:
```javascript
// Intervalo entre criação de cristais (ms)
setInterval(createCrystal, 300);

// Duração da animação de queda
crystal.style.animationDuration = Math.random() * 5 + 4 + 's';
```

## 📊 Seções da Página

1. **Header**: Título principal com data e subtítulo
2. **Timeline**: Linha do tempo com 4 eventos principais
3. **Reflection Card 1**: Primeira mensagem personalizada
4. **Carrossel**: Galeria de 4 imagens com legendas e modal
5. **Reflection Cards 2 e 3**: Mensagens adicionais
6. **Mensagem Final**: Card especial com dedicatória
7. **Footer**: Assinatura e créditos

## 🌟 Recursos Especiais

- **Animação de Cristais**: Elementos caindo continuamente no fundo
- **Modal de Imagens**: Visualização em tela cheia
- **Indicadores Interativos**: Navegação facilitada no carrossel
- **Efeitos Hover**: Feedback visual ao passar o mouse
- **Glassmorphism**: Efeito de vidro fosco nos cards

## 📱 Compatibilidade

- ✅ Chrome/Edge (versões recentes)
- ✅ Firefox (versões recentes)
- ✅ Safari (versões recentes)
- ✅ Mobile (iOS/Android)

## 📄 Licença

Este projeto foi criado para uso pessoal. Sinta-se livre para usar como inspiração para seus próprios projetos comemorativos.

## 💝 Créditos

Desenvolvido com 💎 e muito amor por Mariane para Jenny.

---

**Data de Criação**: Abril de 2026  
**Versão**: 1.0.0  
**Celebrando**: 3 Anos de Amor 💎
