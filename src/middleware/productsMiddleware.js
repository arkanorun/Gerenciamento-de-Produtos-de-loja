const { checkout } = require("../router")
const { productsToArray, productsToJson, createId, searchProduct, searchProductId } = require("../utils/functions")
const url = 'src/dataBase/products.json'
const arrayProducts = productsToArray(url)
const {productsTable} = arrayProducts


const bodyCheck = (req, res, next) => {
    const {name, category, quantity, price} = req.body
try {
       
   if(!name && !category && !quantity && !price){
    return res.status(404).json({mensagem: "Insira as propriedades: name, category, quantity, price pois elea são obrigatórias para cadastramento do produto"})
   } else if(!name) {
        return res.status(404).json({mensagem: "propriedade nome é obrigatória"})
    } else if(!category){
        return res.status(404).json({mensagem: "propriedade category é obrigatória"})
    } else if(!quantity){
        return res.status(404).json({mensagem: "propriedade quantity é obrigatória"})
    } else if(!price) {
        return res.status(404).json({mensagem: "propriedade price é obrigatória"})

    }
    next()
} catch (error) {
 return res.status(500).json({mensagem: error.message})   
}
}



const updateCheck = (req, res, next) => {
    const {name, category, quantity, price} = req.body
    const {id} = req.params
    const findArray = searchProductId(productsTable,req.params)
    
    try {

        if(!Number(id)){
            return res.status(500).json({mensagem: "id inválido! Por favor informe um id de valor numerico"})
        }
            
        if(!findArray){
        return res.status(404).json({mensagem: "Atualização não concluida, não foi encontrado o produto para o id informado"})
        }

            
       if(!name && !category && !quantity && !price){
        return res.status(404).json({mensagem: "ao menos uma propriedade do produto deve ser informada"})
    }

    next()
} catch (error) {
 return res.status(500).json({mensagem: error.message})   
}
}







module.exports = {bodyCheck, updateCheck}
