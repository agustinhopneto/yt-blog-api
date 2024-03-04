import { isAuth } from '../middlewares/is-auth.js'

const posts = [{
  content: 'primeiro post'
}]

export async function postsRoutes(app) {
  app.get('/posts', { onRequest: [isAuth] }, (request, reply) => {
    return reply.status(200).send(posts)
  })
}