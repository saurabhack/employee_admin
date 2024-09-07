const Emp=require("../models/employee.model.js")
async function showEmployee(req,res){
    const allEmployees=await Emp.find()
    return res.render('home',{
        employees:allEmployees
    })
}
module.exports=showEmployee