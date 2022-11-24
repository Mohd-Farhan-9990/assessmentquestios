const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const route = require('./route.js')
app.use(bodyParser.json())


let url = "mongodb+srv://MohdFarhan9990:LxP62162nUtlmSsp@cluster0.1zhmxfg.mongodb.net/assesmentdb"

mongoose.connect(url,{useNewUrlParser:true})
.then(()=>{console.log("MongoDb is connected")})
.catch((err)=>{console.log(err)})

app.use("/",route)
app.listen(3001,function(error){
    if(error)console.log(error)
    console.log("App is running on PORT 3001")
})

