

let express = require('express')
let app = express()

let bodyParser = require('body-parser')
let mongoose = require('mongoose')

let db = mongoose.connect('mongodb://localhost/amazon_wishlist')

let Product = require('./model/product')
let Wishlist = require('./model/wishlist')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.post('/product', (req, res) =>{
    
    let product = new Product()         // allows you to create a new product
    
    product.title = req.body.title
    product.price = req.body.price
    
    
    product.save(). 
    then((products) =>{
        res.send(products)
    }).catch((err) => {
            
            console.log(err)
    })
    
})


app.get('/product', (req, res) => { 
    Product.find()
    .then((products)=>{
        res.send(products)
    }).catch((err) => { 
        console.og(err)
    })
})


app.get('/wishlist', (req, res)=> { 

    Wishlist.find()
    .then((products) => {
      res.json(products)
    }).catch((err) => { 
        console.log(err)
    })

})


app.post('/wishlist', (req, res)=> {
    
    let wishlist = new Wishlist()
    
    wishlist.title = req.body.title
    
    wishlist.save()
    .then((products) => { 
        res.send(products)
    }).catch((err) => 
        console.log(err)        
    )
})

app.put('/wishList/product/add', (req, res)=>{
    Product.findOne({_id: req.body.productId})
    .then((products) =>{ 
        Wishlist.findOneAndUpdate({_id: req.body.wishListId}, {$addToSet: {products: products._id}})
        .then((List)=> {
            res.send(List)
        }) .catch((err) => 
               res.send(err)  
        )
        }).catch((err) => console.log(err))

})

app.listen(3004, () => {
          
    console.log("Server is Running.... Listening on port 3004")
})