<div align="center">

# 📰 Blog API com Fastify

**Sua primeira API com Fastify: posts, comentários e likes.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)

[![YouTube](https://img.shields.io/badge/Assista_no_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=6ZgAd8wt-V0)
[![DevClub PRO](https://img.shields.io/badge/Canal-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Vídeo

Este repositório acompanha o vídeo do canal **[DevClub PRO](https://www.youtube.com/@DevClubPRO)**:

<div align="center">

<a href="https://www.youtube.com/watch?v=6ZgAd8wt-V0" title="Como construir sua primeira API Fastify (Guia Completo)">
  <img src="https://img.youtube.com/vi/6ZgAd8wt-V0/maxresdefault.jpg" alt="Como construir sua primeira API Fastify (Guia Completo)" width="720" />
</a>

**▶️ [Como construir sua primeira API Fastify (Guia Completo)](https://www.youtube.com/watch?v=6ZgAd8wt-V0)**

</div>

## 📖 Sobre

Uma API de blog construída com **Fastify**, usando armazenamento em memória. Ela cobre os conceitos essenciais do framework: rotas, plugins, hooks (`onRequest`) e logs com `pino-pretty`.

## 🎯 O que você vai aprender

- Criar um servidor Fastify e configurar o logger com `pino-pretty`
- Organizar rotas em plugins com `app.register`
- Usar hooks `onRequest` como middleware de autenticação
- Trabalhar com params, body e status codes

## ✅ Requisitos

- [x] O usuário deve poder listar os posts
- [x] O usuário deve poder criar um post
- [x] O usuário deve poder comentar um post
- [x] O usuário deve poder dar like em um post
- [x] O usuário deve poder excluir um post (somente o dono)

## 📡 Endpoints

> Todas as rotas exigem o header `Authorization: token`.

| Método | Rota | Body | Descrição |
|---|---|---|---|
| `GET` | `/posts` | | Lista os posts |
| `POST` | `/posts` | `{ username, title, content }` | Cria um post |
| `POST` | `/posts/:id/comment` | `{ username, content }` | Comenta um post |
| `PATCH` | `/posts/:id/like` | `{ username }` | Dá ou remove um like |
| `DELETE` | `/posts/:id` | `{ username }` | Exclui o post (somente o dono) |

## 🚀 Como rodar

> Pré-requisito: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone o repositório
git clone https://github.com/agustinhopneto/yt-blog-api.git
cd yt-blog-api

# 2. Instale as dependências
npm install

# 3. Rode o servidor
npm run dev
```

Acesse **http://localhost:4000** 🎉

## 🛠️ Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)

---

<div align="center">

Curtiu? Deixa um ⭐ no repositório e se inscreva no canal!

[![Inscreva-se](https://img.shields.io/badge/Inscreva--se-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Feito com 💙 por **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
