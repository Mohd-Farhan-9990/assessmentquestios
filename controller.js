const { findOneAndUpdate } = require('./model.js')
const model = require('./model.js')

const postapi = async function(req,res){
    try{
            
        let{productId,quantity} = data
        console.log(data)

        const createdData = await model.create(data)
        return res.status(201).send(createdData)



    }catch(err){
        res.status(500).send(err)
    }
}


const updateApi = async function(req,res){

    try{

        let data = req.body
        let{productId,quantity,operation} = data

        let existData = await model.findOne({productId:productId})
        if(!existData){
            return res.status(404).send("No product with this id")
        }
        let totalquantity = existData.quantity
        console.log(totalquantity)
        if(quantity>totalquantity && operation=="subtract"){
            return res.status(400).send("Total quantity is less then subtracting quantity")
        }
        if(operation=="add" && quantity>0){
            existData.quantity = totalquantity+quantity
        }else if(operation=="add" && quantity<= 0){
            return res.status(400).send("quantity can't be less then 1 ")
        }
        if(operation=="subtract"){
            existData.quantity = totalquantity-quantity
        }
        console.log(existData.quantity)
            let updatedData = await model.findOneAndUpdate({productId:productId},{quantity:existData.quantity},{new:true})
            console.log(updatedData)
            return res.send({message:"Updated Succesfully",Data:updatedData})
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
module.exports = {postapi,updateApi}