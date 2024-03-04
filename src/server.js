import fastify from 'fastify';

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty'
    }
  }
})

app.log.error('Deu ruim aqui!')

app.listen({
  host: '0.0.0.0',
  port: 4000
})