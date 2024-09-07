const Emp=require("../models/employee.model.js")
async function updateEmployee(req,res){
    const body=req.body
    await Emp.findByIdAndUpdate(req.params.id,{
        firstName:body.first_name,
        lastName:body.last_name,
        employeeId:body.empId,
        employeeDepartment:body.empDpt,
        employeeSalary:body.empSalary

    })
    return res.redirect('/')
}
module.exports=updateEmployee