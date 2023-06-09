

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = mongoose.Schema.Types.ObjectId


let wishList = new Schema({ 

    title: {type: String, default: "Coole Wish List"}, 
    products: [{type: ObjectId, ref: 'Product'}]        // relationship
    
})

module.exports = mongoose.model("WishLish", wishList)