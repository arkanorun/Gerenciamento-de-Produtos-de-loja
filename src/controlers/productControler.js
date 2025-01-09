const { productsToArray, productsToJson, createId, createTable, filterCategory, searchProductName, searchProductCategory, searchProductId, findIndexProductId } = require("../utils/functions")
const url = 'src/dataBase/products.json'
const arrayProducts = productsToArray(url)
const {productsTable} = arrayProducts


const productAdd = (req,res) => {
    const {name, category, quantity, price} = req.body
    
    try {
    
    const searchName = searchProductName(productsTable,name)
    const searchCategory = searchProductCategory(productsTable,category)


    if(searchName && searchCategory){
        return res.status(400).json({
            message: `Não foi possível cadastrar um novo produto pois, já existe um produto com mesmo nome e categoria no estoque`})
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
      const {category} = req.query

      if(!category){
      const formatTable = createTable(productsTable);
         
return res.type("text.plain").status(200).send(formatTable)  
}

const categoryArray = createTable(filterCategory(category, productsTable))


if (categoryArray.length > 0){
    
    return res.type("text.plain").status(200).send(categoryArray)
} else {
    return res.status(404).json(`não foram encontrados produtos para a categoria listada`)
}
}


const productUpdate = (req,res) => {
    let {id} = req.params
    const {name, category, quantity, price} = req.body
    id = Number(id)
    
    const findArray = searchProductId(productsTable,id)
    
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

const productDelete = (req,res) => {
    let {id} = req.params
    const {confirm} = req.body

    const findArray = findIndexProductId(productsTable,id)

    if(confirm){
productsTable.splice(findArray,1)

productsToJson(url,arrayProducts)
return res.status(200).json({mensagem: `O produto de id: ${id} foi excluído`})

} else if (!confirm) {
    return res.status(200).json({mensagem: `Se deseja excluir o protudo insira o valor boleano true para a propriedade confirm`})
}
}

const productDetail = (req,res) => {
    const {id, name} = req.query
    let findProductDetail

    if (id) {
         findProductDetail = searchProductId(productsTable,id)
    } 

    if(name){
        findProductDetail =  productsTable.filter(element => {
          return element.name.toLowerCase().startsWith(name.toLowerCase())
    });
    }

    return res.status(200).json(findProductDetail)

}



module.exports = {productAdd, productList, productUpdate, productDelete, productDetail}