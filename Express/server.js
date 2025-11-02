const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; connect-src 'self' http://localhost:3000 ws://localhost:3000;");
    next();
});

app.use(express.json());

let products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
    { id: 3, name: 'Product C', price: 200 }
];

// GET all products
app.get('/products', (req, res) => {
    res.json(products);
});

// GET a single product by id
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) 
        return res.status(404).json({message:'Product not found'});
    res.json(product);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
