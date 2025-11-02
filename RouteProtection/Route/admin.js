const express = require('express');
const router = express.Router();
const requestLogger = require('../middleware/logger');
const isAuthenticated=require('../middleware/auth');
router.use(isAuthenticated);

// Apply the logger middleware to all admin routes
router.use(isAuthenticated);
// Admin dashboard route
router.get('/dashboard', (req, res) => {
    res.send({message:'Welcome to the Admin Dashboard'});
});
router.get('/settings', (req, res) => {
    res.send({message:'Admin Settings Page'});
});
module.exports = router;
