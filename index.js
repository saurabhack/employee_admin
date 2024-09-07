const express=require("express")
const app=express()
const handleRouters=require("./src/rotes/addEmployeeRoute.js")
const mongoose=require("mongoose")
const port=8000

app.use(express.json())
app.use('/api',handleRouters)
mongoose.connect('mongodb://127.0.0.1:27017/employees').then(()=>{
    console.log("mongodb is successfully connected")
}).catch((err)=>{
    console.log(err)
})
app.listen(port,()=>{
    console.log(`server is connected at the port of http://localhost:${port}`)
})