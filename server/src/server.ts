import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const prisma = new PrismaClient()

app.get('hello', () => {
  return 'Hello Word'
})

app
  .listen({
    port: 33333,
  })
  .then(() => {
    console.log('HTTP server is runnin on port http://localhost:3333🚀')
  })
