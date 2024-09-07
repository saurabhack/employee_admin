const Emp = require("../models/employee.model.js")
async function addEmployee(req,res){
     const body=req.body
     if(!body || !body.first_name || !body.last_name || !body.empId || !body.empDpt || !body.empSalary){
        return res.json({msg:"all fields are mendatory !!"})
     }else{
        await Emp.create({
            firstName:body.first_name,
            lastName:body.last_name,
            employeeId:body.empId,
            employeeDepartment:body.empDpt,
            employeeSalary:body.empSalary
     })
        res.json({msg:"user is created successfully"})
     }
}
module.exports=addEmployee