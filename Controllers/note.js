const sql = require('mssql')
var config = require("../dbconfig")
var Category = require("../Models/Category")

async function getCategory() {
    try {
        await sql.connect(config)
        const result = await sql.query("select * from TbCategories")
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
}

async function addCategory(employeeId,Category)
{
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
        .input('input_Parameter',sql.Int, employeeId)
        .input('CategoryName',sql.NVarChar,Category.CategoryName)
        .input('CategoryStatus',sql.NVarChar,Category.CategoryStatus)
        .input('CategoryImage',sql.NVarChar,Category.CategoryImage)
        .input('ParentCategoryId',sql.NVarChar,Category.ParentCategoryId)
        .input('IsFinal',sql.NVarChar,Category.IsFinal)
        .query("INSERT INTO TbCategories (CategoryName,CategoryStatus,CategoryImage,ParentCategoryId,IsFinal,CreatedBy) VALUES (@CategoryName,@CategoryStatus,@CategoryImage,@ParentCategoryId,@IsFinal,@input_Parameter)")
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
}



exports.NoteGetCategoies = (request,response)=>{
    getCategory().then(res =>{
        console.log(res);
        response.status(200).json(res)
    }).catch(err=>{
        console.log(err);
    })
}

exports.NotePostCategoryByEmployee = (request,response)=>{
    let category = {...request.body}
    if (category.CategoryName == null || category.CategoryStatus == null)
    {
        return response.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }
    addCategory(request.params.id,category).then(result=>{
        response.status(201).json({
            status:"ok",
            msg: "create"
        })
    }).catch(err=>{
        response.status(404).json("Error")
    })


    

    
}