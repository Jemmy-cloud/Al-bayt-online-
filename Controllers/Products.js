const sql = require('mssql')
var config = require("../dbconfig")
var Products = require("../Models/Products")
const joi = require("joi")

async function getProducts() {
    try {
        await sql.connect(config)
        const result = await sql.query("select * from TbProducts")
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
} 


async function addProducts(employeeId,Products)
{
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
        .input('input_Parameter',sql.Int, employeeId)
        .input('ProductName',sql.NVarChar,Product.ProductName)
        .input('ProductStatus',sql.NVarChar,Product.ProductStatus)
        .input('ProductImage',sql.NVarChar,Product.ProductImage)
        .input('IsFinal',sql.NVarChar,Product.IsFinal)
        .query("INSERT INTO TbCategories (ProductName,ProductStatus,ProductImage,,IsFinal,CreatedBy) VALUES (@ProductName,@ProductStatus,@ProductImage,@IsFinal,@input_Parameter)")
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
}

    const Product = new Product(name, '0', syllabus)

    const ProductSchema = joi.object({
        id: joi.number().min(0).max(50).required(),
        name: joi.string().not().empty().normalize().min(3).max(20).pattern(/[a-z A-Z]{3,20}/).required(),
        syllabus: joi.string().not().empty().normalize().min(3).max(100).pattern(/[a-z A-Z]{3,100}/).required(),

    })

    const joiErrors = ProductSchema.validate(course)

    if (joiErrors.error) {
        console.log(joiErrors.error.details);
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request"
        })
    }

    exports.ProductsGetProducts = (request,response)=>{
        getProducts().then(res =>{
            console.log(res);
            response.status(200).json(res)
        }).catch(err=>{
            console.log(err);
        })
    }
    
    exports.ProductsPostProductsByEmployee = (request,response)=>{
        let Products = {...request.body}
        if (Products.ProductsName == null || Products.ProductsStatus == null)
        {
            return response.status(400).json({msg: 'Bad Request. Please Fill all fields'})
        }
        addProducts(request.params.id,Products).then(result=>{
            response.status(201).json({
                status:"ok",
                msg: "create"
            })
        }).catch(err=>{
            response.status(404).json("Error")
        })
    
    
        
    
        
    }


exports.updateProducts = (request, response) => {
    const knex = request.app.locals.knex

}
exports.deleteProducts = (request, response) => {
    const knex = request.app.locals.knex

}
exports.restoreProducts = (request, response) => {
    const knex = request.app.locals.knex

}





