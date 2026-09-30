<div align="center">

# 📰 Blog API with Fastify

**Your first API with Fastify: posts, comments and likes.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)

[![YouTube](https://img.shields.io/badge/Watch_on_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=6ZgAd8wt-V0)
[![DevClub PRO](https://img.shields.io/badge/Channel-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO)

</div>

---

## 🎬 Video

This repository accompanies a video from the **[DevClub PRO](https://www.youtube.com/@DevClubPRO)** channel:

<div align="center">

<a href="https://www.youtube.com/watch?v=6ZgAd8wt-V0" title="How to Build Your First Fastify API (Complete Guide)">
  <img src="https://img.youtube.com/vi/6ZgAd8wt-V0/maxresdefault.jpg" alt="How to Build Your First Fastify API (Complete Guide)" width="720" />
</a>

**▶️ [How to Build Your First Fastify API (Complete Guide)](https://www.youtube.com/watch?v=6ZgAd8wt-V0)**

<sub>🇧🇷 The video is in Brazilian Portuguese.</sub>

</div>

## 📖 About

A blog API built with **Fastify** using in-memory storage. It covers the framework’s core concepts: routes, plugins, hooks (`onRequest`) and logging with `pino-pretty`.

## 🎯 What you’ll learn

- Create a Fastify server and configure the logger with `pino-pretty`
- Organize routes into plugins with `app.register`
- Use `onRequest` hooks as authentication middleware
- Work with params, body and status codes

## ✅ Requirements

- [x] Users can list posts
- [x] Users can create a post
- [x] Users can comment on a post
- [x] Users can like a post
- [x] Users can delete a post (owner only)

## 📡 Endpoints

> Every route requires the `Authorization: token` header.

| Method | Route | Body | Description |
|---|---|---|---|
| `GET` | `/posts` | | List posts |
| `POST` | `/posts` | `{ username, title, content }` | Create a post |
| `POST` | `/posts/:id/comment` | `{ username, content }` | Comment on a post |
| `PATCH` | `/posts/:id/like` | `{ username }` | Like or unlike a post |
| `DELETE` | `/posts/:id` | `{ username }` | Delete a post (owner only) |

## 🚀 Getting started

> Prerequisite: [Node.js](https://nodejs.org/) 18+

```bash
# 1. Clone the repository
git clone https://github.com/agustinhopneto/yt-blog-api.git
cd yt-blog-api

# 2. Install the dependencies
npm install

# 3. Start the server
npm run dev
```

Open **http://localhost:4000** 🎉

## 🛠️ Tech stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)

---

<div align="center">

Enjoyed it? Leave a ⭐ on the repo and subscribe to the channel!

[![Subscribe](https://img.shields.io/badge/Subscribe-DevClub_PRO-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevClubPRO?sub_confirmation=1)

Made with 💙 by **[Agustinho Neto](https://github.com/agustinhopneto)**

</div>
