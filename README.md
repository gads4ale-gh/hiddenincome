# Para Gaby

Site estático em homenagem à Gaby — feito com HTML, CSS e SVGs puros, sem dependências.

## Estrutura

```
.
├── index.html              # Página da homenagem
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/             # Logo, favicon, hero e ícones em SVG
```

## Como visualizar localmente

Basta abrir `index.html` no navegador. Para rodar via servidor local:

```sh
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Deploy (Cloudflare Pages)

Como é 100% estático:

- **Build command**: vazio
- **Deploy command**: vazio
- **Output directory**: `/`

## Arquivos do projeto antigo (podem ser removidos)

Estes ficheiros sobraram da versão anterior do site (artigos esportivos) e não são mais usados pela homenagem. Você pode apagar:

```
contato.html
politica-de-privacidade.html
termos-de-uso.html
obrigado.html
robots.txt
sitemap.xml
assets/images/product-bike.svg
assets/images/product-bola.svg
assets/images/product-halter.svg
assets/images/product-roupa.svg
assets/images/product-suplemento.svg
assets/images/product-tenis.svg
```

Comando para limpar tudo de uma vez:

```sh
git rm contato.html politica-de-privacidade.html termos-de-uso.html obrigado.html robots.txt sitemap.xml assets/images/product-*.svg
git commit -m "Remove arquivos do projeto anterior"
git push
```
