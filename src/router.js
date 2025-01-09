const {Router} = require("express")
const { productAdd ,productList, productUpdate, productDelete, productDetail  } = require("./controlers/productControler")
const { updateCheck, createCheck, deleteCheck, detailCheck } = require("./middleware/productsMiddleware")


const routes = Router()



//Adicionar Produto

routes.post("/add", createCheck, productAdd)

//Listar Produtos

routes.get("/list", productList)

//Atualizar Produto

routes.put("/update/:id", updateCheck, productUpdate)

//Excuir Produto 
routes.delete("/delete/:id", deleteCheck, productDelete)

//Detalhar Produto
routes.get("/detail", detailCheck, productDetail)


module.exports = routes

