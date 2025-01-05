require('dotenv').config()
const express = require('express')
const routes = require('./router')

const app = express()

app.use(express.json())

app.use(routes)

const Port = process.env.Port

app.listen(Port, () => {
    console.log(`Estou rodando a aplicação da loja asilStore na porta ${Port}`)
})
