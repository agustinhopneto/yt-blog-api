import fastify from 'fastify';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty'
    }
  }
})

app.get('/', (request, reply) => {
  return reply.status(200).send({ message: 'Hello fastify' })
})

app.listen({
  host: '0.0.0.0',
  port: 4000
})