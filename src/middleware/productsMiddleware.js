const { checkout } = require("../router")
const { productsToArray, productsToJson, createId, searchProduct } = require("../utils/functions")
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







module.exports = {bodyCheck}
