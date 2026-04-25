# Esporte em Foco — Landing Page

Landing page estática em HTML/CSS/JS puro, pronta para divulgação no Google Ads, promovendo um site de artigos esportivos com programa de afiliados.

## Estrutura

```
.
├── index.html                     # Landing page principal
├── contato.html                   # Página de contato
├── politica-de-privacidade.html   # Política de Privacidade (LGPD)
├── termos-de-uso.html             # Termos de Uso
├── obrigado.html                  # Página de conversão (pós-cadastro)
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/                    # Imagens vetoriais (SVG)
```

## Como visualizar localmente

Abra `index.html` direto no navegador, ou rode um servidor local:

```sh
# Python 3
python3 -m http.server 8000
# depois acesse http://localhost:8000

# ou Node
npx serve .
```

## Hospedagem (sugestões gratuitas)

- **GitHub Pages**: faça push para um repositório público e ative Pages em Settings → Pages → Source: `main` / root.
- **Netlify**: arraste a pasta na interface drop-and-deploy ou conecte ao repositório.
- **Vercel**: `vercel deploy` ou import via dashboard.
- **Cloudflare Pages**: conecte ao repositório e selecione build "None / Static HTML".

## Personalização rápida

1. **Marca**: substitua "Esporte em Foco" no `index.html` e demais páginas, e troque `assets/images/logo.svg` se quiser um logo próprio.
2. **Domínio e e-mail**: troque `contato@esporteemfoco.com.br` em todas as páginas pelo seu e-mail real.
3. **Links de afiliado**: nos botões "Ver opções" dentro dos cards de produto (`index.html`), substitua `href="#contato"` pelo seu link de afiliado da loja parceira (Amazon, Centauro, Netshoes, Magalu Hotmart, etc.).
4. **Pixel/Tag**: para acompanhar conversões no Google Ads, cole a tag global (gtag.js) e o snippet de conversão antes de `</head>` em `index.html` e em `obrigado.html`. A página `obrigado.html` já está marcada como `noindex` e funciona como página de conversão.
5. **E-mail marketing**: hoje o formulário redireciona para `obrigado.html`. Se quiser capturar leads, conecte o `<form>` a um serviço (Mailchimp, RD Station, ConvertKit, Formspree etc.) trocando o `action` do form ou ajustando o handler em `assets/js/main.js`.

## Checklist Google Ads

- [x] Política de Privacidade visível no rodapé
- [x] Termos de Uso visíveis no rodapé
- [x] Página de Contato com e-mail funcional
- [x] Aviso explícito de programa de afiliados
- [x] Site responsivo (mobile, tablet, desktop)
- [x] Meta description e meta tags Open Graph
- [x] Sitemap.xml e robots.txt
- [x] Carregamento rápido (sem dependências externas, imagens em SVG)
- [ ] Substituir e-mail/marca/links pelos seus reais
- [ ] Adicionar tag de conversão do Google Ads
- [ ] Hospedar em domínio próprio com HTTPS

## Sobre o conteúdo

O texto evita promessas exageradas de ganho rápido, foca em uma proposta de valor honesta (curadoria de produtos esportivos) e declara abertamente a relação de afiliação — três pontos importantes para aprovação rápida no Google Ads.
