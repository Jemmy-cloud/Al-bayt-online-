const EmployeesRouter = require("express").Router()
const EmployeesController = require("../controllers/Employees")


EmployeesRouter.get("/", EmployeesController.selectEmployees)


EmployeesRouter.post("/", EmployeesController.addAdmin)
EmployeesRouter.post("/login", Employeescontroller.login)



module.exports = EmployeesRouter