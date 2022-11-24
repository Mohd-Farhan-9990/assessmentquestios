const mongoose = require('mongoose')

const inventory = new mongoose.Schema({

    productId :{
        type :Number,
        required: true
    },
    quantity:{
        type:Number,
        required:true,
    }

})

module.exports = mongoose.model('Inventory',inventory)