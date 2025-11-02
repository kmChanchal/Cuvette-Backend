const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.send('User Home Page');
});
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User Profile Page for User ID: ${userId}`);
});
module.exports = router;
