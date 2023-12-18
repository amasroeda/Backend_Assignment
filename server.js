const express = require('express')
const mongoose = require ('mongoose')
const app = express()


//routes
app.get('/',(req, res)=>{
    res.send('Backend IA')
})





mongoose.connect('mongodb+srv://amasroeda:kLYS3X2izCqe5OCb@amasroeda.zqeqz0o.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected to Mongo.DB')
    app.listen(3000, ()=> {
        console.log(`Node Api app is running on port 3000`)
    });    
}).catch((error)=> {
    console.log(error)
})