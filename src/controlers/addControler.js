const { productsToArray, productsToJson, createId, createTable, filterCategory, searchProductName, searchProductCategory, searchProductId } = require("../utils/functions")
const url = 'src/dataBase/products.json'
const arrayProducts = productsToArray(url)
const {productsTable} = arrayProducts


const productAdd = (req,res) => {
    const {name, category, quantity, price} = req.body
    
    try {
    
    const searchName = searchProductName(arrayProducts,req.body)
    const searchCategory = searchProductCategory(arrayProducts,req.body)


    if(searchName && searchCategory){
        return res.status(500).json({
            message: `Não foi possível cadastrar um novo produto pois, já existe um produto com mesmo nome e categoria no estoque`})
    }

    const newId = createId(arrayProducts)
    

    arrayProducts.push({
        id: newId,
        name,
        category,
        quantity,
        price
    })

    productsToJson(url,arrayProducts)

    return res.status(201).json("Produto adicionado com suceso a a agilStore")
} catch (error) {
        return res.status(500).json({message: error.message})
}
}


const productList = (req,res)  => {
      const {category} = req.query

      if(!category){
      const formatTable = createTable(arrayProducts);
         
return res.type("text.plain").status(200).send(formatTable)  
}

const categoryArray = filterCategory(category, arrayProducts)


if (categoryArray.length > 0){
    categoryArray = createTable(categoryArray)
    return res.type("text.plain").status(200).send(categoryArray)
} else {
    return res.status(404).json(`não foram encontrados produtos com a categoria listada`)
}
}


const productUpdate = (req,res) => {
    let {id} = req.params
    const {name, category, quantity, price} = req.body
    id = Number(id)

    const findArray = searchProductId(arrayProducts,req.params)
    
        if(name){
            findArray.name= name
        }
        
        if(category){
            findArray.category = category
        }

        if(quantity){
            findArray.quantity = quantity
        }

        if(price){
            findArray.price = price
        }

        productsToJson(url,arrayProducts)

        return res.status(200).json({mensagem:`O produto de id: ${id} foi atualizado!`})
}




module.exports = {productAdd, productList, productUpdate}