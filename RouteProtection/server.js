require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 3000;
const mainRouter = require('./Route/main');
const adminRouter = require('./Route/admin');
app.use(helmet());
app.use(express.json());
app.use('/', mainRouter);
app.use("/admin", adminRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
