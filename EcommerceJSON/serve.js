const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = 3000;
app.use(express.json());

// Middleware to set Content Security Policy headers
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "default-src 'self'; font-src 'self' data:; connect-src 'self' http://localhost:3000 ws://localhost:3000;");
    next();
});

const dataPath = path.join(__dirname, 'data');

async function readProducts(file) {
    const filePath = path.join(dataPath, file);
    const data = await fs.promises.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

async function writeProducts(file, data) {
    const filePath = path.join(dataPath, file);
    await fs.promises.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

app.get('/products', async (req, res) => {
    try {
        const products = await readProducts('products.json');
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read products' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
