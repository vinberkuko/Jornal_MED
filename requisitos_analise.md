# Análise de Requisitos - Jornal_MED

## Requisitos Técnicos
- **Plataforma**: Jekyll via Termux para GitHub Pages
- **Repositório**: vinberkuko/Jornal_MED
- **Tema**: Personalizado (sem usar temas pré-prontos)

## Estrutura de Pastas
- **_includes/**: Componentes reutilizáveis (header, footer, etc.)
- **_layouts/**: Templates para diferentes tipos de páginas
  - default.html: Layout base
  - home.html: Página inicial
  - section.html: Página de seção
  - post.html: Página de notícia individual
- **_posts/**: Arquivos de conteúdo em Markdown (YYYY-MM-DD-titulo-noticia.md)
- **_sass/**: Arquivos de estilo específicos
  - _home.scss: Estilo da página inicial
  - _section.scss: Estilo das páginas de seção
  - _post.scss: Estilo das páginas de notícias
- **assets/**: Recursos estáticos
  - css/main.scss: Arquivo principal de estilos
  - js/: Scripts para animações
  - images/: Logos, banners e imagens

## Design e Estilo
- **Cores Oficiais**:
  - Verde: #2ecc71 (principal)
  - Amarelo: #f1c40f (destaques)
  - Azul Anil: #34495e (textos e fundos)
- **Layout**: Fluído e responsivo usando Grid CSS ou Flexbox
- **Animações**: Sutis em hover (transições de cores, fade-in)
- **Estilos Específicos**:
  - Homepage: Destaque para notícia principal em card grande
  - Seções: Lista de notícias filtradas por categoria
  - Posts: Estilo clean para leitura

## Funcionalidades Jekyll
- **Destaque na Homepage**: Configuração via _config.yml para definir notícia em destaque
- **Seções Automáticas**: Páginas que listam posts por categoria
- **Páginas de Notícia**: Geração automática de páginas HTML para cada post

## Extras
- Botão "Voltar ao Topo" animado
- Favicon com logo do jornal
- Meta tags para SEO básico

## Considerações para Implementação
- Necessário adaptar comandos para ambiente não-Termux (estamos usando Ubuntu)
- Focar em design sério e profissional
- Garantir responsividade para diferentes dispositivos
- Implementar animações sutis sem prejudicar desempenho
