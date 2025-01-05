const express = require('express')
const routes = require('./router')

const app = express()

app.use(express.json())

app.use(routes)

const port = 3000

app.listen(port, () => {
    console.log(`Estou rodando a aplicação da loja asilStore na porta ${port}`)
})
