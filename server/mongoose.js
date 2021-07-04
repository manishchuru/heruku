const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/editprofile',{ useNewUrlParser: true ,useUnifiedTopology: true},(err)=>{
    if(err) throw err;
    console.log('server connected ');
});
