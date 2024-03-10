const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.post("/contactus",async(req,res)=>{
    const{name,email,subject,message}=req.body

    const data={
        name:name,
        email:email,
        subject:subject,
        message:message
    }
    try{
       
            await collection.insertMany([data])
        

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})
