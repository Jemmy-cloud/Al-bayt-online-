const ProductsRouter = require("express").Router()
const middlewares = require("../util/middlewares")
const ProductsController = require("../controllers/Products")

ProductstRouter.get("", ProductsController.selectProducts)
ProductsRouter.post("", ProductsController.addProducts)
productRouter.put("", middlewares.checkProductsAuth)
productRouter.delete("", middlewares.checkProductsAuth)
productRouter.patch("", middlewares.checkProductsAuth)


module.exports = ProductsRouter