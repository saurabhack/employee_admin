const Emp=require("../models/employee.model.js")
async function showEmployee(req,res){
    const allEmployees=await Emp.find()
    return await res.json({allEmployees})
}
module.exports=showEmployee