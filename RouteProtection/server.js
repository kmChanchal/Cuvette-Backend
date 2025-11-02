const express = require('express');
const app=express();
const mainRoutes=require('./Route/main');
const adminRoutes=require('./Route/admin');
const PORT=3004;

// Mount main routes at /main
app.use('/main',mainRoutes);
// Mount admin routes at /admin
app.use('/admin',adminRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
