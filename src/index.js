const express = require("express")
const app = express()

app.get("/",(req,resp)=>{
    resp.send("this is the home page")
})

app.listen(5000)