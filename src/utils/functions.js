const fs = require('fs')


const productsToArray = (urlFile) => {
    let data = fs.readFileSync(urlFile)
    let dataArray = JSON.parse(data)
    return dataArray
}


const productsToJson = (urlFile, array) => {
    let dataString = JSON.stringify(array)
    fs.writeFileSync(urlFile, dataString)
}


const searchProductId = (products, id) => {

    if(id && products.length > 0){
    const searchId = products.find((element) => {
        return Number(element.id) === Number(id)
    })
    if(searchId){
        return searchId
    } 
}
}


const searchProductName = (products, name) => {
    if(name && products.length > 0){
    const searchName = products.find((element) => {
        return element.name === name
    })
    if(searchName){
        return searchName
    } 
}
}

const searchProductCategory = (products, category) => {
    if(category && products.length > 0){
    const searchCategory = products.find((element) => {
        return element.category === category
    })
    if(searchCategory){
        return searchCategory
    } 
}
}

const findIndexProductId = (products, id) => {
    if(id && products.length > 0){
        const searchCategory = products.findIndex((element) => {
            return Number(element.id) === Number(id)
        })
        if(searchCategory >= 0){
            return searchCategory
        } 
    }
    }

const createId = (array) => {
  
    if (array.length > 0) {
        
   const id = array.map((element) => {
   return Number(element.id)
    }) 
    return (Math.max(...id) + 1)

    } else {
    return 1
}
}

function createTable(products) {
    
    if(products.length > 0){
    const headers = ['ID', '    Nome        ', '   Categoria    ', 'Quantidade', 'Preço (R$)'];
    const lines = products.map((product) => {
       return `${product.id.toString().padEnd(5)}${product.name.padEnd(15)}${product.category.padStart(20).padEnd(20)}${Number(product.quantity).toFixed(2).padStart(10)}${Number(product.price).toString().padStart(10)}`
})
  
//gerar tabela formatada

    const table = [
      headers.join(' | '),
      '-------------------------------------------------------------------',
      ...lines,
    ].join('\n');
  
    return table
    
  } else {
const table = []
return table
}
}

  const filterCategory = (category, array) => {
    const categoryFilter = array.filter((element) => {
        return element.category.toLowerCase() === category.toLowerCase()
    })

    return categoryFilter
  }

  

module.exports = {searchProductName,searchProductCategory, searchProductId, productsToArray, productsToJson, createId, createTable, filterCategory, findIndexProductId}