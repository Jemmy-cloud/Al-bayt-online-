const customertRouter = require("express").Router()
const customerController = require("../controllers/customer")
const middleWares = require("../util/middlewares")

customerRouter.get("", customerController.selectcustomer)
customerRouter.post("", middleWares.checkbankerAuth, customerController.addcustomer)
customerRouter.post("/login", customerController.login)
customerRouter.put("", middleWares.checkbankerAuth, )
customerRouter.delete("", )



module.exports = customerRouter