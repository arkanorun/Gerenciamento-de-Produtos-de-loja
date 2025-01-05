const { productsToArray, productsToJson, createId, searchProduct, createTable, filterCategory } = require("../utils/functions")
const url = 'src/dataBase/products.json'
const arrayProducts = productsToArray(url)
const {productsTable} = arrayProducts


const productAdd = (req,res) => {
    const {name, category, quantity, price} = req.body
    
    try {
    
    const productSearch = searchProduct(productsTable,req.body)

    if(productSearch){
        return res.status(500).json({
            message: `Não foi possível cadastrar um novo produto pois, o produto informado já existe no estoque`})
    }

    const newId = createId(productsTable)
    

    productsTable.push({
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
      const {category } = req.query

      if(!category){

      const formatTable = createTable(productsTable);
         
return res.type("text.plain").status(200).send(formatTable)  
}

const categoryArray = createTable(filterCategory(category, productsTable))


if (categoryArray.length > 0){
    return res.type("text.plain").status(200).send(categoryArray)
} else {
    return res.status(404).json(`não foram encontrados produtos com a categoria listada`)
}
}


// const productUpdate




module.exports = {productAdd, productList}