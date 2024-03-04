const posts = [{
  content: 'primeiro post'
}]

export async function postsRoutes(app) {
  app.get('/posts', (request, reply) => {
    return reply.status(200).send(posts)
  })
}