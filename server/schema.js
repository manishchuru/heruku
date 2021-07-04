const mongoose = require('mongoose');
const Schemadb = new mongoose.Schema({
    email:String,
    password:Number,
    fname:String,
    lname:String,
    age:Number
    
});
const Iphone = mongoose.model('Iphone',Schemadb);
module.exports = Iphone;