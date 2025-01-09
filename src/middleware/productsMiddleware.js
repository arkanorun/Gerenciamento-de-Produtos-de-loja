const { productsToArray, searchProductId } = require("../utils/functions");
const url = "src/dataBase/products.json";
const arrayProducts = productsToArray(url);
const { productsTable } = arrayProducts;

const createCheck = (req, res, next) => {
  const { name, category, quantity, price } = req.body;
  try {
    if (!name && !category && !quantity && !price) {
      return res.status(404).json({
        mensagem:
          "Insira as propriedades: name, category, quantity, price pois elea são obrigatórias para cadastramento do produto",
      });
    } else if (!name) {
      return res
        .status(404)
        .json({ mensagem: "propriedade nome é obrigatória" });
    } else if (!category) {
      return res
        .status(404)
        .json({ mensagem: "propriedade category é obrigatória" });
    } else if (!quantity) {
      return res
        .status(404)
        .json({ mensagem: "propriedade quantity é obrigatória" });
    } else if (!price) {
      return res
        .status(404)
        .json({ mensagem: "propriedade price é obrigatória" });
    } else if (
      (quantity && typeof quantity !== "number") ||
      (price && typeof price !== "number")
    ) {
      return res.status(400).json({
        mensagem: "os campos quantity e price precisam ser valores numéricos",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

const updateCheck = (req, res, next) => {
  const { name, category, quantity, price } = req.body;
  const { id } = req.params;
  const findArray = searchProductId(productsTable, id);

  try {
    if (!Number(id)) {
      return res.status(400).json({
        mensagem: "id inválido! Por favor informe um id de valor numerico",
      });
    } else if (!findArray) {
      return res.status(404).json({
        mensagem:
          "Atualização não concluida, não foi encontrado o produto para o id informado",
      });
    } else if (!name && !category && !quantity && !price) {
      return res.status(404).json({
        mensagem: "Ao menos uma propriedade do produto deve ser informada",
      });
    } else if (
      (quantity && typeof quantity !== "number") ||
      (price && typeof price !== "number")
    ) {
      return res.status(400).json({
        mensagem: "os campos quantity e price precisam ser valores numéricos",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

const deleteCheck = (req, res, next) => {
  const { id } = req.params;
  const { confirm } = req.body;
  const findArray = searchProductId(productsTable, id);

  try {
    if (!Number(id)) {
      return res.status(400).json({
        mensagem: "id inválido! Por favor informe um id de valor numerico",
      });
    } else if (!findArray) {
      return res.status(404).json({
        mensagem:
          "Exclusão não concluida, não foi encontrado o produto para o id informado",
      });
    } else if (typeof confirm !== "boolean") {
      return res
        .status(400)
        .json({
          mensagem: `O valor da propriedade confirm deve ser true se deseja confirmar a exclusão ou false se não quiser que o produto seja excluído`,
        });
    }

    next();
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

const detailCheck = (req, res, next) => {
  const { id, name } = req.query;

  let findProductDetail;

  try {
    if (id && !Number(id)) {
      return res.status(400).json({
        mensagem: "id inválido! Por favor informe um id de valor numerico",
      });
    }

    if (name && !String(name)) {
      return res.status(400).json({
        mensagem:
          "nome inválido! Por favor informe um nome do tipo texto (string)",
      });
    }

    if (!name && !id) {
      return res.status(400).json({
        mensagem:
          "É necessário passar ao menos um dos atributos: id ou name como parametro query após a rota (ex: nomedarota?id=3 ou nomedarota?nome=com)",
      });
    }

    if (id) {
      findProductDetail = searchProductId(productsTable, id);
    }

    if (name) {
      findProductDetail = productsTable.filter((element) => {
        return element.name.toLowerCase().startsWith(name.toLowerCase());
      });
    }

    if(findProductDetail.length < 1){
        return res.status(400).json({
            mensagem: "Não foi encontrado nenhum produto que corresponda as informações passadas",
          });
        }
        
    next();
  } catch (error) {
    return res.status(500).json({ mensagem: error.message });
  }
};

module.exports = { createCheck, updateCheck, deleteCheck, detailCheck };
