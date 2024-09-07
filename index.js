const express=require("express")
const app=express()
const path=require("path")
const handleRouters=require("./src/rotes/addEmployeeRoute.js")
const handleStaticRouter=require("./src/rotes/staticRoute.js")
const mongoose=require("mongoose")
const port=8000

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.set('views',path.resolve('./src/views'))

app.use('/api',handleRouters)
app.use('/',handleStaticRouter)
mongoose.connect('mongodb://127.0.0.1:27017/employees').then(()=>{
    console.log("mongodb is successfully connected")
}).catch((err)=>{
    console.log(err)
})
app.listen(port,()=>{
    console.log(`server is connected at the port of http://localhost:${port}`)
})