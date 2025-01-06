const {Router} = require("express")
const { productAdd, productList, productUpdate } = require("./controlers/addControler")
const { bodyCheck, updateCheck } = require("./middleware/productsMiddleware")

const routes = Router()



//Adicionar Produto

routes.post("/add", bodyCheck, productAdd)

//Listar Produtos

routes.get("/list", productList)

//Atualizar Produto

routes.put("/update/:id", updateCheck, productUpdate)

//Excuir Produto 
// routes.delete("/delete",midleware, controler)

//Buscar Produto
// routes.length("/search", midleware, controler)


module.exports = routes

