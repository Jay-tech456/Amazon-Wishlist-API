

let mongoose = require("mongoose")
let Schema = mongoose.Schema

    // if it's not present in the schema, then it will not be save
let product = new Schema ({ 

    title: String, 
    price: Number, 
    likes: {type: Number, default: 0}
})


module.exports = mongoose.model('Product', product)