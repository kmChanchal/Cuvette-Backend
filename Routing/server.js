/*const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./Routes/users');

app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/
const express=require('express')
const productsRouter=require('./Routes/products');
const app=express();
const port=3000;
app.use(express.json());
app.use('/products',productsRouter);
app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})
