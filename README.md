# Julio Reboques - site estático

Este repositório contém a versão do site como um projeto Vite + React. O projeto foi adaptado para ser independente de plataformas externas (ex: Lovable) e pode ser gerado como um site estático para hospedagem em servidores tradicionais ou serviços de static hosting (Netlify, Vercel, GitHub Pages, etc.).

Como gerar o build estático:

```bash
npm install
npm run build
```

O conteúdo final será produzido em `dist/` e pode ser servido por qualquer host estático.

Dicas rápidas de SEO e hosting estático:
- Garanta meta tags (title, description, og:*) em `src/pages`/componentes principais.
- Pré-renderizar páginas importantes (incluir HTML estático) melhora SEO; considere uma etapa de prerender (ou gerar HTML estático) para páginas fixas.
- Configure `robots.txt` e sitemaps para indexação (ex: `public/robots.txt`, gerar `sitemap.xml`).

Se quiser, eu posso:
- Gerar um `sitemap.xml` e atualizar `robots.txt`.
- Adicionar meta tags padrão e exemplos de SEO nos arquivos de página.
- Rodar o `npm install` e `npm run build` na sua máquina agora e reportar qualquer erro.

