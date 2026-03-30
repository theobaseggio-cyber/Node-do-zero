# Node do Zero - API REST de Vídeos

API REST para gerenciamento de vídeos construída com Node.js e Fastify.

## Tecnologias

- Node.js
- Fastify

## Rotas da API

| Método   | Rota          | Descrição                          |
|----------|---------------|------------------------------------|
| `POST`   | `/videos`     | Criar um novo vídeo                |
| `GET`    | `/videos`     | Listar todos os vídeos             |
| `PUT`    | `/videos/:id` | Atualizar um vídeo pelo ID         |
| `DELETE` | `/videos/:id` | Deletar um vídeo pelo ID           |

### Buscar vídeos por título

```
GET /videos?search=termo
```

### Body (POST e PUT)

```json
{
  "title": "Título do vídeo",
  "description": "Descrição do vídeo",
  "duration": 120
}
```

## Como rodar

```bash
npm install
npm start
```

O servidor vai iniciar em (http://[::1]:3333)
