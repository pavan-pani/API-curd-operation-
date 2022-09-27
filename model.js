const mongoose =require('mongoose')

const fooditems=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('items',fooditems)