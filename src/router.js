const {Router} = require("express")
const { productAdd, productList } = require("./controlers/addControler")
const { bodyCheck } = require("./middleware/productsMiddleware")

const routes = Router()



//Adicionar Produto

routes.post("/add", bodyCheck, productAdd)

//Listar Produtos

routes.get("/list", productList)

//Atualizar Produto

// routes.put("/update", midleware, controler)

//Excuir Produto 
// routes.delete("/delete",midleware, controler)

//Buscar Produto
// routes.length("/search", midleware, controler)


module.exports = routes

