const addEmployee=require("../controller/addEmployee.controller.js")
const express=require("express")
const router=express.Router()
const showEmployees=require("../controller/showEmployee.controller.js")
const deleteEmployee = require("../controller/deleteEmployee.controller.js")
router.get("/employees",showEmployees)
router.post("/addEmployees",addEmployee)
router.delete('/deleteEmployee/:id',deleteEmployee)

module.exports=router
