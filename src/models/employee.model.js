const mongoose = require("mongoose")

const Employee=new mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    employeeId:{
        type:Number,
        required:true
    },
    employeeDepartment:{
        type:String,
        required:true
    },
    employeeSalary:{
        type:Number,
        required:true
    }
})

const Emp=mongoose.model('Emp',Employee)
module.exports=Emp