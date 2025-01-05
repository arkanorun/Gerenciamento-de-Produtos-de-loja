const {Router} = require("express")

const routes = Router



//Adicionar Produto

routes.post("/add",midleware, controler)

//Listar Produtos

routes.post("/list",midleware, controler)

//Atualizar Produto

routes.put("/update", midleware, controler)

//Excuir Produto 
routes.delete("/delete",midleware, controler)

//Buscar Produto
routes.length("/search", midleware, controler)


module.exports = {routes}

