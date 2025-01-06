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


const searchProductId = (products, productData) => {
    if(productData && products.length > 0){
    const searchId = products.find((element, ) => {
        return element.id === Number(productData.id)
    })
    if(searchId){
        return searchId
    } 
}
}


const searchProductName = (products, productData) => {
    if(productData && products.length > 0){
    const searchName = products.find((element) => {
        return element.name === productData.name
    })
    if(searchName){
        return searchName
    } 
}
}

const searchProductCategory = (products, productData) => {
    if(productData && products.length > 0){
    const searchCategory = products.find((element) => {
        return element.category === productData.category
    })
    if(searchCategory){
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
    const headers = ['ID', '    Nome        ', '   Categoria    ', 'Quantidade', 'Preço (R$)'];
    const lines = products.map((product) => {
       return `${product.id.toString().padEnd(5)}${product.name.padEnd(15)}${product.category.padStart(20).padEnd(20)}${Number(product.quantity).toFixed(2).padStart(10)}${Number(product.price).toString().padStart(10)}`
});
  
//gerar tabela formatada

    const table = [
      headers.join(' | '),
      '-------------------------------------------------------------------',
      ...lines,
    ].join('\n');
  
    return table;
  }

  const filterCategory = (category, array) => {
    const categoryFilter = array.filter((element) => {
        return element.category.toLowerCase() === category.toLowerCase()
    })

    return categoryFilter
  }

  

module.exports = {searchProductName,searchProductCategory, searchProductId, productsToArray, productsToJson, createId, createTable, filterCategory}