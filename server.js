import fastify from 'fastify'
import { DatabaseMemory } from './database-memory.js'
import staticPlugin from '@fastify/static'
import cors from '@fastify/cors'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const server = fastify()

await server.register(cors)
await server.register(staticPlugin, { root: __dirname, prefix: '/' })

const database = new DatabaseMemory()

server.get('/', (req, reply) => {
  return reply.redirect('/index.html')
})

server.post('/videos', (req, reply) => {
  const { title, description, duration } = req.body
  database.create({ title, description, duration })
  return reply.status(201).send()
})

server.get('/videos', (req, reply) => {
  const { search } = req.query
  const videos = database.list(search)
  return reply.send(videos)
})

server.put('/videos/:id', (req, reply) => {
  const { id } = req.params
  const { title, description, duration } = req.body
  database.update(id, { title, description, duration })
  return reply.status(204).send()
})

server.delete('/videos/:id', (req, reply) => {
  const { id } = req.params
  database.delete(id)
  return reply.status(204).send()
})

server.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`✅ Servidor rodando em ${address}`)
})

