const express = require('express');
const mongoose = require ('mongoose');
const router = require('./routes/studentRoutes');

require('dotenv/config');

const app = express();
app.use(express.json());    
app.use(router);

mongoose.connect(process.env.DATABASE,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connection successful and running ');
}).catch((e)=>{
    console.log('no connection');
})



app.listen(process.env.PORT,()=>{
    console.log(`connection  ${process.env.PORT}`);
})