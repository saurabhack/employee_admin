const Emp=require("../models/employee.model.js")
async function deleteEmployee(req,res){
    await Emp.findByIdAndDelete(req.params.id)
    return res.redirect('/')
}
module.exports=deleteEmployee