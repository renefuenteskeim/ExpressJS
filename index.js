const express = require('express');
const app = express(); // servidor

app.all('/user',(req,res,next)=>{
    console.log('Por aca');
    next();
})


app.get('/user',(req,res)=>{
    res.json({
        name:'Rene',
        edad:28
    });
});

app.use(express.json());


app.post('/user/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('Post recibido')
});

app.put('/user/:id',(req,res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} updated`)
});

app.delete('/user/:userId',(req,res)=>{
    console.log(req.body);
    res.send(`User ${req.params.userId} deleted`)
});

app.listen(3000, () => {
    console.log('Server on');
});