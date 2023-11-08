const express = require("express");
const app = express()
let PORT = 5000
const sendMail = require("./controllers/sendMail")
 
app.get("/", (req,res)=>{
    console.log("Iam asrever")
})
app.get("/mail", sendMail)

const start = async()=>{
    try{
      app.listen(PORT, ()=>{
        console.log(` iam a server ${PORT} `)
      })
    }catch(error){
      console.log(error)
    }
}
start();
