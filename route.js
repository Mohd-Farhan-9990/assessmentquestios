const controller = require("./controller")
const express = require('express')
const router = express.Router()


router.post("/add",controller.postapi)
router.post("/update",controller.updateApi)

router.all('/***',function(req,res){
    res.send("Url not found")
})
module.exports = router