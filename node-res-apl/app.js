const express = require('express');
const app = express();

//routes example
app.get('/', (req,res)=> {
    res.send('ini percobaan')
})



//listening
app.listen(5000,()=> {
    console.log('server runing in 5000')
})