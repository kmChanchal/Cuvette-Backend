const express = require('express');
const app = express();

app.get('/products', (req, res) => {
    res.json([{ id: 1, name: 'Product A' }, { id: 2, name: 'Product B' }]);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
