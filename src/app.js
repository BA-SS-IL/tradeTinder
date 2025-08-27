const express = require('express');

const app = express();

app.use('/signUp',(req,res)=>{
    res.send('welcome to signUp page')
})

app.listen(3000,()=>{
    console.log('server is successfully listening port 3000')
})
