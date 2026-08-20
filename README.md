# 👩‍💻 Portfólio · Giovanna Marques

Meu portfólio pessoal — desenvolvedora júnior na DTIC da Polícia Militar do Acre
e estudante de Sistemas de Informação.

Site estático (HTML + CSS + JavaScript puro), sem dependências e fácil de editar.

## 🗂️ Estrutura

```
gioviana/
├── index.html      → conteúdo e seções da página
├── css/style.css   → todo o visual (cores, layout, animações)
├── js/main.js      → interações (menu, digitação, scroll)
└── assets/         → imagens/ícones (opcional)
```

## ▶️ Como ver localmente

É só abrir o `index.html` no navegador (duplo clique).
Pra recarregar sozinho quando salvar, use um servidor local:

```bash
python3 -m http.server 5500
```

Depois acesse `http://localhost:5500`.

## ✏️ O que personalizar

Tudo que é "de exemplo" está marcado pra você trocar:

- **Projetos** → em `index.html`, seção `#projetos`. Troque títulos, descrições,
  tags e os links `href="#"` pelos repositórios reais.
- **Contato** → seção `#contato`. Atualize `@seu-usuario` (GitHub) e
  `/in/seu-perfil` (LinkedIn) com seus links reais. O e-mail já está preenchido.
- **Cores** → no topo do `css/style.css`, bloco `:root`. Mude `--accent`,
  `--accent-2` e `--accent-3` pra dar a sua cara.
- **Textos da digitação** → array `roles` no início do `js/main.js`.

## 🚀 Como publicar (de graça)

### GitHub Pages
1. Suba o projeto pra um repositório no GitHub.
2. Em **Settings → Pages**, escolha a branch `main` e a pasta `/root`.
3. Pronto: seu site fica em `https://seu-usuario.github.io/nome-do-repo`.

### Netlify
1. Crie conta em [netlify.com](https://netlify.com).
2. Arraste a pasta do projeto na tela de deploy — ou conecte o repositório do GitHub.

---

Feito com ♥ e muito café. ☕
