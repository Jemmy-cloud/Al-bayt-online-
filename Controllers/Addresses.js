const sql = require('mssql')
var config = require("../dbconfig")
var Addresses = require("../Models/Addresses")

async function getAddresses() {
    try {
        await sql.connect(config)
        const result = await sql.query("select * from TbAddresses")
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
}

async function addAddresses(AddressesId,Addresses)
{
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
        .input('input_Parameter',sql.Int, AddressesId)
        .input('AddressesName',sql.NVarChar,Addresses.AddressesName)
        .input('AddressesEmail',sql.NVarChar,Addresses.AddressesEmail)
        .input('AddressesPhone',sql.NVarChar,Addresses.AddressesPhone)
        .input('AddressesCity',sql.NVarChar,Addresses.AddressesCity)
        .input('AddressesGovernorate',sql.NVarChar,Addresses.AddressesGovernorate)
        .input('AddressesInformation',sql.NVarChar,Addresses.AddressesInformation)
        .input('CustomerId',sql.NVarChar,Addresses.CustomerId)
        .input('IsFinal',sql.NVarChar,Addresses.IsFinal)
        .query("INSERT INTO TbAddresses (AddressesName,AddressesEmail,AddressesPhone,AddressesCity,AddressesGovernorate,AddressesInformation,CustomerId,IsFinal) VALUES (@AddressesName,@AddressesEmail,@AddressesPhone,@AddressesCity,@CustomerId,@IsFinal,@input_Parameter)")
        return result.recordset;
    } catch (err) {
        console.log(err);
    }
}



exports.NoteGetAddresses = (request,response)=>{
    getAddresses().then(res =>{
        console.log(res);
        response.status(200).json(res)
    }).catch(err=>{
        console.log(err);
    })
}

exports.NotePostAddressesByEmployee = (request,response)=>{
    let Addresses = {...request.body}
    if (Addresses.AddressesName == null || Addresses.AddressesStatus == null)
    {
        return response.status(400).json({msg: 'Bad Request. Please Fill all fields'})
    }
    addAddresses(request.params.id,Addresses).then(result=>{
        response.status(201).json({
            status:"ok",
            msg: "create"
        })
    }).catch(err=>{
        response.status(404).json("Error")
    })
}

