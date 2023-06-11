const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Karolis5:OqMb5XE4qj2sQQRe@karolis5.jpyhq86.mongodb.net/praktika'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose