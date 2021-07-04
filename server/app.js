const express = require('express');
require('./mongoose');
const Iphone = require('./schema.js');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.get('/Hello',async(req,res)=>{
      const data = await Iphone.find();
      res.send(data);
})
app.post('/Hello',async(req,res)=>{
    const data =  new Iphone(req.body);
    const detail = await data.save();
    res.send(detail);
    console.log(detail);
    
})
app.listen(4000,console.log('hello server on here dont worry'))