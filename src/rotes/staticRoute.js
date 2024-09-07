const express=require("express")
const router=express.Router()
const Emp=require("../models/employee.model.js")
router.get('/', async (req,res)=>{
    const employees= await Emp.find()
    return res.render('home',{
        emp:employees
    })
})
router.post('/update/:id',async (req,res)=>{
    const employee= await Emp.findById(req.params.id)
    return res.render('update',{
        emp:employee
    })
})

module.exports=router